import React, { FC, ChangeEvent } from 'react'
import { Icon } from '../Icon'
import { getClassName } from '../../util'
import { baseClass } from './baseClass'

export * from './LocalSearch'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type SearchPropsWithoutOnChange = Omit<InputProps, 'onChange'>

interface SearchProps extends SearchPropsWithoutOnChange {
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    data: { value: string; name: string }
  ) => void
  id?: string
  defaultValue?: string
  border?: boolean
  cssClasses?: string[]
}

export const Search: FC<SearchProps> = ({
  onChange,
  placeholder,
  border = false,
  cssClasses = [],
  ...inputProps
}: SearchProps) => {
  const inputClass = getClassName([
    [border, [`border`, `border-gray-400`, `rounded`]],
    ...baseClass,
    ...cssClasses,
  ])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget
    return (
      onChange &&
      onChange(event, {
        value,
        name,
      })
    )
  }

  return (
    <div className="flex flex-1">
      <div className="flex w-full md:ml-0">
        <label className="sr-only">{placeholder}</label>
        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon iconName="searchOutline" cssClasses={['w-5', 'h-5']} />
          </div>
          <input
            className={inputClass}
            onChange={handleChange}
            placeholder={placeholder}
            type="search"
            {...inputProps}
          />
        </div>
      </div>
    </div>
  )
}
