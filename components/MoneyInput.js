import React, { useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function MoneyInput({ fullWidth, inputLabel, onChange, elementId, disabled, defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = prop => event => {
    const { target: { value: v } } = event;

    setValue(v);
    onChange(v);
  };

  return (
    <>
      <FormControl fullWidth={fullWidth} variant="outlined">
        <InputLabel htmlFor={elementId}>{inputLabel}</InputLabel>
        <OutlinedInput
          disabled={disabled}
          id={elementId}
          value={value}
          onChange={handleChange('amount')}
          endAdornment={<InputAdornment position="end">vnđ</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
    </>
  );
}
