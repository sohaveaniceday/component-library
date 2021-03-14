import React from 'react';
import { BaseTypes } from '../util/types';
export declare const svgMap: any;
export declare type IconName = 'tick' | 'edit' | 'chevron' | 'movie' | 'thumb' | 'thumb' | 'arrows' | 'arrow' | 'help' | 'times' | 'loader' | 'plus' | 'avatar' | 'searchOutline';
export declare type IconProps = {
    iconName: IconName;
    isButton?: boolean;
    cssClasses?: string[];
} & BaseTypes<JSX.IntrinsicElements['svg']>;
export declare const Icon: React.FC<IconProps>;
