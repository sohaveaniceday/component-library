import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '../Components/Button'

export default {
  title: 'Button',
  component: Button,
  args: { value: 'hello' },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
