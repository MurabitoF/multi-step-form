import React from 'react'
import './button.sass'

const Button = ({ label, onClick, primary, ...rest }) => {
  return (
    <button className={`button ${primary && 'button-primary'}`} onClick={onClick} {...rest}>
      {label}
    </button>
  )
}

export default Button
