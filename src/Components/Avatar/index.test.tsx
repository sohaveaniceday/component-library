import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import { Avatar, AvatarProps } from './index'
import '@testing-library/jest-dom'

afterEach((): void => {
  cleanup
  jest.clearAllMocks()
})

describe('<Avatar>', () => {
  const mockProps: AvatarProps = {
    src: 'http://myavatar.com/',
  }

  const onClickMock = jest.fn()
  test('handles image with onClick', (): void => {
    render(
      <Avatar
        {...mockProps}
        onClick={onClickMock}
        notification={{ placement: 'top', color: 'blue' }}
      />
    )

    const avatarImage = screen.getByRole('img')
    expect(avatarImage).toBeInTheDocument()
    expect(avatarImage).toHaveProperty('src', mockProps.src)
    fireEvent.click(avatarImage)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test('handles notification placement', (): void => {
    const { container } = render(
      <Avatar
        {...mockProps}
        notification={{ placement: 'bottom', color: 'blue' }}
        shape="rounded"
      />
    )
    const notication = container.firstElementChild?.childNodes[1]
    expect(notication).toHaveClass('translate-y-1/2')
  })

  test('handles isButton', (): void => {
    render(<Avatar {...mockProps} isButton />)
    const avatar = screen.getByRole('button')
    expect(avatar).toBeInTheDocument()
  })

  test('handles image onError', (): void => {
    const { container } = render(
      <Avatar
        {...mockProps}
        notification={{ placement: 'top', color: 'blue' }}
      />
    )

    const avatarImage = screen.getByRole('img')
    expect(avatarImage).toBeInTheDocument()
    fireEvent(avatarImage, new Event('error'))
    expect(avatarImage).not.toBeInTheDocument()

    const placeholderIcon = container.firstElementChild?.firstChild?.firstChild
    expect(placeholderIcon?.nodeName).toBe('svg')
  })

  test('handles icon placeholder', (): void => {
    const { container } = render(<Avatar placeholder={'icon'} />)
    const icon = container?.firstChild?.firstChild
    expect(icon?.nodeName).toBe('svg')
  })

  test('handles string placeholder', (): void => {
    const { container } = render(<Avatar placeholder={'JD'} />)
    const placeholder = container.firstChild?.firstChild
    expect(placeholder).toHaveTextContent('JD')
  })

  test('handles shape', (): void => {
    const { container } = render(<Avatar placeholder={'JD'} shape="rounded" />)
    const placeholder = container.firstChild
    expect(placeholder).toHaveClass('rounded-md')
  })
})
