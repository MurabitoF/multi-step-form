import React from 'react'
import './cardContent.sass'

const CardContent = ({ type, isYearly, title, price, description, name }) => {
  if (type === 'checkbox') {
    return (
      <div className='card-content-container centered full-width'>
        <span className='card-content'>
          <h4>{title}</h4>
          <p className='card-text-gray small-text'>{description}</p>
        </span>
        <p className='card-addon-price small-text'>+${isYearly ? `${price.yearly}/yr` : `${price.monthly}/mo`}</p>
      </div>
    )
  }

  return (
    <div className='card-content-container card-direction'>
      <img src={`/icon-${name}.svg`} alt={`${title} icon'`} />
      <span className='card-content'>
        <h3>{title}</h3>
        <p className='card-text-gray small-text'>${isYearly ? `${price.yearly}/yr` : `${price.monthly}/mo`}</p>
        {isYearly && <p className='yearly-discount small-text'>2 month free</p>}
      </span>
    </div>
  )
}

export default CardContent
