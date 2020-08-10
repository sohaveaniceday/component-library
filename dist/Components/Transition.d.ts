import React from 'react';
interface TransitionProps {
    show?: boolean;
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
    appear?: boolean;
    children: React.ReactNode;
}
export declare const Transition: ({ show, appear, ...rest }: TransitionProps) => JSX.Element;
export {};
