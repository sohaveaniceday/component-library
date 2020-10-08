import React, { FC } from 'react'
import {
  Tick,
  Edit,
  Chevron,
  Movie,
  Thumb,
  Arrows,
  Arrow,
  Help,
} from '../images/svgs'
import { BaseTypes, getClassName } from '../util'

const svgMap: {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
} = {
  tick: Tick,
  edit: Edit,
  chevron: Chevron,
  movie: Movie,
  thumb: Thumb,
  arrows: Arrows,
  arrow: Arrow,
  help: Help,
}

export type IconName =
  | 'tick'
  | 'edit'
  | 'chevron'
  | 'movie'
  | 'thumb'
  | 'arrows'
  | 'arrow'
  | 'help'

type IconProps = {
  iconName: string
  cssClasses?: string[]
  isButton?: boolean
} & BaseTypes<JSX.IntrinsicElements['svg']>

export const Icon: FC<IconProps> = ({
  iconName,
  cssClasses = [],
  isButton,
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
