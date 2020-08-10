import { FormEvent, ChangeEvent, FocusEvent } from 'react';
declare type useCustomFormProps = {
    initialValues: any;
    onSubmit: Function | undefined;
    initialInput?: string;
};
export declare const useCustomForm: ({ initialValues, onSubmit, initialInput, }: useCustomFormProps) => {
    clearValues: () => void;
    values: any;
    errors: {};
    touched: {};
    handleChange: (value: string, name: string) => void;
    handleBlur: (event: ChangeEvent<HTMLInputElement>) => void;
    handleFocus: ({ target }: FocusEvent<HTMLInputElement>) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    currentValue: string | undefined;
    currentInput: string | undefined;
};
export {};
