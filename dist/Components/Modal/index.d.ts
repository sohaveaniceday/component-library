import React from 'react';
import { BaseTypes } from '../../util/types';
export declare type ModalProps = {
    children: React.ReactChild;
    visible?: boolean;
    closable?: boolean;
    onClose?: () => void;
    closeOnEsc?: boolean;
    centerContent?: boolean;
} & BaseTypes<JSX.IntrinsicElements['div']>;
export declare const Modal: React.FC<ModalProps>;
