import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function MoneyResult({ value, elementId, inputLabel }) {

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor={elementId}>{inputLabel}</InputLabel>
        <OutlinedInput
          disabled
          id={elementId}
          value={value}
          labelWidth={60}
        />
      </FormControl>
    </>
  )
}
