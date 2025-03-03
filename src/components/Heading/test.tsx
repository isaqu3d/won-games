import { render, screen } from '@testing-library/react'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white label by default', () => {
    render(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'text-white'
    )
  })
})
