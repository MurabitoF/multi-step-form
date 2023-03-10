import React, { useState } from 'react'
import AddOn from './FormViews/AddOn'
import Finished from './FormViews/Finished'
import PersonalInfo from './FormViews/PersonalInfo'
import SelectPlan from './FormViews/SelectPlan'
import Sumary from './FormViews/Sumary'
import './formControl.sass'

const initialState = {
  1: {
    name: '',
    emailAddress: '',
    phoneNumber: ''
  },
  2: {
    planSelected: 'arcade',
    price: 0,
    yearly: false
  },
  3: {
    onlineService: {
      selected: false,
      price: 0
    },
    largerStorage: {
      selected: false,
      price: 0
    },
    customizableProfile: {
      selected: false,
      price: 0
    }
  }
}

const FormControl = ({ stage, setStage, prices }) => {
  const [formData, setFormData] = useState(initialState)
  const [showFinishPanel, setShowFinishPanel] = useState(false)

  const handleSubmitStages = (data) => {
    formData[stage] = data
    setFormData(prev => ({ ...prev }))
    setStage(prev => (prev + 1))
  }

  const handleComplete = (data) => {
    const mappedFormData = {
      personalInfo: formData[1],
      plan: formData[2],
      addOns: formData[3],
      total: data
    }

    console.log('Sending data to api:', mappedFormData)

    setShowFinishPanel(true)
  }

  const initialStateForAddOns = () => ({
    onlineService: formData[3].onlineService.selected,
    largerStorage: formData[3].largerStorage.selected,
    customizableProfile: formData[3].customizableProfile.selected
  })

  if (stage === 4) {
    console.log(showFinishPanel)
    if (showFinishPanel) {
      return (
        <div className='form-control-container'>
          <Finished />
        </div>
      )
    }

    return (
      <div className='form-control-container'>
        <Sumary
          handleComplete={handleComplete}
          formData={formData}
          setStage={setStage}
          prices={prices}
        />
      </div>
    )
  }

  if (stage === 3) {
    return (
      <div className='form-control-container'>
        <AddOn
          onSubmit={handleSubmitStages}
          initialState={initialStateForAddOns()}
          setStage={() => setStage(prev => (prev - 1))}
          isYearly={formData[2].yearly}
          prices={prices.addOns}
        />
      </div>
    )
  }

  if (stage === 2) {
    return (
      <div className='form-control-container'>
        <SelectPlan
          onSubmit={handleSubmitStages}
          initialState={formData[2]}
          setStage={() => setStage(prev => (prev - 1))}
          prices={prices.plans}
        />
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
