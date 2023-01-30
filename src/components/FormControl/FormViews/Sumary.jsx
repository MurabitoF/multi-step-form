import React, { useEffect, useState } from 'react'
import Button from '../../Button'
import SumaryDetails from '../../SumaryDetails'

const Sumary = ({ handleComplete, formData, setStage }) => {
  const [total, setTotal] = useState(0)
  const goBack = () => {
    setStage()
  }

  useEffect(() => {
    const totalAddOns = Object.entries(formData[3]).reduce((sum, addon) => {
      return sum + addon[1].price
    }, 0)
    console.log(totalAddOns)
    setTotal(formData[2].price + totalAddOns)
  }, [])

  return (
    <section className='form-control'>
      <h1>Finishing up</h1>
      <p className='form-description'>
        Double-check everything look OK before confirming.
      </p>
      <section>
        <SumaryDetails />
        <h1>Total: {total}</h1>
        <section className='form-buttons'>
          <Button type='button' label='Go Back' onClick={goBack} />
          <Button type='button' label='Next Step' complete onClick={handleComplete} />
        </section>
      </section>
    </section>
  )
}

export default Sumary
