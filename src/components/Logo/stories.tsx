import { Meta, StoryFn } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    color: 'black',
    size: 'md',
    hideOnMobile: false
  },
  argTypes: {
    color: {
      options: ['white', 'black'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta

export const Default: StoryFn<LogoProps> = (args) => <Logo {...args} />
