import React from 'react';
import './App.css';

function App() {
  const [value, setValue] = React.useState();

  function handleSelectionChange(event) {
    setValue(event.target.value);
  }

  return (
    // <select multiple={false}>
    <select multiple={false} value={value} onChange={handleSelectionChange}>
      <option value='1'>A</option>
      <option value='2'>B</option>
      <option value='3'>C</option>
    </select>
  );
}

export default App;
