import React from 'react';
import { IconProps, IconName } from '../../';
declare type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare type DropdownPropsWithoutOnClick = Omit<InputProps, 'onClick'>;
export interface DropdownItemProps extends DropdownPropsWithoutOnClick {
    divided?: boolean;
    href?: string;
    content?: React.ReactNode;
    truncate?: boolean;
    onClick?: (event: React.MouseEvent, data: {
        value: string;
        name: string;
    }) => void;
    icon?: IconName | React.ReactElement<IconProps>;
    disabled?: boolean;
    cssClasses?: string[];
    header?: string;
    value?: string;
    children?: React.ReactChild;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
export {};
