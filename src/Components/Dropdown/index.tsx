import React, { ChangeEvent } from 'react'
import { DropdownItem, DropdownItemProps } from './DropdownItem'
import { Search } from '../Search'
export * from './DropdownItem'

export type DropdownProps = {
  options: DropdownItemProps[]
  search?: SearchDropdownProps
  stickyOption?: DropdownItemProps
  fluid?: boolean
}

type SearchDropdownProps = {
  onChange: (e: ChangeEvent<Element>, { value }: { value: string }) => void
  value: string
  placeholder?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  search,
  stickyOption,
  fluid = false,
}: DropdownProps) => {
  const mainClassName = fluid
    ? 'rounded-md shadow-lg'
    : 'w-56 rounded-md shadow-lg'
  return (
    <div className={mainClassName}>
      <div
        className='bg-white rounded-md shadow-xs'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='options-menu'
      >
        <div className='py-1'>
          {search && (
            <div className='flex items-center px-4 py-2 text-sm text-gray-700'>
              <Search
                autoFocus
                type={'text'}
                placeholder={search.placeholder}
                border
                onChange={search.onChange}
                value={search.value}
              />
            </div>
          )}
          {stickyOption && (
            <DropdownItem
              value={stickyOption.value}
              content={stickyOption.content}
              href={stickyOption.href}
              onClick={stickyOption.onClick}
              icon={stickyOption.icon}
              disabled={stickyOption.disabled}
              divided={stickyOption.divided}
              header={stickyOption.header}
              cssClasses={stickyOption.cssClasses}
            />
          )}
          <div className={search && 'max-h-40 overflow-y-scroll'}>
            {options?.length < 1 && (
              <DropdownItem disabled={true} divided={false}>
                <p className='italic text-gray-400'>No results</p>
              </DropdownItem>
            )}
            {options?.map(
              (
                {
                  onClick,
                  content,
                  href,
                  icon,
                  divided,
                  disabled,
                  header,
                  value,
                  children,
                  cssClasses,
                }: DropdownItemProps,
                i: number
              ) => (
                <DropdownItem
                  key={`${i}${value}`}
                  value={value}
                  content={content}
                  href={href}
                  onClick={onClick}
                  icon={icon}
                  disabled={disabled}
                  divided={i === options.length - 1 ? false : divided}
                  header={header}
                  cssClasses={cssClasses}
                >
                  {children}
                </DropdownItem>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
