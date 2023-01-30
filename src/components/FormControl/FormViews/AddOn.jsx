import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../Button'
import InputCard from '../../InputCard'
import CardContent from '../../InputCard/CardContent'

const AddOn = ({ onSubmit, initialState, setStage, prices, isYearly }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialState
  })

  const goBack = () => {
    reset(initialState)
    setStage()
  }

  const finishStage = (data) => {
    const mappedData = pricesData.map(addon => {
      return [
        addon[0],
        {
          selected: data[addon[0]],
          price: data[addon[0]] ? (addon[1].prices[isYearly ? 'yearly' : 'monthly']) : 0
        }
      ]
    })
    onSubmit(Object.fromEntries(mappedData))
  }

  const pricesData = Object.entries(prices)

  return (
    <section className='form-control'>
      <h1>Pick add-ons</h1>
      <p className='form-description'>
        Add-ons help enhance your gaming experience.
      </p>
      <form onSubmit={handleSubmit(finishStage)}>
        <fieldset className='form-cards'>
          {pricesData.map(addon => (
            <InputCard key={addon[0]} type='checkbox' {...register(addon[0])} checked={addon[1].selected}>
              <CardContent
                title={addon[1].title}
                price={addon[1].prices}
                description={addon[1].description}
                isYearly={isYearly}
              />
            </InputCard>
          ))}
        </fieldset>

        <section className='form-buttons'>
          <Button type='button' label='Go Back' onClick={goBack} />
          <Button type='submit' label='Next Step' primary />
        </section>
      </form>
    </section>
  )
}

export default AddOn
