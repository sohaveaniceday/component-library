import React, { ReactNode } from 'react'
import { getClassName } from '../../util'
import { useBoolean } from '../../customHooks'
import { Link } from 'react-router-dom'

type LinkProps = {
  name: string
  path: string
}

type NavbarProps = {
  links?: LinkProps[]
  logo?: ReactNode
  backgroundColor?: string
  linkColor?: string
  linkHoverColor?: string
  rightOptions?: ReactNode
}

export const Navbar = ({
  links,
  logo,
  backgroundColor = 'blue-700',
  linkColor = 'green-400',
  linkHoverColor = 'green-700',
  rightOptions,
}: NavbarProps) => {
  const [navbarOpen, { toggle: toggleNavbarOpen }] = useBoolean(false)

  return (
    <nav className={`sticky w-full top-0 z-20`}>
      <div className={`bg-${backgroundColor} relative z-40`}>
        <div className='px-2 mx-auto sm:px-6'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              <button
                className={getClassName([
                  'inline-flex',
                  'items-center',
                  'justify-center',
                  'p-2',
                  'text-white',
                  'transition',
                  'duration-150',
                  'ease-in-out',
                  'rounded-md',
                  `bg-${linkColor}`,
                  `hover:bg-${linkHoverColor}`,
                  'focus:outline-none',
                ])}
                aria-label='Main menu'
                aria-expanded='false'
                onClick={() => toggleNavbarOpen()}
              >
                <svg
                  className='block w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                <svg
                  className='hidden w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
              <div className='flex-shrink-0 my-auto'>{logo}</div>
              <div className='hidden sm:block sm:ml-6'>
                <div className='flex'>
                  {links &&
                    links.map((link) => {
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={getClassName([
                            'px-3',
                            'py-2',
                            'mr-2',
                            'text-sm',
                            'font-medium',
                            'leading-5',
                            'text-white',
                            'transition',
                            'duration-150',
                            'ease-in-out',
                            'rounded-md',
                            `bg-${linkColor}`,
                            'focus:outline-none',
                            `hover:bg-${linkHoverColor}`,
                            // 'focus:text-white',
                            // 'focus:bg-gray-700',
                          ])}
                        >
                          {link.name}
                        </Link>
                      )
                    })}
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              {rightOptions}
            </div>
          </div>
        </div>
      </div>

      <div
        className={getClassName([
          'transition',
          'duration-500',
          'ease-in-out',
          'transform',
          'sm:hidden',
          `bg-${backgroundColor}`,
          'rounded-b-lg',
          'absolute',
          'z-0',
          [navbarOpen, ['-translate-y-0'], ['-translate-y-full']],
        ])}
      >
        <div className='p-3'>
          {links &&
            links.map((link, index) => {
              const isLast = links.length === index + 1
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={getClassName([
                    'block',
                    'px-3',
                    'py-2',
                    [!isLast, 'mb-2'],
                    'text-base',
                    'font-medium',
                    'text-white',
                    'transition',
                    'duration-150',
                    'ease-in-out',
                    'rounded-md',
                    `bg-${linkColor}`,
                    `hover:bg-${linkHoverColor}`,
                    'focus:outline-none',
                  ])}
                >
                  {link.name}
                </Link>
              )
            })}
        </div>
      </div>
    </nav>
  )
}
