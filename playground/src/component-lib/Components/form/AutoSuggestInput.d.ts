import { FC, ReactNode, RefObject } from 'react';
import { BaseTypes } from '../../util';
export declare type SuggestionProps = {
    name: string;
    element: ReactNode;
    id: string;
    disabled?: boolean;
};
declare type AutoSuggestProps = {
    suggestions: SuggestionProps[];
    onChangeFunc?: Function;
    isLoading: boolean;
    forwardRef?: RefObject<HTMLInputElement>;
    cssClasses?: string[];
    rounded?: boolean;
    value: string;
    border?: boolean;
    borderColor?: string;
} & BaseTypes<JSX.IntrinsicElements['input']>;
export declare const AutoSuggest: FC<AutoSuggestProps>;
export {};
