import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'

test('renders the Dice Game home page by default', () => {
  render(<App />)
  expect(screen.getByRole('button', { name: /play game/i })).toBeInTheDocument()
})

test('navigates to the game page when Play Game is clicked', async () => {
  const user = userEvent.setup()
  render(<App />)
  await user.click(screen.getByRole('button', { name: /play game/i }))
  expect(screen.getByRole('button', { name: /roll dice/i })).toBeInTheDocument()
})
