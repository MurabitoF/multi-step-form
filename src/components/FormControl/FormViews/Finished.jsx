import React from 'react'

const Finished = () => {
  return (
    <section className='form-control centered finish-container'>
      <img src='src/assets/icon-thank-you.svg' alt='Thank you icon' className='finish-icon' />
      <h1 className='finish-title'>Thank you!</h1>
      <p className='finish-text'>
        Thanks for confirming your suscription!
        We hope you have fun using our platform.
        If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  )
}

export default Finished
