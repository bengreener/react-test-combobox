/**
 * @param {object<{multiple<boolean>, value, options<array<value, text>>, onChange<event>}>} props 
 * @returns ComboBox
 */
function ComboBox({multiple, value, options, onChange}) {
    return (
        <select multiple={multiple} value={value} onChange={onChange}>
          <option value='1'>A</option>
          <option value='2'>B</option>
          <option value='3'>C</option>
        </select>
      );
}

export default ComboBox;