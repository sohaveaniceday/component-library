import { ReactNode } from 'react';
declare type LinkProps = {
    name: string;
    path: string;
};
declare type NavbarProps = {
    links?: LinkProps[];
    logo?: ReactNode;
    backgroundColor?: string;
    linkColor?: string;
    linkHoverColor?: string;
    rightOptions?: ReactNode;
};
export declare const Navbar: ({ links, logo, backgroundColor, linkColor, linkHoverColor, rightOptions, }: NavbarProps) => JSX.Element;
export {};
