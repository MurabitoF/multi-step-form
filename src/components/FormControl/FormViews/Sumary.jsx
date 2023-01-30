import React, { useEffect, useState } from 'react'
import Button from '../../Button'

const Sumary = ({ handleComplete, formData, setStage }) => {
  const [total, setTotal] = useState(0)

  const transformNameToTitle = (name) => {
    const separatedName = name.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
    const title = separatedName.split('-').join(' ')
    return title.charAt(0).toUpperCase() + title.slice(1)
  }

  const goBack = () => {
    setStage(prev => (prev - 1))
  }

  useEffect(() => {
    const totalAddOns = Object.entries(formData[3]).reduce((sum, addon) => {
      return sum + addon[1].price
    }, 0)
    setTotal(formData[2].price + totalAddOns)
  }, [])

  return (
    <section className='form-control'>
      <h1>Finishing up</h1>
      <p className='form-description'>
        Double-check everything look OK before confirming.
      </p>
      <section>
        <section className='sumary-details-container'>
          <div className='sumary-details-plan'>
            <div className='sumary-details-plan-content'>
              <h4>{formData[2].planSelected} ({formData[2].yearly ? 'Yearly' : 'Monthly'})</h4>
              <Button className='sumary-plan-button' label='Change' onClick={() => setStage(2)} />
            </div>
            <h3 className='sumary-plan-price'>${formData[2].price}/{formData[2].yearly ? 'yr' : 'mo'}</h3>
          </div>
          <div className='sumary-details-addons'>
            {Object.entries(formData[3]).map(addon => (
              addon[1].selected && (
                <div key={addon[0]} className='sumary-addon'>
                  <span>{transformNameToTitle(addon[0])}</span>
                  <span className='sumary-addon-price'>+${addon[1].price}/{formData[2].yearly ? 'yr' : 'mo'}</span>
                </div>
              )

            ))}
          </div>
        </section>
        <div className='sumary-total'>
          <span>Total(per {formData[2].yearly ? 'year' : 'month'})</span>
          <span className='sumary-total-price'>+${total}/{formData[2].yearly ? 'yr' : 'mo'}</span>
        </div>
        <section className='form-buttons'>
          <Button type='button' label='Go Back' onClick={goBack} />
          <Button type='button' label='Confirm' complete onClick={() => handleComplete(total)} />
        </section>
      </section>
    </section>
  )
}

export default Sumary
