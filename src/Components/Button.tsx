import React, { FC } from 'react'
import { BaseTypes, getClassName } from '../util'

type ButtonProps = {
  cssClasses?: string[]
  border?: boolean
  rounded?: boolean
  color?: string
} & BaseTypes<JSX.IntrinsicElements['button']>

export const Button: FC<ButtonProps> = ({
  value,
  cssClasses = [],
  onClick,
  type,
  color = 'blue-500',
  border = false,
  rounded = false,
  ...buttonProps
}: ButtonProps) => {
  const buttonClassName = getClassName([
    ...cssClasses,
    `bg-${color}`,
    'px-4',
    'py-2',
    'font-bold',
    'text-white',
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
