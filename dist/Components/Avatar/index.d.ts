import React from 'react';
import { BaseTypes, Size, Color } from '../../util/types';
export declare type AvatarProps = {
    color?: Color;
    size?: Size;
    cssClasses?: string[];
    list?: boolean;
    shape?: 'circular' | 'rounded';
    placeholder?: 'icon' | string;
    isButton?: boolean;
    notification?: {
        placement: 'top' | 'bottom';
        color: Color;
    };
} & BaseTypes<JSX.IntrinsicElements['img']>;
export declare const createNotificationClassName: (color: Color, size: Size) => string[];
export declare const Avatar: React.FC<AvatarProps>;
