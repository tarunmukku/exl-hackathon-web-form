import React from 'react'
import submittedImage from '../green-check.jpg'
function SubmittedPage({formData,setFormData}) {
  return (

    <div>
        <div>
            
         <img  src={submittedImage}  className='submitted-image' alt='submitted'/>
        </div>
    </div>
  )
}

export default SubmittedPage