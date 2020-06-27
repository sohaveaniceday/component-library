import { FC, RefObject } from 'react';
import { BaseTypes } from '../../util';
declare type TextInputProps = {
    cssClasses?: string[];
    forwardRef?: RefObject<HTMLInputElement>;
    rounded?: boolean;
    roundedTop?: boolean;
    border?: boolean;
} & BaseTypes<JSX.IntrinsicElements['input']>;
export declare const TextInput: FC<TextInputProps>;
export {};
