import React from 'react'
import './inputCard.sass'

const InputCard = React.forwardRef(({ children, type, value, ...rest }, ref) => {
  const childrenWithProps = React.cloneElement(children, { type, name: value })
  return (
    <label className='card-container'>
      <input
        id='input'
        type={type}
        className={`${type === 'radio' ? 'card-input-radio' : 'card-input-checkbox'}`}
        value={value}
        ref={ref}
        {...rest}
      />
      {childrenWithProps}
    </label>
  )
})

export default InputCard
