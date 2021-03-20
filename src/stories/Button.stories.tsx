import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '../Components/Button'

export default {
  title: 'Button',
  component: Button,
  args: { value: 'hello' },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
