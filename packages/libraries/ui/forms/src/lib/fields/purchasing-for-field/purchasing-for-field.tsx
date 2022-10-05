import { PlanningFor } from "@efuneral/models";
import { concatenateAriaLabelPieces, LabeledRadioGroup } from "@efuneral/ui/basic-components";
import { useFieldRegister } from "../../react-hook-form/field-register-hook";
import { FieldProps } from "../field-props";

export interface PurchasingForFieldProps extends FieldProps { }

export function PurchasingForField(props: PurchasingForFieldProps) {
  const newInputProps = useFieldRegister({
    fieldName: props.fieldName,
    ariaLabel: concatenateAriaLabelPieces(props.ariaLabelPrefix, 'purchasing for'),
    required: props.required ?? true,
    requiredMessage: 'Must provide answer',
  });

  return (
    <LabeledRadioGroup
      {...newInputProps}
      labelString={props.labelString ?? 'I am purchasing for'}
      displayValues={Object.keys(PlanningFor).map(key => ({
        display: PlanningFor[key as keyof typeof PlanningFor],
        value: PlanningFor[key as keyof typeof PlanningFor],
        ariaLabelSuffix: PlanningFor[key as keyof typeof PlanningFor]
      }))}
    />
  );
}

export default PurchasingForField;
