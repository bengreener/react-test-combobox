import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import ComboBox from './ComboBox';

const options = ['Along', 'Also', 'Absent', 'Batch', 'Beast', 'Crayon', 'Canoe'];
const mockOnChange = jest.fn();

beforeEach(() => {
    mockOnChange.mockClear();
})

describe('when an uncontrolled component', () => {
    it('renders combobox', async () => {
        render(<ComboBox options={options}/>);
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
        render(<ComboBox options={options}/>);
        const combobox = screen.getByRole('combobox');
        await user.type(combobox, 'Beast');
        expect(combobox.value).toBe('Beast');
    })
})

describe('when a controlled component', () => {
    it('renders combobox', async () => {
        render(<ComboBox value={''} options={options} onChange={mockOnChange}/>);
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
    // if focussed on user oriented behaviour this test is not required as behaviour tested in 'changes selection in combobox'
    // although if 'calls onChange handler' passes and 'changes selection in combobox' fails narrows search for a cause :-)
    it('calls onChange handler', async () => {
        const user = UserEvent.setup();
        
        render(<ComboBox value={''} options={options} onChange={mockOnChange} />);
    
        const combobox = screen.getByRole('combobox');
        await user.type(combobox, 'Beast');
        expect(mockOnChange).toBeCalled();
    })
    it('changes selection in combobox', async () => {
        const handleSelectionChange = jest.fn((event) => {
            rerender(<ComboBox value={event.target.value} options={options} onChange={handleSelectionChange} />);
        })
        const user = UserEvent.setup();

        const {rerender} = render(<ComboBox value={''} options={options} onChange={handleSelectionChange}/>);
    
        const combobox = screen.getByRole('combobox');
        await user.type(combobox, 'Beast');
        expect(combobox.value).toBe('Beast');
    })
})