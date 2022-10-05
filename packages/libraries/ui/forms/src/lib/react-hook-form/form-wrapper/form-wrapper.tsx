import { PropsWithChildren, useEffect, useState } from "react";
import { DeepPartial, FormProvider, Path, UnpackNestedValue, useForm } from "react-hook-form";
import { ControlButtonProps } from "../../controls/control-button-props";
// import styles from './form-wrapper.module.scss';
import { flatten } from 'flat';
import { FormValueTypes } from "@efuneral/models";
import { convertDateToRFC3339FullDate } from "@efuneral/ui/basic-components";

export interface FormWrapperProps<T> {
  /**
   * The starting/current value of the data
   * When this changes, the form's values will be overwritten with the new values
   */
  values: T,
  /**
   * The starting/current value of the data
   * When this changes, the form's values will be overwritten with the new values
   */
  valueTypes: FormValueTypes<T>,
  /**
   * The function to be called when a valid form is saved
   */
  onSave: (newValues: T) => void,
  /**
   * Whether the form should be disabled or not (default false)
   * Summary mode being false makes this field irrelevant
   */
  disabled: boolean,
  /**
   * The button type component that will call the form's saving functionality
   */
  submissionButton: {
    component: React.FunctionComponent<ControlButtonProps>,
    ariaLabelPrefix: string
  },
  /**
   * Whether the form should display it's summary view or not
   */
  summaryMode: boolean,
}

/**
 * Replaces model data with form data according to given dataType
 * @param data The model data
 * @param dataType The model data types
 * @returns Form data Data
 */
function recursiveReplaceModelDataWithFormData<T>(data: T, dataType: FormValueTypes<T>) {
  if (data && typeof data === 'object') {
    // Check to see if it's a date
    if (data instanceof Date && dataType === 'date') {
      return convertDateToRFC3339FullDate(data);
    }
    // Recursively check properties
    let newValue: any = {};
    Object.keys(data).forEach(key => {
      newValue[key] = recursiveReplaceModelDataWithFormData((data as any)[key], (dataType as any)[key]);
    })
    return newValue;
  }
  else {
    return data;
  }
}

/**
 * Replaces form data with model data according to given dataType
 * @param data The form data
 * @param dataType The model data types
 * @returns Model Data
 */
function recursiveReplaceFormDataWithModelData<T>(data: T, dataType: FormValueTypes<T>) {
  if (data && typeof data === 'object') {
    // Recursively check properties
    let newValue: any = {};
    Object.keys(data).forEach(key => {
      newValue[key] = recursiveReplaceFormDataWithModelData((data as any)[key], (dataType as any)[key]);
    })
    return newValue;
  }
  else {
    // Check to see if it's a date
    if (data && typeof data === 'string') {
      if (dataType === 'date') {
        const finalDate = new Date(data);
        finalDate.setMinutes(finalDate.getMinutes() + finalDate.getTimezoneOffset());
        return new Date(finalDate);
      }
    }
    return data;
  }
}

export function FormWrapper<T>(props: PropsWithChildren<FormWrapperProps<T>>) {
  // Set and track form field values and default values based on given values
  const [currentPropValues, setCurrentPropValues] = useState(recursiveReplaceModelDataWithFormData(props.values, props.valueTypes));
  const formMethods = useForm<T>({
    defaultValues: currentPropValues as UnpackNestedValue<DeepPartial<T>>
  });
  useEffect(() => {
    /**
     * This part of the code attempts to deal with changing passed in values
     * 
     * The question this attempts to answer:
     * What happens when:
     * 1. A webpage renders a form with passed values {first: 'John', last: 'Smith'}
     * 2. The user replaces Smith with Jones
     * 2a. The user still hasn't submitted the form yet
     * 3. An outside event causes the underlying contact to update to Jane Smith instead
     *      (Meaning first is now being passed as 'Jane' and last is still 'Smith')
     *      (Can imagine the user clicked copy name or something)
     * The answer (Having not thought as deeply as I should about it) is John should turn into Jane and Jones should remain.
     * The code below watches for passed in value changes, finds updated values from previous ones, and sets field values accordingly.
     * 
     * The question is a necessary one to ask, because our form is also our summary view
     * We can't just change default values when new data is propagated, because our summary view looks to form values
     * So, when new data comes in, we have to change the form values themselves for the summary to update / the form to be correct on re-edit begin
     */

    // Flatten keys of values
    // (The flat library flattens in the same way that react-hook-form does as far as I can tell)
    // This means we can use these flattened keys when we go to set react-hook-form values without further translation
    const newFlattenedValues = flatten(recursiveReplaceModelDataWithFormData(props.values, props.valueTypes) ?? {});
    const oldFlattenedValues = flatten(currentPropValues ?? {});
    let updatedValues: any = {};
    // Find out which ones changed
    if (newFlattenedValues instanceof Object && oldFlattenedValues instanceof Object) {
      Object.keys(newFlattenedValues).forEach(newValuesKey => {
        if ((newFlattenedValues as any)[newValuesKey] !== (oldFlattenedValues as any)[newValuesKey])
          updatedValues[newValuesKey] = (newFlattenedValues as any)[newValuesKey]
      })
    }
    // For each changed value, set the form appropriately
    Object.keys(updatedValues).forEach(updatedKey => {
      formMethods.setValue(updatedKey as Path<T>, updatedValues[updatedKey])
    });
    setCurrentPropValues(recursiveReplaceModelDataWithFormData(props.values, props.valueTypes));
  }, [props.values]);

  // Extract submission button component
  const SubmissionButtonComponent = props.submissionButton.component;

  // Render
  return (
    <FormProvider {...formMethods}>
      <form
      // className={styles["form-wrapper"]}
      >
        <fieldset
          disabled={props.disabled}
        // className={styles["form-wrapper-fieldset"]}
        >
          {props.children}
          {!props.summaryMode && (
            <SubmissionButtonComponent
              ariaLabelPrefix={props.submissionButton.ariaLabelPrefix}
              onClick={formMethods.handleSubmit((data) => {
                const newData = recursiveReplaceFormDataWithModelData((data as T), props.valueTypes);
                props.onSave(newData as T);
              })}
            />
          )}
        </fieldset>
      </form>
    </FormProvider>
  );
}

export default FormWrapper;
