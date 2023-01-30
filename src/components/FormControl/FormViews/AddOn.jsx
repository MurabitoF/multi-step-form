import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../Button'
import InputCard from '../../InputCard'
import CardContent from '../../InputCard/CardContent'

const AddOn = ({ onSubmit, initialState, setStage, isYearly }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialState
  })

  const goBack = () => {
    reset(initialState)
    setStage()
  }

  return (
    <section className='form-control'>
      <h1>Pick add-ons</h1>
      <p className='form-description'>
        Add-ons help enhance your gaming experience.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='form-cards'>
          <InputCard type='checkbox' {...register('onlineService')}>
            <CardContent
              title='Online service'
              price={{ monthly: 1, yearly: 10 }}
              description='Access to multiplayer games'
              isYearly={isYearly}
            />
          </InputCard>
          <InputCard type='checkbox' {...register('largerStorage')}>
            <CardContent
              title='Larger storage'
              price={{ monthly: 2, yearly: 20 }}
              description='Extra 1TB of cloud save'
              isYearly={isYearly}
            />
          </InputCard>
          <InputCard type='checkbox' {...register('customizableProfile')}>
            <CardContent
              title='Customizable profile'
              price={{ monthly: 2, yearly: 20 }}
              description='Custom theme on your profile'
              isYearly={isYearly}
            />
          </InputCard>
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
