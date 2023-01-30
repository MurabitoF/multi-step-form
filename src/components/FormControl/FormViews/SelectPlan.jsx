import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../Button'
import InputCard from '../../InputCard'
import CardContent from '../../InputCard/CardContent'
import Toggle from '../../Toggle'

const SelectPlan = ({ onSubmit, initialState, setStage }) => {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: initialState
  })

  const isYearly = watch('yearly')

  const goBack = () => {
    reset(initialState)
    setStage()
  }

  return (
    <section className='form-control'>
      <h1>Select your plan</h1>
      <p className='form-description'>
        You have the option of monthly or yearly billing.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='form-cards flex-row'>
          <InputCard type='radio' {...register('planSelected')} value='arcade'>
            <CardContent title='Arcade' price={{ monthly: 9, yearly: 90 }} isYearly={isYearly} />
          </InputCard>
          <InputCard type='radio' {...register('planSelected')} value='advanced'>
            <CardContent title='Advanced' price={{ monthly: 9, yearly: 90 }} isYearly={isYearly} />
          </InputCard>
          <InputCard type='radio' {...register('planSelected')} value='pro'>
            <CardContent title='Pro' price={{ monthly: 9, yearly: 90 }} isYearly={isYearly} />
          </InputCard>
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
