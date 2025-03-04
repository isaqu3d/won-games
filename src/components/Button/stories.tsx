import { Meta, StoryObj } from '@storybook/react'
import { ShoppingCart } from 'lucide-react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'ghost']
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg']
    },
    icon: {
      control: false
    },
    as: {
      control: { type: 'radio' },
      options: ['button', 'a']
    },
    href: {
      control: 'text',
      if: { arg: 'as', eq: 'a' }
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md'
  }
}

export const WithIcon: Story = {
  args: {
    children: 'Buy now',
    variant: 'primary',
    size: 'md',
    icon: <ShoppingCart size={16} />
  }
}

export const AsLink: Story = {
  args: {
    children: 'Google',
    variant: 'secondary',
    as: 'a',
    href: 'https://google.com'
  }
}
