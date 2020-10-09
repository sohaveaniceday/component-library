import React, { ChangeEvent } from 'react';
import { DropdownItemProps } from './DropdownItem';
export * from './DropdownItem';
export declare type DropdownProps = {
    options: DropdownItemProps[];
    search?: SearchDropdownProps;
    stickyOption?: DropdownItemProps;
    fluid?: boolean;
};
declare type SearchDropdownProps = {
    onChange: (e: ChangeEvent<Element>, { value }: {
        value: string;
    }) => void;
    value: string;
    placeholder?: string;
};
export declare const Dropdown: React.FC<DropdownProps>;
