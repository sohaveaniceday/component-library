import { RefObject, useEffect } from 'react'
import { useOutsideClick } from '../'

export const usePopoverActions = (
  ref: RefObject<HTMLElement>,
  onClick: boolean,
  onClickOutside: boolean,
  onEsc: boolean,
  callback: () => void
): void => {
  useOutsideClick({
    onClickOutside: onClickOutside,
    ref: ref,
    callback: callback,
  })

  useEffect(() => {
    const refNode = ref.current

    const handleKeydown = (e: KeyboardEvent): void => {
      if (e.keyCode === 27) return callback()
    }

    if (onClick) refNode?.addEventListener('click', callback)

    if (onEsc)
      addEventListener('keydown', (e: KeyboardEvent) => handleKeydown(e))

    return (): void => {
      refNode?.removeEventListener('click', callback)
      document.removeEventListener('keydown', (e: KeyboardEvent) =>
        handleKeydown(e)
      )
    }
  }, [ref, callback, onClick, onEsc, onClickOutside])
}
