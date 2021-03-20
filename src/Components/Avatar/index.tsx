import React, { useState } from 'react'
import { BaseTypes, BaseSize, Color } from '../../types'
import { getClassName, translateHeightOrWidthClassNameValue } from '../../util'
import { Icon } from '../Icon'

export type AvatarProps = {
  size?: BaseSize
  cssClasses?: string[]
  list?: boolean
  shape?: 'circular' | 'rounded'
  placeholder?: 'icon' | string
  isButton?: boolean
  notification?: { placement: 'top' | 'bottom'; color: Color }
} & BaseTypes<JSX.IntrinsicElements['img']>

const createImageOrNotificationSizeClass = (
  size?: string | undefined,
  isImageClass?: boolean
): string[] => {
  const sizeValue = translateHeightOrWidthClassNameValue(
    size,
    isImageClass ? 4 : 1
  )
  return [`h-${sizeValue}`, `w-${sizeValue}`]
}

export const createNotificationClassName = (
  color: Color,
  size: BaseSize
): string[] => {
  return [
    `block`,
    `rounded-full`,
    ...createImageOrNotificationSizeClass(size, false),
    `bg-${color}-400`,
  ]
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  list = false,
  size = 'md',
  shape = 'circular',
  notification,
  placeholder = '',
  isButton,
  cssClasses = [],
  loading = 'lazy',
  ...imgProps
}: AvatarProps) => {
  const [isImageError, setIsImageError] = useState(false)
  const isPlaceholder = !src || isImageError

  const isPlaceHolderString = !!(
    isPlaceholder &&
    placeholder &&
    placeholder !== 'icon'
  )
  const isBottomNotificationPlacement = notification?.placement === 'bottom'
  const isRoundedShape = shape === 'rounded'

  const imageClassName = [
    ...createImageOrNotificationSizeClass(size, true),
    `rounded-${isRoundedShape ? 'md' : 'full'}`,
  ]

  const notificationElementClassName = [
    `block`,
    `rounded-full`,
    ...createImageOrNotificationSizeClass(size, false),
    `bg-${notification?.color ? notification.color : 'red'}-400`,
  ]

  const placementClassName = isBottomNotificationPlacement
    ? ['translate-y-1/2']
    : [
        ...createNotificationClassName(
          notification?.color || ('green' as Color),
          size
        ),
        '-translate-y-1/2',
      ]

  const notificationSpanClassName = getClassName([
    `absolute`,
    `${notification?.placement}-0`,
    `right-0`,
    `text-white`,
    `shadow-solid`,
    `rounded-full`,
    [
      isRoundedShape,
      [`transform`, `translate-x-1/2`, `block`, ...placementClassName],
      notificationElementClassName,
    ],
  ])

  const listClassName = getClassName([
    'rounded-full',
    'border-2',
    [
      list,
      ['-ml-2', 'border-white'],
      [
        'flex',
        'text-sm',
        'border-transparent',
        'focus:outline-none',
        'focus:border-gray-300',
        'transition',
        'duration-150',
        'ease-in-out',
      ],
    ],
  ])

  const placeholderClassName = [...imageClassName, `bg-gray-100`]

  const placeholderElementClassName = getClassName([
    `overflow-hidden`,
    `inline-block`,
    [
      isPlaceHolderString,
      [
        `leading-none`,
        `inline-flex`,
        `items-center`,
        `justify-center`,
        `bg-gray-400`,
      ],
    ],
    ...placeholderClassName,
    ...cssClasses,
  ])

  const elementWithNotificationClassName = getClassName([
    `inline-block`,
    `relative`,
    [isPlaceholder, placeholderClassName],
    ...cssClasses,
  ])

  const imageElement = (
    <img
      src={src}
      className={getClassName([...imageClassName, ...cssClasses])}
      onError={(): void => setIsImageError(true)}
      loading={loading}
      {...imgProps}
    />
  )

  const placeholderElement = (
    <span className={placeholderElementClassName}>
      {isPlaceHolderString ? (
        <span className={`text-${size} font-medium text-white`}>
          {placeholder}
        </span>
      ) : (
        <Icon iconName='avatar' className='w-full h-full text-gray-300' />
      )}
    </span>
  )

  const elementWithNotification = (
    <span className={elementWithNotificationClassName}>
      {isPlaceholder ? placeholderElement : imageElement}
      <span className={notificationSpanClassName}>
        {isRoundedShape && isBottomNotificationPlacement && (
          <span className={getClassName([...notificationElementClassName])} />
        )}
      </span>
    </span>
  )

  const children = notification
    ? elementWithNotification
    : isPlaceholder
    ? placeholderElement
    : imageElement

  return isButton ? (
    <button className={listClassName}>{children}</button>
  ) : list ? (
    <span className={listClassName}>{children}</span>
  ) : (
    children
  )
}
