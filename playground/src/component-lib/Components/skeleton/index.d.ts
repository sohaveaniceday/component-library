import React from 'react';
import './animation.css';
import { Size, Fraction, HeightAndWidthValue, BaseTypes } from '../../util';
declare type TextProp = {
    length: Fraction | HeightAndWidthValue;
    rounded?: boolean;
};
export declare type ShapeProp = 'square' | 'circle' | 'rounded';
export declare type SizeProp = Size | HeightAndWidthValue;
declare type SkeletonProps = {
    shape?: ShapeProp;
    text?: TextProp;
    size?: SizeProp;
    cssClasses?: string[];
    override?: boolean;
    animation?: boolean;
} & BaseTypes<JSX.IntrinsicElements['div']>;
export declare const Skeleton: React.FC<SkeletonProps>;
export {};
