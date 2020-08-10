interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    toggle: (value?: boolean | undefined) => void;
}
export declare const useBoolean: (defaultValue?: boolean) => [boolean, Actions];
export {};
