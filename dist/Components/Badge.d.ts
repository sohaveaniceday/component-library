import { FC } from 'react';
import { BaseTypes, Color, Size } from '../util';
declare type BadgeProps = {
    content: string;
    color?: Color;
    size?: Size;
    cssClasses?: string[];
} & BaseTypes<JSX.IntrinsicElements['div']>;
export declare const Badge: FC<BadgeProps>;
export {};
