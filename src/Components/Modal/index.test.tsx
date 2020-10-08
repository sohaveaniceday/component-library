import React from 'react'
import {
  render,
  cleanup,
  RenderResult,
  fireEvent,
} from '@testing-library/react'
import { Modal, ModalProps } from './index'
import '@testing-library/jest-dom'

afterEach((): void => {
  cleanup
  jest.clearAllMocks()
})

const children = <div>Modal content</div>

describe('<Modal>', () => {
  const mockProps: ModalProps = {
    closable: true,
    children: children,
  }

  const getModelContent = (render: RenderResult): HTMLElement | null =>
    render.queryByText('Modal content')

  test('handles render children', (): void => {
    const component = render(<Modal {...mockProps} visible />)
    expect(getModelContent(component)).toBeInTheDocument()
  })

  test('handles modal open and close', (): void => {
    const firstRender = render(<Modal {...mockProps} visible={false} />)
    expect(getModelContent(firstRender)).not.toBeInTheDocument()
    const secondRender = render(<Modal {...mockProps} visible />)
    expect(getModelContent(secondRender)).toBeInTheDocument()
  })

  test('handles click on close button and escape ', (): void => {
    const onCloseMock = jest.fn()
    const component = render(
      <Modal {...mockProps} visible onClose={onCloseMock} closeOnEsc />
    )
    const closeButton = component.getByRole('button').firstChild
    expect(closeButton).toBeInTheDocument()
    closeButton && fireEvent.click(closeButton)
    const modalContent = getModelContent(component)
    modalContent &&
      fireEvent.keyDown(modalContent, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27,
      })
    expect(onCloseMock).toHaveBeenCalledTimes(2)
  })
})
