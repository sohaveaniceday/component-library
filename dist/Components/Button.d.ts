import { FC } from 'react';
import { BaseTypes, Shade, Color } from '../util';
export declare type ButtonProps = {
    cssClasses?: string[];
    border?: boolean;
    rounded?: boolean;
    color?: Color;
    shade?: Shade;
} & BaseTypes<JSX.IntrinsicElements['button']>;
export declare const Button: FC<ButtonProps>;
