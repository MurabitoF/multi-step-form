import React, { useState } from 'react'
import AddOn from './FormViews/AddOn'
import PersonalInfo from './FormViews/PersonalInfo'
import SelectPlan from './FormViews/SelectPlan'
import './formControl.sass'

const initialState = {
  1: {
    name: '',
    emailAddress: '',
    phoneNumber: ''
  },
  2: {
    planSelected: 'arcade',
    yearly: false
  },
  3: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  }
}

const FormControl = ({ stage, setStage }) => {
  const [formData, setFormData] = useState(initialState)

  const handleSubmitStages = (data) => {
    formData[stage] = data
    setFormData(prev => ({ ...prev }))
    setStage(prev => (prev + 1))
  }
  console.log(formData)

  if (stage === 3) {
    return (
      <div className='form-control-container'>
        <AddOn onSubmit={handleSubmitStages} initialState={formData[3]} setStage={() => setStage(prev => (prev - 1))} isYearly={formData[2].yearly} />
      </div>
    )
  }

  if (stage === 2) {
    return (
      <div className='form-control-container'>
        <SelectPlan onSubmit={handleSubmitStages} initialState={formData[2]} setStage={() => setStage(prev => (prev - 1))} />
      </div>
    )
  }

  return (
    <div className='form-control-container'>
      <PersonalInfo onSubmit={handleSubmitStages} initialState={formData[1]} />
    </div>
  )
}

export default FormControl
