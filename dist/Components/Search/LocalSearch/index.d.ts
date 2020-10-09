import React from 'react';
import { IconName } from '../../../index';
import Fuse from 'fuse.js';
declare type Entity = {
    name: string;
} & any;
declare type LocalSearchProps = {
    searchData: any[];
    onClick: (entity: any, type: string) => void;
    searchKeys: string[];
    scoreThreshold?: number;
    searchResultDisplay: (entity: Entity, searchValue: string, bestMatch?: {
        value: string;
        key: string;
    }, type?: string) => React.ReactElement;
};
export declare type SearchResult = {
    type: string;
    icon: IconName;
    entity: Entity;
};
export declare type FuseSearchResult = {
    [key: string]: Fuse.FuseResult<SearchResult>[];
};
export declare const LocalSearch: React.FC<LocalSearchProps>;
export {};
