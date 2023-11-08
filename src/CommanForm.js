import React from 'react'
import SingupForm from './SingupForm'

function CommanForm() {
  return (
    <div className='comman-form-main'>
      <div className='comman-form-left'>
      <img src='./images/singup.png'></img>
      
      
      </div>
      <div className='comman-form-right'>{<SingupForm />}</div>
    </div>
  )
}

export default CommanForm
