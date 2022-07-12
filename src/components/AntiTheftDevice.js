import React from 'react'
import askLogo from '../question.png'
import SetQuestionChatbot from './hooks/SetQuestionChatbot'
//
function AntiTheftDevice({formData,setFormData}) {
  const { SetQuestion } = SetQuestionChatbot();
  return (
    <div className='antitheft-info-container'>
    <div > 
        What type of anti-theft device does your car have?
        <img  src={askLogo}  className='ask-chatbot'  onClick={() => SetQuestion('anti-theft device')}/>  
    </div>
        <select value={formData.AutoTheftDeviceType} onChange={(event)=>setFormData({...formData, AutoTheftDeviceType: event.target.value})}><option >Please Select</option><option code="20" value="No Device">No Device</option><option code="21" value="Alarm Only Or Active Disabling Device">Alarm Only Or Active Disabling Device</option><option code="23" value="Vehicle Recovery System Devices">Vehicle Recovery System Devices</option><option code="24" value="Veh Rec Sys &amp;/Or Alarm Or Active Device">Veh Rec Sys &amp;/Or Alarm Or Active Device</option><option code="25" value="Veh Rec Sys &amp; Passive Disabling Device">Veh Rec Sys &amp; Passive Disabling Device</option><option code="40" value="Passive Disabling Device">Passive Disabling Device</option></select>

    </div>
  );
}

export default AntiTheftDevice