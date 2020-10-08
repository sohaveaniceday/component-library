import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Dropdown, DropdownProps } from './index'
import { Icon } from '../Icon'
import '@testing-library/jest-dom'

afterEach((): void => {
  cleanup
  jest.clearAllMocks()
})

describe('<Dropdown>', (): void => {
  const svgItemMock = (
    <Icon
      iconName="file"
      className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
    />
  )

  const dropdownMock: DropdownProps = {
    options: [
      {
        divided: true,
        content: 'Hello',
        onClick: jest.fn(),
        icon: 'email',
        cssClasses: ['extraClass'],
        header: 'header',
        value: 'myValue0',
      },
      {
        divided: true,
        content: 'Bye',
        icon: 'fileExcel',
        href: 'www.heref.co.uk',
        disabled: true,
      },
      {
        icon: svgItemMock,
        href: 'www.hereferenced.co.uk',
        children: <p>ChildrenHref</p>,
        disabled: true,
      },
      {
        divided: true,
        icon: svgItemMock,
        onClick: jest.fn(),
        children: <p>ChildrenOnclick</p>,
        value: 'children',
      },
    ],
  }

  const hasProperty = (
    dropdownMock: DropdownProps,
    property: string
  ): number => {
    const dropdownMockArr = dropdownMock.options
      ? Array.from(dropdownMock.options)
      : []
    return dropdownMockArr.reduce(
      (acc, item) => (item.hasOwnProperty(property) ? (acc += 1) : acc),
      0
    )
  }

  test('handles array of dropdown items with href, onClick, disabled and not', () => {
    const { container } = render(<Dropdown {...dropdownMock} />)

    const header = screen.getByText('header')
    expect(header).toBeInTheDocument()

    const firstDropdownOptionContent = screen.getByText('Hello')
    expect(firstDropdownOptionContent).toBeInTheDocument()

    const dropdownItemWithOnClick = container.querySelector(
      `div[data-value='${dropdownMock.options[0].value}']`
    )

    fireEvent.click(dropdownItemWithOnClick as Node)
    expect(dropdownMock.options[0].onClick).toHaveBeenCalledTimes(1)

    const dropdownItemWithDisabled = container.querySelector(
      `div[data-name='${dropdownMock.options[1].content}']`
    )

    expect(dropdownItemWithDisabled).not.toHaveClass(
      'hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
    )
    const secondDropdownOptionContent = screen.getByText('Bye')
    expect(secondDropdownOptionContent).toBeInTheDocument()

    const link = container.querySelector('a')
    expect(link).toHaveAttribute('href', dropdownMock.options[1].href)
  })

  test('renders children with href, onClick and disabled', () => {
    const { container } = render(<Dropdown {...dropdownMock} />)

    const dropdownItemsWithHref = screen.getAllByRole('menuitem')[2]
    expect(dropdownItemsWithHref).toHaveAttribute(
      'href',
      dropdownMock.options[2].href
    )
    expect(dropdownItemsWithHref).not.toHaveClass(
      'hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
    )

    const childrenWithHref = screen.getByText('ChildrenHref')
    expect(childrenWithHref.nodeName).toBe('P')

    const childrenWithOnClick = screen.getByText('ChildrenOnclick')

    expect(childrenWithOnClick.nodeName).toBe('P')

    const dropdownItemWithOnClick = container.querySelector(
      `div[data-value='${dropdownMock.options[3].value}']`
    )
    expect(dropdownItemWithOnClick).toBeInTheDocument()

    fireEvent.click(dropdownItemWithOnClick as Node)
    expect(dropdownMock.options[3].onClick).toHaveBeenCalledTimes(1)
  })

  test('handles string with icon name and Icon element', () => {
    const { container } = render(<Dropdown {...dropdownMock} />)
    const icons = container.querySelectorAll('svg')

    expect(icons.length).toBe(hasProperty(dropdownMock, 'icon'))
  })

  test('handles extra tailwind classes through cssClasses', () => {
    const { container } = render(<Dropdown {...dropdownMock} />)

    const className = dropdownMock.options[0].cssClasses
      ? dropdownMock.options[0].cssClasses[0]
      : ''

    const dropdownItemWithExtraCssClass = container.querySelector(
      `.${className}`
    )
    expect(dropdownItemWithExtraCssClass).toBeInTheDocument()
  })

  test('renders header when given', () => {
    render(<Dropdown {...dropdownMock} />)
    expect(screen.getByText('header')).toBeInTheDocument()
  })

  test('renders divider except last dropdown item', () => {
    render(<Dropdown {...dropdownMock} />)

    const dividers = screen.getAllByRole('separator')

    const isLastItemDivided = dropdownMock.options[
      dropdownMock.options.length - 1
    ].hasOwnProperty('divided')

    expect(dividers.length).toBe(
      isLastItemDivided
        ? hasProperty(dropdownMock, 'divided') - 1
        : hasProperty(dropdownMock, 'divided')
    )
  })
})
