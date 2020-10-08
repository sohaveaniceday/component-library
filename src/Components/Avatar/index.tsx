import React, { useState } from 'react'
import { BaseTypes, Size, Color } from '../../util/types'
import { getClassName, translateHeightOrWidthClassNameValue } from '../../util'
import { Icon } from '../Icon'

export type AvatarProps = {
  color?: Color
  size?: Size
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
  size: Size
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
  const usePlaceholder = !src || isImageError

  const usePlaceHolderString = !!(
    usePlaceholder &&
    placeholder &&
    placeholder !== 'icon'
  )
  const useBottomNotificationPlacement = notification?.placement === 'bottom'
  const useRoundedShape = shape === 'rounded'

  const imageClassName = [
    ...createImageOrNotificationSizeClass(size, true),
    `rounded-${useRoundedShape ? 'md' : 'full'}`,
  ]

  const notificationElementClassName = [
    `block`,
    `rounded-full`,
    ...createImageOrNotificationSizeClass(size, false),
    `bg-${notification?.color ? notification.color : 'red'}-400`,
  ]

  const placementClassName = useBottomNotificationPlacement
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
      useRoundedShape,
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
      usePlaceHolderString,
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
    [usePlaceholder, placeholderClassName],
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
      {usePlaceHolderString ? (
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
      {usePlaceholder ? placeholderElement : imageElement}
      <span className={notificationSpanClassName}>
        {useRoundedShape && useBottomNotificationPlacement && (
          <span className={getClassName([...notificationElementClassName])} />
        )}
      </span>
    </span>
  )

  const children = notification
    ? elementWithNotification
    : usePlaceholder
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
