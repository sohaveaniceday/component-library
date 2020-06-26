declare type SingleProperty = string;
declare type ConditionalProperty = [boolean, SingleProperty | SingleProperty[]];
declare type TernaryProperty = [boolean, SingleProperty | SingleProperty[], SingleProperty | SingleProperty[]];
export declare type Property = SingleProperty | ConditionalProperty | TernaryProperty;
export declare const getClassName: (properties: Property[]) => string;
export {};
