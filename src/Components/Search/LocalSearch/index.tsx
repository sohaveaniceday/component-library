import React, { useState, useRef } from 'react'
import {
  Search,
  Dropdown,
  Icon,
  useOutsideClick,
  Transition,
  IconName,
} from '../../../index'
import Fuse from 'fuse.js'
import { capitalizeWord } from '../../../util'
import { DropdownItemProps } from '../../Dropdown'
import matchSorter, { rankings } from 'match-sorter'

type Entity = { name: string } & any

type LocalSearchProps = {
  searchData: any[]
  onClick: (entity: any, type: string) => void
  searchKeys: string[]
  scoreThreshold?: number
  searchResultDisplay: (
    entity: Entity,
    searchValue: string,
    bestMatch?: { value: string; key: string },
    type?: string
  ) => React.ReactElement
}

export type SearchResult = {
  type: string
  icon: IconName
  entity: Entity
}

export type FuseSearchResult = {
  [key: string]: Fuse.FuseResult<SearchResult>[]
}

export const LocalSearch: React.FC<LocalSearchProps> = ({
  searchData,
  onClick,
  searchKeys,
  scoreThreshold = 0.4,
  searchResultDisplay,
}: LocalSearchProps) => {
  const searchResultsRef = useRef<HTMLDivElement | null>(null)
  const searchBoxRef = useRef<HTMLDivElement | null>(null)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState<FuseSearchResult>({})

  const [isSearchResultsVisible, setIsSearchResultsVisible] = useState<boolean>(
    false
  )

  const fuseSearchData = new Fuse(searchData, {
    keys: searchKeys,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
    ignoreLocation: true,
  })

  useOutsideClick({
    onClickOutside: true,
    ref: searchBoxRef,
    callback: () => setIsSearchResultsVisible(false),
    additionalRefs: [searchResultsRef],
  })

  const handleOnFocus = () => {
    if (searchValue) setIsSearchResultsVisible(true)
  }

  const handleSearchChange = (e: any, { value }: any) => {
    setSearchValue(value)

    if (!value) return setIsSearchResultsVisible(false)

    const searchResults = fuseSearchData.search(value)

    const formattedSearchResults: FuseSearchResult = searchResults.reduce(
      (acc: FuseSearchResult, currentDatum) => {
        const {
          item: { type },
        } = currentDatum
        const keyAlreadyExists = !!acc[type]
        return {
          ...acc,
          [type]: [...(keyAlreadyExists ? acc[type] : []), currentDatum],
        }
      },
      {}
    )
    const filteredSortedAndSlicedSearchResults = Object.keys(
      formattedSearchResults
    )
      .sort()
      .reduce(
        (
          acc: {
            [key: string]: Fuse.FuseResult<SearchResult>[]
          },
          currentKey: string
        ) => {
          return {
            ...acc,
            [currentKey]: formattedSearchResults[currentKey]
              .filter(({ score }) => score && score < scoreThreshold)
              .sort(
                ({ score: scoreA }, { score: scoreB }) =>
                  (scoreA || 1) - (scoreB || 1)
              )
              .slice(0, 3),
          }
        },
        {}
      )

    setSearchResults(filteredSortedAndSlicedSearchResults)

    setIsSearchResultsVisible(true)
  }

  const formatDropdownOptions = (result: Fuse.FuseResult<SearchResult>) => {
    const {
      item: { icon, entity, type },
      matches,
    } = result

    const sortedMatches = matches
      ? matchSorter(matches, searchValue, {
          keys: ['value'],
          threshold: rankings.NO_MATCH,
        })
      : []

    const bestMatch =
      sortedMatches[0].value && sortedMatches[0].key
        ? { value: sortedMatches[0].value, key: sortedMatches[0].key }
        : undefined

    const SearchResultDisplayElement = () =>
      searchResultDisplay(entity, searchValue, bestMatch, type)

    return {
      children: (
        <div className="flex items-center">
          <Icon
            iconName={icon}
            cssClasses={['h-5', 'w-5', 'text-gray-400', 'mr-2']}
          />
          <div className="flex-grow">
            <SearchResultDisplayElement />
          </div>
        </div>
      ),
      onClick: () => {
        setIsSearchResultsVisible(false)
        onClick(entity, type)
      },
    }
  }

  const titleOption = (text: string) => {
    return {
      disabled: true,
      children: <h3 className="font-bold text-red-800">{text}</h3>,
    }
  }

  const resultOptions = (results: any) =>
    results.map((result: any) => formatDropdownOptions(result))

  const dropDownOptions = Object.keys(searchResults).reduce(
    (acc: DropdownItemProps[], searchResultKey) => {
      const additional =
        searchResults[searchResultKey].length > 0
          ? [
              titleOption(capitalizeWord(searchResultKey)),
              ...resultOptions(searchResults[searchResultKey]),
            ]
          : []
      return [...acc, ...additional]
    },
    []
  )

  return (
    <div className="w-full">
      <div ref={searchBoxRef}>
        <Search
          onChange={handleSearchChange}
          onFocus={handleOnFocus}
          value={searchValue}
          placeholder="Search"
        />
      </div>
      {searchValue.length > 1 && (
        <Transition
          show={isSearchResultsVisible}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <div className="relative w-full" ref={searchResultsRef}>
            <div className="absolute z-10 w-full mt-2">
              <Dropdown options={dropDownOptions} fluid />
            </div>
          </div>
        </Transition>
      )}
    </div>
  )
}
