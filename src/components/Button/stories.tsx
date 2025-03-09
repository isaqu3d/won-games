import { Meta, StoryObj } from '@storybook/react'
import { ShoppingCartIcon } from 'lucide-react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'Text displayed inside the button'
    },
    icon: {
      control: () => null,
      description: 'Toggle to show an icon inside the button'
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary'],
      description: 'Defines the button style variant'
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Sets the button size'
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now',
    icon: <ShoppingCartIcon />,
    size: 'md'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: 'Buy now',
    icon: <ShoppingCartIcon />,
    size: 'lg'
  }
}
