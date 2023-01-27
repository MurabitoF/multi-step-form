import React from 'react'
import './toggle.sass'

const Toggle = React.forwardRef(({ labelOff, labelOn, isYearly, ...rest }, ref) => {
  return (
    <section className='toggle-container'>
      <span className={`toggle-label ${isYearly && 'toggle-label-inactive'}`}>{labelOff}</span>
      <label className='toggle-switch'>
        <input type='checkbox' ref={ref} {...rest} />
        <span className='toggle-slider' />
      </label>
      <span className={`toggle-label ${!isYearly && 'toggle-label-inactive'}`}>{labelOn}</span>
    </section>
  )
})

export default Toggle
