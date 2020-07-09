import { FC } from 'react';
import { BaseTypes } from '../util';
declare type ButtonProps = {
    cssClasses?: string[];
    border?: boolean;
    rounded?: boolean;
    color?: string;
} & BaseTypes<JSX.IntrinsicElements['button']>;
export declare const Button: FC<ButtonProps>;
export {};
