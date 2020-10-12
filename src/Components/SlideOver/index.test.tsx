import React from 'react'
import {
  render,
  cleanup,
  RenderResult,
  fireEvent,
} from '@testing-library/react'
import { SlideOver, SlideOverProps } from './index'
import '@testing-library/jest-dom'

afterEach((): void => {
  cleanup
  jest.clearAllMocks()
})

const children = <div>Slideover content</div>

describe('<SlideOver>', () => {
  const mockProps: SlideOverProps = {
    children: children,
    isVisible: true,
  }

  const getSlideOverContent = (render: RenderResult): HTMLElement | null =>
    render.queryByText('Slideover content')

  test('handles render children', (): void => {
    const component = render(
      <SlideOver {...mockProps} isVisible>
        <div data-testid='close' />
      </SlideOver>
    )
    expect(getSlideOverContent(component)).toBeInTheDocument()
  })

  test('handles slideover to be visible and not visible', (): void => {
    const firstRender = render(<SlideOver {...mockProps} isVisible={false} />)
    expect(getSlideOverContent(firstRender)).not.toBeInTheDocument()
    const secondRender = render(<SlideOver {...mockProps} isVisible />)
    expect(getSlideOverContent(secondRender)).toBeInTheDocument()
  })

  test('handles click on close button', (): void => {
    const onCloseMock = jest.fn()
    const component = render(
      <SlideOver
        {...mockProps}
        content={<button data-testid='close' onClick={onCloseMock} />}
      />
    )
    const closeButton = component.getByTestId('close')
    expect(closeButton).toBeInTheDocument()
    closeButton && fireEvent.click(closeButton)
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
