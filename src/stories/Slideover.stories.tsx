import React, { useState } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { SlideOver, SlideOverProps, Button, Icon } from '../Components'

export default {
  title: 'SlideOver',
  component: SlideOver,
} as Meta

export const Template: Story<SlideOverProps> = () => {
  const [isSlideOverVisible, setIsSlideOverVisible] = useState(false)
  const [currentEntity, setCurrentEntity] = useState({})
  return (
    <SlideOver
      isVisible={isSlideOverVisible}
      modal
      header={
        <header className='px-4 py-6 space-y-1 bg-indigo-600 sm:px-6'>
          <div className='flex items-center justify-between space-x-3'>
            <h2 className='text-lg font-medium leading-7 text-white truncate'>
              {'currentEntity title'}
            </h2>
            <div className='flex items-center h-7'>
              <Icon
                iconName='times'
                isButton
                cssClasses={[
                  'w-6',
                  'h-6',
                  'text-indigo-200',
                  'hover:text-white',
                ]}
                onClick={() => setIsSlideOverVisible(false)}
              />
            </div>
          </div>
          {'currententity subtitle'}
        </header>
      }
      footer={
        <Button
          type='button'
          onClick={() => setIsSlideOverVisible(false)}
          value='Close'
        />
      }
      background={
        <Button
          type='button'
          onClick={() => setIsSlideOverVisible(true)}
          value='Open'
        />
      }
    />
  )
}
