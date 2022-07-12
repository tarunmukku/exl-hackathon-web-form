import React from 'react'
import askLogo from '../question.png'
import SetQuestionChatbot from './hooks/SetQuestionChatbot'
function VINInfo({formData,setFormData}) {
  const { SetQuestion } = SetQuestionChatbot();
  return (
    <div className='vin-info-container'>
          <div>
          Please provide VIN number of your vehicle?
          <img  src={askLogo}  className='ask-chatbot' alt='ask-chatbot' onClick={() => SetQuestion('what is VIN Number?')}/>
        </div> 
            <div>
           <input type="text" value={formData.autoVin}onChange={(event)=>setFormData({...formData,autoVin: event.target.value})}>
            </input>
            <img  src={askLogo}  className='ask-chatbot' alt='ask-chatbot' onClick={() => SetQuestion('where to find VIN Number?')}/> 
            </div> 
    </div>
  )
}

export default VINInfo