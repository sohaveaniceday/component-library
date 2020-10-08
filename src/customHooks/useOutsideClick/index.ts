import { useEffect, RefObject } from 'react'

type UseOutsideClickProps = {
  onClickOutside: boolean
  ref: RefObject<HTMLElement>
  additionalRefs?: RefObject<HTMLElement>[]
  callback: () => void
}

export const useOutsideClick = ({
  onClickOutside,
  ref,
  callback,
  additionalRefs = [],
}: UseOutsideClickProps): void => {
  const handleClick = (e: MouseEvent) => {
    const checkRefs = (refToCheck: RefObject<HTMLElement>) =>
      refToCheck.current && !refToCheck.current.contains(e.target as Node)

    additionalRefs.push(ref)

    if (additionalRefs.every(checkRefs)) {
      callback()
    }
  }

  useEffect(() => {
    if (onClickOutside) document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
