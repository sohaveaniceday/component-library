import { FC } from 'react';
import { BaseTypes } from '../util';
declare type HoldingPageProps = {
    cssClasses?: string[];
    scrollable?: boolean;
} & BaseTypes<JSX.IntrinsicElements['button']>;
export declare const HoldingPage: FC<HoldingPageProps>;
export {};
