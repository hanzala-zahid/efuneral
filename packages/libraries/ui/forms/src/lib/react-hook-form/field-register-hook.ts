import { LabeledInputInputProps } from "@efuneral/ui/basic-components";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

/**
 * Returns true if an inpute value is valid, or false otherwise
 */
type ValidatorFunction = ((inputValue: string) => boolean);

interface FieldRegistrationProps {
    /**
     * The name of the field. This maps to the location of the field data when form submission happens.
    * https://react-hook-form.com/api/useform/register
     */
    fieldName: string,
    /**
     * The aria label used by screen readers.
     * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
     */
    ariaLabel: string,
    /**
     * Whether this field is required or not
     */
    required: boolean,
    /**
     * The message to show when the user doesn't enter field information
     * (Leave undefined for the default message)
     */
    requiredMessage?: string,
    /**
     * Whether this field is disabled or not (default false)
     */
    disabled?: boolean,
    /**
     * The list of validations to perform on user input and accompanying error messages
     * Return false from validation to show the error message provided
     * RegExp will test against the input, and display error upon not matching
     */
    validators?: {
        validation: ValidatorFunction | RegExp,
        message: string
    }[]
}

/**
 * @param registrationData The data to register the field with
 * @returns A collection of input and error props to be fed into a Labeled input
 */
export const useFieldRegister = <T>(registrationData: FieldRegistrationProps): {
    inputProps: LabeledInputInputProps<T>,
    errorString?: string
} => {
    // Get the form context from react-hook-forms
    const { register, unregister, getFieldState, formState, setValue, getValues } = useFormContext();
    // Keep track of field name so that we can register / unregister fields as needed
    const [currentNameField, setCurrentNameField] = useState(registrationData.fieldName);
    useEffect(() => {
        if (currentNameField !== registrationData.fieldName) {
            unregister(currentNameField);
            setCurrentNameField(registrationData.fieldName);
        }
    }, [registrationData])
    // Consolidate the validation data passed into an error generator
    const errorGenerators: ((inputValue: string) => string)[] = (registrationData.validators || []).map(validator => {
        if (validator.validation instanceof RegExp) {
            return (inputValue) => (validator.validation as RegExp).test(inputValue) ? '' : validator.message;
        }
        else {
            return (inputValue) => (validator.validation as ValidatorFunction)(inputValue) ? '' : validator.message;
        }
    })
    const combinedErrorGenerator = (inputValue: string) => {
        for (let i = 0; i < errorGenerators.length; i++) {
            if (errorGenerators[i](inputValue)) {
                return errorGenerators[i](inputValue);
            }
        }
        return true;
    }
    // Register the field
    const registrationResults = register(currentNameField, {
        disabled: registrationData.disabled,
        required: {
            value: registrationData.required,
            message: registrationData.requiredMessage ?? 'This information is required'
        },
        validate: combinedErrorGenerator,
    });
    // Get an error string if one exists on this field
    const errorString = getFieldState(currentNameField, formState).error?.message;
    // Return the full field registration results
    return {
        inputProps: {
            htmlInputProps: {
                ...{
                    ...registrationResults,
                    required: registrationData.required,
                    disabled: registrationData.disabled,
                    ref: undefined,
                }
            },
            innerRef: registrationResults.ref,
            ariaLabel: registrationData.ariaLabel,
        },
        errorString: errorString
    }
}