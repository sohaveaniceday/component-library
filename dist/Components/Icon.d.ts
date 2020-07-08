import { FC } from 'react';
import { BaseTypes } from '../util';
export declare type IconName = 'tick' | 'edit' | 'chevron' | 'movie' | 'thumb' | 'arrows' | 'arrow' | 'help';
declare type IconProps = {
    iconName: string;
    cssClasses?: string[];
} & BaseTypes<JSX.IntrinsicElements['svg']>;
export declare const Icon: FC<IconProps>;
export {};
