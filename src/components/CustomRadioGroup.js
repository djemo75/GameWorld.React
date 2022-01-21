import { useEffect } from 'react';
import { Form } from 'react-bootstrap';

const CustomRadioGroup = ({
  name,
  options,
  value,
  onChange,
  label,
  disabled,
}) => {
  // Select first option
  useEffect(() => {
    if (options.length) {
      onChange(name, options[0].value);
    }
  }, [options]); //eslint-disable-line

  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      {options.map((option, index) => (
        <Form.Check
          key={index}
          name={name}
          type="radio"
          label={option.label}
          value={option.value}
          disabled={disabled}
          onChange={handleChange}
          checked={value === option.value}
        />
      ))}
    </Form.Group>
  );
};

export default CustomRadioGroup;
