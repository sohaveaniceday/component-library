import { RefObject } from 'react';
declare type UseOutsideClickProps = {
    onClickOutside: boolean;
    ref: RefObject<HTMLElement>;
    additionalRefs?: RefObject<HTMLElement>[];
    callback: () => void;
};
export declare const useOutsideClick: ({ onClickOutside, ref, callback, additionalRefs, }: UseOutsideClickProps) => void;
export {};
