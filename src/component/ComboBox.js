import React from 'react';

/**
 * Simple combo box
 * @param {Object} props
 * @param {string} props.value
 * @param {Object[]} props.options
 * @param {ComboBox~onChange} props.onChange
 * @returns {React.ReactComponentElement}
 */
function ComboBox({value, options, onChange}) {

  const optionElements = options.map(option => <option key={option} id={option} value={option}>{option}</option>);
    return (
      <>
        <input id="combobox" name="combobox" list="options" value={value} onChange={onChange} />
        <datalist id="options">
          {optionElements}
        </datalist>
      </>
    );
      
}

export default ComboBox;

/**
 * @callback ComboBox~onChange
 * @param {Object} event
 * @param {Object} event.target
 * @param {string} event.target.value
 */