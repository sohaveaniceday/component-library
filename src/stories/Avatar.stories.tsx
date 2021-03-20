import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Avatar, AvatarProps } from '../Components/Avatar'

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    src:
      'https://s.gravatar.com/avatar/fe36b1f545a31250f3236a93be0b2b3e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fri.png',
  },
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
