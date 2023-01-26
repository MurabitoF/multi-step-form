import React from 'react'
import './button.sass'

const Button = ({ label, onClick, primary, ...rest }) => {
  return (
    <button className={`button ${primary && 'button-primary'}`} {...rest}>
      {label}
    </button>
  )
}

export default Button
