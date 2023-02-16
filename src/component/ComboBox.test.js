import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import ComboBox from './ComboBox';

const mockOnChange = jest.fn();

beforeEach(() => {
    mockOnChange.mockClear();
})

describe('when an uncontrolled component', () => {
    it('renders combobox', async () => {
        render(<ComboBox />);
      
        // first option would be true by default by default as no value set
        expect(screen.getByRole('option', {name: 'A'}).selected).toBe(true);
        expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'C'}).selected).toBe(false);
    });
    it('changes selection in combobox', async () => {
        const user = UserEvent.setup();
        render(<ComboBox />);
    
        await user.selectOptions(screen.getByRole('combobox'), 'C')
    
        expect(screen.getByRole('option', {name: 'A'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true);
    })
})

describe('when a controlled component', () => {
    it('renders combobox', async () => {
        render(<ComboBox value={2} onChange={mockOnChange}/>);
        
        // first option would be true by default so not a good option for a truthy test on initialisation
        expect(screen.getByRole('option', {name: 'A'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'B'}).selected).toBe(true);
        expect(screen.getByRole('option', {name: 'C'}).selected).toBe(false);
    });
    // if focussed on user oriented behaviour this test is not required as behaviour tested in 'changes selection in combobox'
    // although if 'calls onChange handler' passes and 'changes selection in combobox' fails narrows search for a cause :-)
    it('calls onChange handler', async () => {
        const user = UserEvent.setup();
        render(<ComboBox value={2} onChange={mockOnChange} />);
    
        await user.selectOptions(screen.getByRole('combobox'), 'C')
        expect(mockOnChange).toBeCalled();
    })
    it('changes selection in combobox', async () => {
        const handleSelectionChange = jest.fn((event) => {
            rerender(<ComboBox value={event.target.value} onChange={handleSelectionChange} />);
        })
        
        const user = UserEvent.setup();
        const {rerender} = render(<ComboBox value={2} onChange={handleSelectionChange}/>);
    
        await user.selectOptions(screen.getByRole('combobox'), 'C')
    
        expect(screen.getByRole('option', {name: 'A'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false);
        expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true);
    })
})