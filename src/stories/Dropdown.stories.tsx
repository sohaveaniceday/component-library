import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
  Dropdown,
  DropdownProps,
  DropdownItemProps,
} from '../Components/Dropdown'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: { options: [{ content: 'hello world' }, { content: 'goodbye world' }] },
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    search: {
      table: {
        disable: true,
      },
    },
    stickyOption: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />

export const Primary = Template.bind({})
