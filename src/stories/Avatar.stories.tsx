import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Avatar, AvatarProps } from '../Components/Avatar'

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    src: 'images/avatar-pic.png',
  },
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
