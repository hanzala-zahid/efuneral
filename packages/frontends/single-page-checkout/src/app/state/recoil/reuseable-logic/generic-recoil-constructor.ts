import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { UseStateFunction } from "../../generic/UseStateFunction"

export const constructRecoilUseStateFunction = <T>(key: string, startingState: T): UseStateFunction<T> => {
    const recoilAtom = atom<T>({
        key: key,
        default: startingState
    });
    return () => {
        const [value, setValue] =  useRecoilState(recoilAtom);
        const setValueCallback = useCallback((newValue: Partial<T>) => {
            setValue({
                ...value,
                ...newValue
            })
        }, []);
        return [
            value,
            setValueCallback
        ];
    }
}