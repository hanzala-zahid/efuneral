/**
 * @param fieldName The key on the interface T that this field describes 
 * @param fieldNamePrefix The nested object prefix as described by react-hook-form 
 * @returns A pieced together react-hook-form field name
 */
export const concatenateFieldPrefix = <T>(fieldName: keyof T, fieldNamePrefix?: string) => {
    if(fieldNamePrefix) {
        return `${fieldNamePrefix}.${fieldName}`;
    }
    return fieldName;
}