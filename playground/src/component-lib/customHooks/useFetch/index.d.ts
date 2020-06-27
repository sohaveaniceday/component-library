/// <reference types="react" />
import { AxiosRequestConfig } from 'axios';
export declare const useFetch: () => {
    data: any;
    isLoading: boolean;
    error: any;
    setRequest: import("react").Dispatch<import("react").SetStateAction<[string, AxiosRequestConfig]>>;
    clearData: () => void;
};
