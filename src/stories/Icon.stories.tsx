import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Icon, IconProps } from '../Components'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  iconName: 'help',
}
