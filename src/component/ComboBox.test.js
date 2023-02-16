import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import ComboBox from './ComboBox';

const options = [{'value': '1', 'text': 'A'}, {'value': '2', 'text': 'B'}, {'value': '3', 'text': 'C'}];
const mockOnChange = jest.fn();

beforeEach(() => {
    mockOnChange.mockClear();
})

describe('when an uncontrolled component', () => {
    it('renders combobox', async () => {
        render(<ComboBox options={options}/>);
        // first option would be true by default by default as no value set
        expect(screen.getByRole('option', {name: 'A'}).selected).toBe(true);
        expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'C'}).selected).toBe(false);
    });
    it('changes selection in combobox', async () => {
        const user = UserEvent.setup();
        render(<ComboBox options={options}/>);
        await user.selectOptions(screen.getByRole('combobox'), 'C')
        expect(screen.getByRole('option', {name: 'A'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true);
    })
})

describe('when a controlled component', () => {
    it('renders combobox', async () => {
        render(<ComboBox value={2} options={options} onChange={mockOnChange}/>);

        expect(screen.getByRole('option', {name: 'A'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'B'}).selected).toBe(true);
        expect(screen.getByRole('option', {name: 'C'}).selected).toBe(false);
    });
    // if focussed on user oriented behaviour this test is not required as behaviour tested in 'changes selection in combobox'
    // although if 'calls onChange handler' passes and 'changes selection in combobox' fails narrows search for a cause :-)
    it('calls onChange handler', async () => {
        const user = UserEvent.setup();
        
        render(<ComboBox value={2} options={options} onChange={mockOnChange} />);
    
        await user.selectOptions(screen.getByRole('combobox'), 'C')
        expect(mockOnChange).toBeCalled();
    })
    it('changes selection in combobox', async () => {
        const handleSelectionChange = jest.fn((event) => {
            rerender(<ComboBox value={event.target.value} options={options} onChange={handleSelectionChange} />);
        })
        const user = UserEvent.setup();

        const {rerender} = render(<ComboBox value={2} options={options} onChange={handleSelectionChange}/>);
    
        await user.selectOptions(screen.getByRole('combobox'), 'C')
        expect(screen.getByRole('option', {name: 'A'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true);
    })
})