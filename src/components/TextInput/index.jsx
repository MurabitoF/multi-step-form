import React from 'react'
import './textInput.sass'

const TextInput = ({ label, type = 'text', name, placeholder, value, ...rest }) => {
  return (
    <div className='text-input-container'>
      <label htmlFor={name} className='text-input-label'>
        {label}
      </label>
      <input
        className='text-input'
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
    </div>
  )
}

export default TextInput
