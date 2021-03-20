import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Icon, IconProps } from '../Components'

export default {
  title: 'Icon',
  component: Icon,
  args: { iconName: 'help' },
} as Meta

const Template: Story<IconProps> = (args) => (
  <div className='w-16 h-16'>
    <Icon {...args} />
  </div>
)

export const Primary = Template.bind({})
