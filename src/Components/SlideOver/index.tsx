import React, { useEffect } from 'react'

import { baseClass } from './baseClass'
import { BaseTypes } from '../../util/types'
import { getClassName } from '../../util'
import { useLockBodyScroll, useDelayedUnmounting } from '../../customHooks'
import { Modal, Icon, Button } from '../'

import './index.css'

export * from './SlideOverContent'

export type SlideOverProps = {
  content?: React.ReactNode
  children?: React.ReactChild
  background?: React.ReactNode
  isVisible: boolean
  setIsSlideOverVisible?: React.Dispatch<React.SetStateAction<boolean>>
  headerTitle?: string
  subHeader?: string
} & BaseTypes<JSX.IntrinsicElements['section']>

export const SlideOver: React.FC<SlideOverProps> = ({
  content,
  children,
  background,
  cssClasses = [],
  isVisible,
  headerTitle = '',
  subHeader = '',
  setIsSlideOverVisible,
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
        <div className='w-screen h-full max-w-xs sm:max-w-md'>
          <div className='flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl'>
            <div className='flex-1 h-0 pb-6 space-y-6 overflow-y-scroll'>
              <header className='px-4 py-6 space-y-1 bg-indigo-600 sm:px-6'>
                <div className='flex items-center justify-between space-x-3'>
                  <h2 className='text-lg font-medium leading-7 text-white truncate'>
                    {headerTitle}
                  </h2>
                  <div className='flex items-center h-7'>
                    <Icon
                      iconName='times'
                      data-testid={'header-close'}
                      isButton
                      cssClasses={[
                        'w-6',
                        'h-6',
                        'text-indigo-200',
                        'hover:text-white',
                      ]}
                      onClick={
                        setIsSlideOverVisible
                          ? () => setIsSlideOverVisible(false)
                          : undefined
                      }
                    />
                  </div>
                </div>
                <p className='text-indigo-300'>{subHeader}</p>
              </header>
              <div className='relative flex-1 px-4 sm:px-6'>{content}</div>
            </div>
            <footer className='flex justify-end flex-shrink-0 px-4 py-4 space-x-4'>
              <Button
                id={'footer-close'}
                type='button'
                onClick={
                  setIsSlideOverVisible
                    ? () => setIsSlideOverVisible(false)
                    : undefined
                }
                value='Close'
                color='indigo'
                rounded
                cssClasses={['focus:outline-none']}
              />
            </footer>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <>
      {background}
      {mountingState !== 'unmounted' ? (
        <Modal visible centerContent={false}>
          {slideOver}
        </Modal>
      ) : (
        <></>
      )}
    </>
  )
}
