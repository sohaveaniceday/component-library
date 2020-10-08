import React, { useRef } from 'react'
import { baseClass } from './baseClass'
import { BaseTypes } from '../../util/types'
import { getClassName } from '../../util'
import { usePopoverActions } from '../../customHooks'
import { Transition } from '../Transition'
import { Icon } from '../Icon'

export type ModalProps = {
  children: React.ReactChild
  visible?: boolean
  closable?: boolean
  onClose?: () => void
  closeOnEsc?: boolean
  centerContent?: boolean
} & BaseTypes<JSX.IntrinsicElements['div']>

export const Modal: React.FC<ModalProps> = ({
  children,
  visible = false,
  closable = false,
  onClose,
  closeOnEsc = false,
  centerContent = true,
  cssClasses = [],
  ...modalProps
}: ModalProps) => {
  const modalElementRef = useRef<HTMLDivElement | null>(null)

  const modalClass = getClassName([
    [
      centerContent,
      [
        'fixed',
        'bottom-0',
        'inset-x-0',
        'px-4',
        'pb-4',
        'z-20',
        'sm:inset-0',
        'sm:flex',
        'sm:items-center',
        'sm:justify-center',
      ],
    ],
    ...baseClass,
    ...cssClasses,
  ])

  const bgClass = getClassName([[centerContent, ['fixed', 'inset-0', 'z-10']]])
  usePopoverActions(modalElementRef, false, false, closeOnEsc, () => {
    if (onClose) return onClose()
  })

  return visible ? (
    <div className={modalClass} {...modalProps}>
      <Transition show={visible}>
        <>
          <Transition
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className={bgClass}>
              <div className='fixed inset-0 z-10 bg-gray-500 opacity-75'></div>
            </div>
          </Transition>
          <Transition
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            {centerContent ? (
              <div
                className='relative z-20 px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full sm:p-6'
                ref={(node): HTMLDivElement | null =>
                  (modalElementRef.current = node)
                }
              >
                {closable && (
                  <div className='absolute top-0 right-0 pt-4 pr-4 sm:block'>
                    <Icon
                      iconName='times'
                      isButton
                      onClick={onClose}
                      cssClasses={[`h-6`, `w-6`]}
                    />
                  </div>
                )}
                {children}
              </div>
            ) : (
              <div
                ref={(node): HTMLDivElement | null =>
                  (modalElementRef.current = node)
                }
              >
                {children}
              </div>
            )}
          </Transition>
        </>
      </Transition>
    </div>
  ) : (
    <></>
  )
}
