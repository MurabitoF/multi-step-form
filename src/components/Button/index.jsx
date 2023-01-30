import React from 'react'
import './button.sass'

const Button = ({ label, onClick, primary, complete, ...rest }) => {
  return (
    <button className={`button ${primary && 'button-primary'} ${complete && 'button-complete'}`} onClick={onClick} {...rest}>
      {label}
    </button>
  )
}

export default Button
