import hash from 'object-hash';

export const hashValue = <T extends object | null | undefined>(
    value: T
) => {
    if(value === undefined) {
        return 'undefined';
    }
    if(value === null) {
        return 'null';
    }
    return hash(value);
}