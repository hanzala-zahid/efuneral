import { useId } from "react";
import BaseInputErrorText from "../../base/base-input-error-text/base-input-error-text";
import BaseInputLabel from "../../base/base-input-label/base-input-label";
import BaseTextbox, { TextboxNormalizationProps } from "../../base/base-textbox/base-textbox";
import { BaseRequiredSymbol } from "../../base/symbology/base-required-symbol/base-required-symbol";
import { LabeledInputProps } from "../labeled-input-props";

export interface LabeledTextbox extends LabeledInputProps<HTMLInputElement>, TextboxNormalizationProps { }

export function LabeledTextbox(props: LabeledTextbox) {
  const id = useId();
  return (
    <>
      <BaseInputLabel
        inputId={id}
        classNames={props.labelClassNames}
      >
        {props.labelString}{props.inputProps.htmlInputProps.required && <BaseRequiredSymbol />}
      </BaseInputLabel>
      <BaseTextbox
        id={id}
        classNames={props.inputClassNames}
        normalizer={props.normalizer}
        {...props.inputProps}
      />
      {props.errorString && (
        <BaseInputErrorText
          classNames={props.errorClassNames}
          ariaLabelPrefix={props.inputProps.ariaLabel}
        >
          {props.errorString}
        </BaseInputErrorText>
      )}
    </>
  );
}

export default LabeledTextbox;
