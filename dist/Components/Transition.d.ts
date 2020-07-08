import React from 'react';
declare type TransitionProps = {
    show?: boolean;
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
    children: React.ReactNode;
};
export declare const Transition: ({ show, ...rest }: TransitionProps) => React.ReactElement;
export default Transition;
