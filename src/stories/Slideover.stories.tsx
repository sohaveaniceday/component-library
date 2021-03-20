import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
  SlideOver,
  SlideOverProps,
  Button,
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
        <div style={{ height: '110vh' }}>
          <Button
            type='button'
            onClick={() => setIsSlideOverVisible(true)}
            value='Open'
            cssClasses={['focus:outline-none']}
          />
        </div>
      }
      content={
        <SlideOverContent data={userData} currentEntity={currentEntity} />
      }
    />
  )
}
