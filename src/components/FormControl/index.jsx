import React from 'react'
import Button from '../Button'
import TextInput from '../TextInput'
import './formControl.sass'

const FormControl = () => {
  return (
    <>
      <section className='form-control'>
        <h1>Personal info</h1>
        <p>
          Please provide your name, email address, and phone number.
        </p>
        <form>
          <TextInput
            label='Name'
            placeholder='e.g. Stephen King'
            name='name'
            value=''
          />
          <TextInput
            label='Email Address'
            placeholder='e.g. stephenking@lorem.com'
            name='email'
            value=''
          />
          <TextInput
            label='Phone Number'
            placeholder='e.g. +1 234 567 890'
            name='phoneNumber'
            value=''
          />
        </form>
      </section>

      <section className='form-buttons'>
        <Button label='Next Step' primary style={{ justifySelf: 'flex-end' }} />
      </section>
    </>
  )
}

export default FormControl
