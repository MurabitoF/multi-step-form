import React from 'react'
import './textInput.sass'

const TextInput = React.forwardRef(({ label, name, placeholder, errors, ...rest }, ref) => {
  return (
    <div className='text-input-container'>
      <div className='text-input-header'>
        <label htmlFor={name} className='text-input-label'>
          {label}
        </label>
        {errors && <small className='text-input-error-msg'>{errors.message}</small>}
      </div>
      <input
        className={`text-input ${errors && 'text-input-error'}`}
        name={name}
        id={name}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </div>
  )
})

export default TextInput
