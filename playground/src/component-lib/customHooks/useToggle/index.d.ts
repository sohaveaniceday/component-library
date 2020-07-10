declare type IState = string | number | boolean | undefined;
export interface Actions<T = IState> {
    setLeft: () => void;
    setRight: () => void;
    toggle: (value?: T) => void;
}
export declare const useToggle: (defaultValue: any, reverseValue?: any) => any[];
export {};
