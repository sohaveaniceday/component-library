import React from 'react';
import { BaseTypes } from '../../util/types';
import './index.css';
export * from './SlideOverContent';
export declare type SlideOverProps = {
    modal?: boolean;
    header?: React.ReactNode;
    content?: React.ReactNode;
    children?: React.ReactChild;
    footer?: React.ReactNode;
    background?: React.ReactNode;
    isVisible: boolean;
} & BaseTypes<JSX.IntrinsicElements['section']>;
export declare const SlideOver: React.FC<SlideOverProps>;
