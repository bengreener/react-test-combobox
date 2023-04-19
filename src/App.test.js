import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from './App';

test('renders combobox', async () => {
  const component = render(<App />);

  expect(screen.getByRole('combobox', {name: ''})).toBeInTheDocument();
  expect(document.getElementById('options')).toBeInTheDocument();
  expect(document.getElementById('Along')).toBeInTheDocument();
  expect(document.getElementById('Also')).toBeInTheDocument();
  expect(document.getElementById('Absent')).toBeInTheDocument();
  expect(document.getElementById('Batch')).toBeInTheDocument();
  expect(document.getElementById('Beast')).toBeInTheDocument();
  expect(document.getElementById('Crayon')).toBeInTheDocument();
  expect(document.getElementById('Canoe')).toBeInTheDocument();
});

it('changes selection in combobox', async () => {
  const user = UserEvent.setup();
  const component = render(<App />);

  const combobox = screen.getByRole('combobox');
  await user.type(combobox, 'Beast');

  expect(combobox.value).toBe('Beast');
})
