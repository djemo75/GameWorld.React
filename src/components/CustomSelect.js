import { useEffect } from 'react';
import { Form } from 'react-bootstrap';

const CustomSelect = ({ name, options, value, onChange, label, disabled }) => {
  // Select first option
  useEffect(() => {
    if (options.length) {
      onChange(name, options[0].value);
    }
  }, [options]); //eslint-disable-line

  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  const renderOptions = (options) => {
    return options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Select
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
        disabled={disabled}
      >
        {renderOptions(options)}
      </Form.Select>
    </Form.Group>
  );
};

export default CustomSelect;
