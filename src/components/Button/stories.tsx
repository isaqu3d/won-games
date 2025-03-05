import { Meta, Story } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text'
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large']
    }
  }
} as Meta

const Template: Story = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Buy now',
  size: 'medium'
}
