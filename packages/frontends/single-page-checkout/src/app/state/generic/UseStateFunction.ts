export type UseStateFunction<T> = () => UseStateFunctionResult<T>;

export type UseStateFunctionResult<T> = [
    T,
    (newValue: Partial<T>) => void
]