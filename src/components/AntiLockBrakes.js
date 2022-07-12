import React from 'react'
import askLogo from '../question.png'
import SetQuestionChatbot from './hooks/SetQuestionChatbot'
function AntiLockBrakes({formData,setFormData}) {
  const { SetQuestion } = SetQuestionChatbot();
  return (
<div className='anti-lock-brakes-container'>
<div>
    <label>Does your car has anti-lock brakes?
        </label>
        <img  src={askLogo}  className='ask-chatbot' alt='ask-chatbot' onClick={() => SetQuestion('anti-lock braking system')}/>
        </div>
        <select value={formData.AutiBrakeType} onChange={(event)=>setFormData({...formData, AutiBrakeType: event.target.value})}><option value="" >Please Select</option><option value="No">No</option><option  value="Yes">Yes</option><option value="dont-know">Don't Know</option></select>
    
      
      </div>
  )
}

export default AntiLockBrakes