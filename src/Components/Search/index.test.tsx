import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Search } from './index'
import '@testing-library/jest-dom'

afterEach((): void => {
  cleanup
  jest.clearAllMocks()
})

describe('<Search>', (): void => {
  const handleChange = jest.fn()

  test('renders with with label and placeholder', () => {
    render(<Search placeholder="Search" onChange={handleChange} />)

    const label = screen.getByText('Search')
    expect(label).toBeInTheDocument()

    const inputField = screen.getByPlaceholderText('Search') as HTMLInputElement
    expect(inputField).toBeInTheDocument()
  })

  test('renders with an icon', () => {
    const { container } = render(
      <Search placeholder="Search" onChange={handleChange} />
    )
    const icon = container.querySelectorAll('svg')
    expect(icon.length).toBe(1)
  })

  test('tailored handleChange returns object with name and value', () => {
    render(<Search placeholder="Search" onChange={handleChange} />)

    const inputField = screen.getByPlaceholderText('Search') as HTMLInputElement
    expect(inputField).toBeEmptyDOMElement()

    fireEvent.change(inputField, { target: { value: 'A' } })
    expect(handleChange).toBeCalledTimes(1)
    expect(inputField).toHaveDisplayValue('A')
    expect(handleChange.mock.calls[0][1]).toStrictEqual({
      name: '',
      value: 'A',
    })
  })
})
