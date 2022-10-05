import { useId } from "react";
import BaseDatePicker from "../../base/base-date-picker/base-date-picker";
import BaseInputErrorText from "../../base/base-input-error-text/base-input-error-text";
import BaseInputLabel from "../../base/base-input-label/base-input-label";
import { BaseRequiredSymbol } from "../../base/symbology/base-required-symbol/base-required-symbol";
import { LabeledInputProps } from "../labeled-input-props";

export interface LabeledDatePickerProps extends LabeledInputProps<HTMLInputElement> { }

export function LabeledDatePicker(props: LabeledDatePickerProps) {
  const id = useId();
  return (
    <>
      <BaseInputLabel
        inputId={id}
        classNames={props.labelClassNames}
      >
        {props.labelString}{props.inputProps.htmlInputProps.required && <BaseRequiredSymbol />}
      </BaseInputLabel>
      <BaseDatePicker
        id={id}
        classNames={props.inputClassNames}
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

export default LabeledDatePicker;
