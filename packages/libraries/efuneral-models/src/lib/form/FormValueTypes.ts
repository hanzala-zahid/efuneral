/**
 * This type describes a form's value types in string form
 * This model is used so that our forms library knows how it should translate to and from
 * forms and state values
 */
export type FormValueTypes<T> = T extends object ? (
    T extends Date ? FormValueType : {
        [P in keyof T]-?: FormValueTypes<T[P]>
    }
) : FormValueType;

export type FormValueType = 'date' | 'string';