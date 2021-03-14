import React, { FC, ChangeEvent } from 'react';
export * from './LocalSearch';
declare type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare type SearchPropsWithoutOnChange = Omit<InputProps, 'onChange'>;
interface SearchProps extends SearchPropsWithoutOnChange {
    onChange?: (event: ChangeEvent<HTMLInputElement>, data: {
        value: string;
        name: string;
    }) => void;
    id?: string;
    defaultValue?: string;
    border?: boolean;
    cssClasses?: string[];
}
export declare const Search: FC<SearchProps>;
