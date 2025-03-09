import { cn } from '@/utils/cn'

import { tv } from 'tailwind-variants'

const buttonStyles = tv({
  base: 'rounded-md font-medium transition-all focus:ring-2 focus:ring-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',

  variants: {
    variant: {
      primary:
        'bg-gradient-to-b from-red-500 to-primary text-white shadow-md hover:brightness-110 active:brightness-90'
    },
    size: {
      sm: 'text-sm h-8 px-4 [&>svg]:w-4 [&>svg]:h-4',
      md: 'text-base h-10 px-6 [&>svg]:w-5 [&>svg]:h-5',
      lg: 'text-lg h-12 px-8 [&>svg]:w-6 [&>svg]:h-6'
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export type ButtonProps = {
  children?: React.ReactNode
  icon?: React.ReactNode
  variant?: 'primary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Button = ({
  children,
  icon,
  variant,
  size = 'md',
  className
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonStyles({ variant, size, className }),
        'flex items-center justify-center gap-2'
      )}
    >
      {!!icon && <span>{icon}</span>}
      {children && <span>{children}</span>}
    </button>
  )
}

export default Button
