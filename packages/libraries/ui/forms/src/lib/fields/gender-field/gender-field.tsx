import { Gender } from "@efuneral/models";
import { concatenateAriaLabelPieces, LabeledDropdown } from "@efuneral/ui/basic-components";
import { useFieldRegister } from "../../react-hook-form/field-register-hook";
import { FieldProps } from "../field-props";

export interface GenderFieldProps extends FieldProps {}

export function GenderField(props: GenderFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'gender'),
    required: props.required ?? true,
    requiredMessage: 'Must provide gender',
  });

  return (
    <LabeledDropdown
      {...newInputProps}
      labelString={props.labelString ?? 'Gender'}
      displayValues={Object.keys(Gender).map(key => ({
        display: Gender[key as keyof typeof Gender],
        value: Gender[key as keyof typeof Gender],
        ariaLabel: key
      }))}
    />
  );
}

export default GenderField;
