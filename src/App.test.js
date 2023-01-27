import { logRoles, render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from './App';

test('renders select listbox', async () => {
  const user = UserEvent.setup();
  const component = render(<App />);
  // logRoles(component.container);

  // await user.selectOptions(screen.getByRole('listbox'), ['1', 'C'])
  await user.selectOptions(screen.getByRole('combobox'), '1')

  expect(screen.getByRole('option', {name: 'A'}).selected).toBe(true)
  expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false)
  // expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true)
  expect(screen.getByRole('option', {name: 'C'}).selected).toBe(false)
});
