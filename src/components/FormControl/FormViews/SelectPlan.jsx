import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../Button'
import InputCard from '../../InputCard'
import CardContent from '../../InputCard/CardContent'
import Toggle from '../../Toggle'

const SelectPlan = ({ onSubmit, initialState, setStage, prices }) => {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: initialState
  })

  const isYearly = watch('yearly')

  const goBack = () => {
    reset(initialState)
    setStage()
  }

  const finishStage = (data) => {
    const pricesSelected = prices[data.planSelected]
    const mappedData = {
      ...data,
      price: pricesSelected[isYearly ? 'yearly' : 'monthly']
    }
    onSubmit(mappedData)
  }

  const pricesData = Object.entries(prices)

  return (
    <section className='form-control'>
      <h1>Select your plan</h1>
      <p className='form-description'>
        You have the option of monthly or yearly billing.
      </p>
      <form onSubmit={handleSubmit(finishStage)}>
        <fieldset className='form-cards flex-row'>
          {pricesData.map(price => {
            return (
              <InputCard key={price[0]} type='radio' {...register('planSelected')} value={price[0]}>
                <CardContent title={price[0]} price={price[1]} isYearly={isYearly} />
              </InputCard>
            )
          })}
        </fieldset>

        <Toggle labelOff='Monthly' labelOn='Yearly' isYearly={isYearly} {...register('yearly')} />

        <section className='form-buttons'>
          <Button type='button' label='Go Back' onClick={goBack} />
          <Button type='submit' label='Next Step' primary />
        </section>
      </form>
    </section>
  )
}

export default SelectPlan
