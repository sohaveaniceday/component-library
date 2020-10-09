import React from 'react'
import {
  render,
  cleanup,
  RenderResult,
  fireEvent,
} from '@testing-library/react'
import { SlideOver, SlideOverProps, SlideOverContent } from './index'
import { clientDatum, userData } from './dummyData'
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

  const getModelContent = (render: RenderResult): HTMLElement | null =>
    render.queryByText('Slideover content')

  test('handles slideover to be visible and not visible', (): void => {
    const firstRender = render(<SlideOver {...mockProps} isVisible={false} />)
    expect(getModelContent(firstRender)).not.toBeInTheDocument()
    const secondRender = render(<SlideOver {...mockProps} isVisible />)
    expect(getModelContent(secondRender)).toBeInTheDocument()
  })

  test('handles render children', (): void => {
    const component = render(<SlideOver {...mockProps} isVisible />)
    expect(getModelContent(component)).toBeInTheDocument()
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
