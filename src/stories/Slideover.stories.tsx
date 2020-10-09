import React, { useState } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import {
  SlideOver,
  SlideOverProps,
  Button,
  Icon,
  SlideOverContent,
} from '../Components'
import { clientDatum, userData } from '../Components/SlideOver/dummyData'

export default {
  title: 'SlideOver',
  component: SlideOver,
} as Meta

export const Template: Story<SlideOverProps> = () => {
  const [isSlideOverVisible, setIsSlideOverVisible] = useState(false)
  const [currentEntity, setCurrentEntity] = useState(clientDatum)
  return (
    <SlideOver
      isVisible={isSlideOverVisible}
      headerTitle={currentEntity.name}
      subHeader={'Client'}
      setIsSlideOverVisible={setIsSlideOverVisible}
      background={
        <Button
          type='button'
          onClick={() => setIsSlideOverVisible(true)}
          value='Open'
          cssClasses={['focus:outline-none']}
        />
      }
      content={
        <SlideOverContent data={userData} currentEntity={currentEntity} />
      }
    />
  )
}
