import { render, screen } from '@testing-library/react'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })
})
