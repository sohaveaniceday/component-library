import React from 'react'
import { Icon, IconProps, IconName } from '../../'
import { baseClass } from './baseClass'
import { getClassName } from '../../../util'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type DropdownPropsWithoutOnClick = Omit<InputProps, 'onClick'>
export interface DropdownItemProps extends DropdownPropsWithoutOnClick {
  divided?: boolean
  href?: string
  content?: React.ReactNode
  truncate?: boolean
  onClick?: (
    event: React.MouseEvent,
    data: { value: string; name: string }
  ) => void
  icon?: IconName | React.ReactElement<IconProps>
  disabled?: boolean
  cssClasses?: string[]
  header?: string
  value?: string
  children?: React.ReactChild
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  divided,
  href,
  onClick,
  content: name,
  truncate = false,
  value,
  icon,
  disabled = false,
  cssClasses = [],
  header,
  children,
}: DropdownItemProps) => {
  const ItemComponentClassName = getClassName([
    [
      disabled,
      'cursor-text',
      [
        `hover:bg-gray-100`,
        `hover:text-gray-900`,
        `focus:outline-none`,
        `focus:bg-gray-100`,
        `focus:text-gray-900`,
      ],
    ],
    [!icon, 'block', ['group', 'flex', 'items-center']],
    ...cssClasses,
    ...baseClass,
  ])

  const disabledIconClasses = disabled
    ? []
    : [`group-hover:text-gray-500`, `group-focus:text-gray-500`]

  const IconComponent = (): React.ReactElement<IconProps> =>
    typeof icon === 'string' ? (
      <Icon
        iconName={icon}
        cssClasses={[
          'w-5',
          'h-5',
          `mr-3`,
          `text-gray-400`,
          ...cssClasses,
          ...disabledIconClasses,
        ]}
      />
    ) : (
      <>{icon}</>
    )

  const ItemComponent = ({ value }: { value?: string }): React.ReactElement => (
    <div
      className={ItemComponentClassName}
      style={disabled ? {} : { cursor: 'pointer' }}
      data-value={value}
      data-name={name}
    >
      {icon && <IconComponent />}
      <div className='block'>
        {header}
        <span
          className={getClassName([
            [!!icon, 'max-w-xxs', 'max-w-full'],
            [!!truncate, 'truncate', 'break-words'],
          ])}
          data-value={value}
          data-name={name}
        >
          {children || name}
        </span>
      </div>
    </div>
  )

  const handleOnClick = (event: React.MouseEvent, onClick: any): void => {
    return (
      onClick &&
      onClick(event, {
        value: (event.target as HTMLElement).dataset.value,
        name: (event.target as HTMLElement).dataset.name,
      })
    )
  }

  return (
    <>
      {href ? (
        <a href={href} role='menuitem'>
          <ItemComponent />
        </a>
      ) : (
        <div
          onClick={(event): void =>
            disabled || !onClick ? undefined : handleOnClick(event, onClick)
          }
          role='menuitem'
        >
          <ItemComponent value={value} />
        </div>
      )}
      {divided && <hr className='my-1 border-t border-gray-100' />}
    </>
  )
}
