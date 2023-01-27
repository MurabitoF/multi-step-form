import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import Button from '../../Button'
import TextInput from '../../TextInput'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  emailAddress: Yup.string().email('Invalid email address').required('This field is required'),
  phoneNumber: Yup.string().required('This field is required')
}).required()

const PersonalInfo = ({ onSubmit, initialState }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialState,
    resolver: yupResolver(validationSchema)
  })

  return (
    <section className='form-control'>
      <h1>Personal info</h1>
      <p className='form-description'>
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label='Name'
          placeholder='e.g. Stephen King'
          name='name'
          {...register('name')}
          errors={errors.name}
        />
        <TextInput
          label='Email Address'
          placeholder='e.g. stephenking@lorem.com'
          name='emailAddress'
          {...register('emailAddress')}
          errors={errors.emailAddress}
        />
        <TextInput
          label='Phone Number'
          placeholder='e.g. +1 234 567 890'
          name='phoneNumber'
          {...register('phoneNumber')}
          errors={errors.phoneNumber}
        />
        <section className='form-buttons only-button'>
          <Button type='submit' label='Next Step' primary style={{ justifySelf: 'flex-end' }} />
        </section>
      </form>
    </section>
  )
}

export default PersonalInfo
