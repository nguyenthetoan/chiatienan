import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import NumberInput from './NumberInput';

export default function MoneyInput({
  fullWidth,
  inputLabel,
  onChange,
  elementId
}) {
  const [value, setValue] = useState();

  const handleChange = prop => event => {
    const { target: { value: v } } = event;
    setValue(v);
    onChange(v);
  };

  return (
    <>
      <FormControl fullWidth={fullWidth} variant="outlined">
        <TextField
          label={inputLabel}
          id={elementId}
          value={value}
          onChange={handleChange('amount')}
          InputProps={{
            inputComponent: NumberInput,
          }}
        />
      </FormControl>
    </>
  );
}
