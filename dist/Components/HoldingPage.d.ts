import { FC } from 'react';
import { BaseTypes } from '../util';
declare type HoldingPageProps = {
    cssClasses?: string[];
    scrollable?: boolean;
} & BaseTypes<JSX.IntrinsicElements['button']> & BaseTypes<JSX.IntrinsicElements['div']>;
export declare const HoldingPage: FC<HoldingPageProps>;
export {};
