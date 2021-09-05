import React from 'react'
import {TextField} from '@material-ui/core'

const FormInput = ({onChange, label, value, fieldKey, ...props}) => {

  const handleChange = (event) => onChange(fieldKey, event.target.value)

  return (
    <TextField label={label} value={value} onChange={handleChange} data-testid={fieldKey} name={fieldKey}
               variant='outlined' required {...props} />
  )
}

export default FormInput
