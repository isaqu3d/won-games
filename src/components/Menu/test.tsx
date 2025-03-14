import { fireEvent, render, screen } from '@testing-library/react'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should handle open/close mobile menu', () => {
    render(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveClass('opacity-0')

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveClass('opacity-100')
  })

  it('should handle close mobile menu', () => {
    render(<Menu />)

    fireEvent.click(screen.getByLabelText(/open menu/i))
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveClass('opacity-0')
  })
})
