import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from './App';

test('renders combobox', async () => {
  const component = render(<App />);

  expect(screen.getByRole('option', {name: 'A'}).selected).toBe(true);
  expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false);
  expect(screen.getByRole('option', {name: 'C'}).selected).toBe(false);
});

it('changes selection in combobox', async () => {
  const user = UserEvent.setup();
  const component = render(<App />);

  await user.selectOptions(screen.getByRole('combobox'), 'B')

  expect(screen.getByRole('option', {name: 'A'}).selected).toBe(false);
  expect(screen.getByRole('option', {name: 'B'}).selected).toBe(true);
  expect(screen.getByRole('option', {name: 'C'}).selected).toBe(false);
})
