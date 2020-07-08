import { ReactNode, MouseEvent } from 'react';
import { BaseTypes } from '../util';
declare type AccordianProps = {
    title: string;
    content: ReactNode;
    active: boolean;
    horizontal?: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    backgroundColor?: string;
    backgroundImage?: string;
    borderColor?: string;
    textColor?: string;
} & BaseTypes<JSX.IntrinsicElements['div']>;
export declare const Accordion: ({ title, content, active, onClick, horizontal, backgroundColor, backgroundImage, borderColor, textColor, }: AccordianProps) => JSX.Element;
export {};
