import { FC } from 'react';
declare type SliderProps = {
    cssClasses: string[];
    range: number[];
    defaultValues: number[];
    displayTicks?: boolean;
    displayTracks?: boolean;
    onChange?: (values: readonly number[]) => void;
    onUpdate?: (values: readonly number[]) => void;
    handleColor?: string;
    trackColor?: string;
};
export declare const Slider: FC<SliderProps>;
export {};
