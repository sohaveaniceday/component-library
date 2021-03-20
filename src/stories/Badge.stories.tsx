import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Badge, BadgeProps } from '../Components/Badge'

export default {
  title: 'Badge',
  component: Badge,
  args: {
    content: 'hello world',
  },
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Primary = Template.bind({})
