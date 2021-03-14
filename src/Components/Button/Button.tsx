import React, { FC } from 'react'
import { BaseTypes, getClassName, Shade, Color } from '../../util'

export type ButtonProps = {
  cssClasses?: string[]
  border?: boolean
  rounded?: boolean
  color?: Color
  shade?: Shade
} & BaseTypes<JSX.IntrinsicElements['button']>

export const Button: FC<ButtonProps> = ({
  value,
  cssClasses = [],
  onClick,
  type,
  color = 'blue',
  shade = '500',
  border = false,
  rounded = false,
  ...buttonProps
}: ButtonProps) => {
  const buttonClassName = getClassName([
    ...cssClasses,
    `bg-${color}-${shade}`,
    'px-4',
    'py-2',
    'font-bold',
    'text-gray-200',
    'hover:text-white',
    [rounded, 'rounded-full', 'rounded'],
    [border, 'border-4'],
  ])
  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      type={type}
      {...buttonProps}
    >
      {value}
    </button>
  )
}
