import { render, screen } from '@testing-library/react'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'text-white'
    )
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'text-black'
    )
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'w-28 h-8'
    )
  })

  it('should render a bigger logo', () => {
    render(<Logo size="lg" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveClass(
      'w-52 h-14'
    )
  })
})
