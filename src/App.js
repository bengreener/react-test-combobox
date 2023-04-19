import React from 'react';
import './App.css';
import ComboBox from './component/ComboBox';

const options = ['Along', 'Also', 'Absent', 'Batch', 'Beast', 'Crayon', 'Canoe'];

function App() {
  const [value, setValue] = React.useState('');

  function handleSelectionChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <h1>Combo Box Demo</h1>
      <ComboBox options={options} value={value} onChange={handleSelectionChange} />
    </div>
  );
}

export default App;