export declare type compareFunction<T> = (prev: T | undefined, next: T) => boolean;
export declare const usePrevious: (state: any, compare?: compareFunction<any> | undefined) => any;
