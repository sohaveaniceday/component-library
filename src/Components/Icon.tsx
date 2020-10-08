import React from 'react'

import { getClassName } from '../util'
import { BaseTypes } from '../util/types'

import {
  Tick,
  Edit,
  Chevron,
  Movie,
  Thumb,
  Arrows,
  Arrow,
  Help,
  Times,
} from '../images/svgs'

export const svgMap: any = {
  tick: Tick,
  edit: Edit,
  chevron: Chevron,
  movie: Movie,
  thumb: Thumb,
  arrows: Arrows,
  arrow: Arrow,
  help: Help,
  times: Times,
}

export type IconName =
  | 'tick'
  | 'edit'
  | 'chevron'
  | 'movie'
  | 'thumb'
  | 'thumb'
  | 'arrows'
  | 'arrow'
  | 'help'
  | 'times'

export type IconProps = {
  iconName: IconName
  isButton?: boolean
  cssClasses?: string[]
} & BaseTypes<JSX.IntrinsicElements['svg']>

export const Icon: React.FC<IconProps> = ({
  iconName,
  isButton,
  cssClasses = [],
  ...svgProps
}: IconProps) => {
  const iconClass = getClassName([...cssClasses])

  const SVG = svgMap[iconName]
  const iconElement = <SVG className={iconClass} {...svgProps} />

  return isButton ? (
    <button className='relative z-0 flex items-center text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500 hover:text-gray-500'>
      {iconElement}
    </button>
  ) : (
    iconElement
  )
}
