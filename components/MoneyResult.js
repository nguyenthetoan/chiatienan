import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

export default function MoneyResult({ value, elementId, inputLabel }) {

  return (
    <>
      <FormControl fullWidth>
        <TextField
          disabled
          label={inputLabel}
          id={elementId}
          value={value}
        />
      </FormControl>
    </>
  )
}
