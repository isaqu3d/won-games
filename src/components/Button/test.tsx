import { render, screen } from '@testing-library/react'
import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    render(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveClass(
      'text-base h-10 px-6'
    )
  })

  it('should render the small size', () => {
    render(<Button size="sm">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveClass(
      'text-sm h-8 px-4'
    )
  })

  it('should render the large size', () => {
    render(<Button size="lg">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveClass(
      'text-lg h-12 px-8'
    )
  })

  it('should render the primary variant', () => {
    render(<Button variant="primary">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveClass(
      'bg-gradient-to-b from-red-500 to-primary text-white shadow-md hover:brightness-110 active:brightness-90'
    )
  })

  it('should render with an icon', () => {
    render(<Button icon={<span data-testid="icon" />}>Buy Now</Button>)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
