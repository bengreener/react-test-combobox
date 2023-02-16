import React from 'react';

/**
 * Simple combo box
 * @param {Object} props
 * @param {string} props.value
 * @param {Object[]} props.options
 * @param {string} props.options[].value
 * @param {string} props.options[].text
 * @param {ComboBox~onChange} props.onChange
 * @returns {React.ReactComponentElement}
 */
function ComboBox({value, options, onChange}) {

  const optionElements = options.map(option => <option key={option.value} value={option.value}>{option.text}</option>);
    return (
        <select multiple={false} value={value} onChange={onChange}>
          {optionElements}
        </select>
      );
}

export default ComboBox;

/**
 * @callback ComboBox~onChange
 * @param {Object} event
 * @param {Object} event.target
 * @param {string} event.target.value
 */