import React, { useEffect } from 'react'

import { baseClass } from './baseClass'
import { BaseTypes } from '../../util/types'
import { getClassName } from '../../util'
import { useLockBodyScroll, useDelayedUnmounting } from '../../customHooks'
import { Modal } from '../'

import './index.css'

export * from './SlideOverContent'

export type SlideOverProps = {
  modal?: boolean
  header?: React.ReactNode
  content?: React.ReactNode
  children?: React.ReactChild
  footer?: React.ReactNode
  background?: React.ReactNode
  isVisible: boolean
} & BaseTypes<JSX.IntrinsicElements['section']>

export const SlideOver: React.FC<SlideOverProps> = ({
  modal = false,
  header,
  content,
  children,
  footer,
  background,
  cssClasses = [],
  isVisible,
  ...slideOverProps
}: SlideOverProps) => {
  content = content || children
  const slideOverClass = getClassName([...baseClass, ...cssClasses])
  const { mountingState, show, hide } = useDelayedUnmounting()

  useLockBodyScroll(isVisible)

  useEffect(() => {
    if (isVisible && mountingState !== 'mounted') {
      show()
    } else if (!isVisible && mountingState !== 'unmounted') {
      hide()
    }
  }, [isVisible, show, hide, mountingState])

  const slideOver = (
    <section className={slideOverClass} {...slideOverProps}>
      <div
        className={getClassName([
          'start-animation',
          [mountingState === 'unmounting', 'end-animation'],
        ])}
      >
        <div className='w-screen h-screen max-w-xs sm:max-w-md'>
          <div className='flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl'>
            <div className='flex-1 h-0 pb-6 space-y-6 overflow-y-scroll'>
              {header}
              <div className='relative flex-1 px-4 sm:px-6'>{content}</div>
            </div>
            {footer && (
              <div className='flex justify-end flex-shrink-0 px-4 py-4 space-x-4'>
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <>
      {background}
      {mountingState !== 'unmounted' ? (
        modal ? (
          <Modal visible centerContent={false}>
            {slideOver}
          </Modal>
        ) : (
          slideOver
        )
      ) : (
        <></>
      )}
    </>
  )
}
