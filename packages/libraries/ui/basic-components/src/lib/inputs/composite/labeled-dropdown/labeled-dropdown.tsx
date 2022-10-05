import { useId } from "react";
import BaseDropdown, { DropdownDisplayValueProps } from "../../base/base-dropdown/base-dropdown";
import BaseInputErrorText from "../../base/base-input-error-text/base-input-error-text";
import BaseInputLabel from "../../base/base-input-label/base-input-label";
import { BaseRequiredSymbol } from "../../base/symbology/base-required-symbol/base-required-symbol";
import { LabeledInputProps } from "../labeled-input-props";

export interface LabeledDropdownProps<T> extends
  DropdownDisplayValueProps<T>,
  LabeledInputProps<HTMLSelectElement> { }

export function LabeledDropdown<T>(props: LabeledDropdownProps<T>) {
  const id = useId();
  return (
    <>
      <BaseInputLabel
        inputId={id}
        classNames={props.labelClassNames}
      >
        {props.labelString}{props.inputProps.htmlInputProps.required && <BaseRequiredSymbol />}
      </BaseInputLabel>
      <BaseDropdown
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

export default LabeledDropdown;
