import React from 'react'
import './cardContent.sass'

const CardContent = ({ type, isYearly, title, price, name }) => {
  if (type === 'checkbox') {
    return <h1>Hola</h1>
  }

  return (
    <div className='card-content-container'>
      <img src={`src/assets/icon-${name}.svg`} alt={`${title} icon'`} />
      <span className='card-content'>
        <h3>{title}</h3>
        <p className='card-price'>${isYearly ? `${price.yearly}/yr` : `${price.monthly}/mo`}</p>
        {isYearly && <p className='yearly-discount'>2 month free</p>}
      </span>
    </div>
  )
}

export default CardContent
