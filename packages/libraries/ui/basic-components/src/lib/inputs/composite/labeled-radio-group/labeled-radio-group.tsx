import { useId } from "react";
import BaseRadioGroup, { RadioGroupDisplayValueProps } from "../../base/base-radio-group/base-radio-group";
import BaseInputErrorText from "../../base/base-input-error-text/base-input-error-text";
import BaseInputLabel from "../../base/base-input-label/base-input-label";
import { BaseRequiredSymbol } from "../../base/symbology/base-required-symbol/base-required-symbol";
import { LabeledInputProps } from "../labeled-input-props";

export interface LabeledRadioGroupProps<T> extends
  RadioGroupDisplayValueProps<T>,
  LabeledInputProps<HTMLInputElement> { }

export function LabeledRadioGroup<T>(props: LabeledRadioGroupProps<T>) {
  const id = useId();
  return (
    <>
      <BaseInputLabel
        inputId={id}
        classNames={props.labelClassNames}
      >
        {props.labelString}{props.inputProps.htmlInputProps.required && <BaseRequiredSymbol />}
      </BaseInputLabel>
      <BaseRadioGroup
        id={id}
        classNames={props.inputClassNames}
        displayValues={props.displayValues}
        {...props.inputProps}
      />
      {props.errorString && (
        <BaseInputErrorText
          ariaLabelPrefix={props.inputProps.ariaLabel}
          classNames={props.errorClassNames}
        >
          {props.errorString}
        </BaseInputErrorText>
      )}
    </>
  );
}

export default LabeledRadioGroup;
