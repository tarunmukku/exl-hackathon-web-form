import React,{useState}  from 'react'
import AutoMobileInfo from './AutoMobileInfo'
import VINInfo from './VINInfo'
import AntiLockBrakes from './AntiLockBrakes'
import AntiTheftDevice from './AntiTheftDevice'
import SubmittedPage from './SubmittedPage'
import SetQuestionChatbot from './hooks/SetQuestionChatbot'

function Form() {
    const { SetQuestion } = SetQuestionChatbot();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        autoYear :2000,
        autoMake :"",
        autoVin: "",
        AutiBrakeType:"",
        AutoTheftDeviceType:"",
    });
    const FormTitles =  ["Automobile Informarmation","VIN Information","Anti-Lock Brakes","Anti-Theft Device"];
    const PageDisplay  = () => {
        if (page === 0 ) {
            return <AutoMobileInfo formData={formData} setFormData={setFormData} />;
        }
        else if (page === 3 ) {
            return <VINInfo formData={formData} setFormData={setFormData} />;
        }

        else if (page === 2 ) {
            return <AntiLockBrakes formData={formData} setFormData={setFormData}  />;
        }

        else if (page === 1 ) {
            return <AntiTheftDevice formData={formData} setFormData={setFormData} />;
        }
        else if (page === FormTitles.length ) {
            return <SubmittedPage formData={formData} setFormData={setFormData} />;
        }

    }
  return (
    <div className='from'>
        <div className='progressbar'>
 
            <div style={{width: Math.min((((page+1)/FormTitles.length)*100),100) + '%'}}></div>
        </div>
        <div className='form-container'>
            <div className='header'>
            <h1>{FormTitles[page]}</h1>
            </div>
            <div className='body'>{PageDisplay()}</div>
            <div className='footer'>
                <button 
                disabled={page === 0 }
                onClick ={()=>{setPage((currPage)=>currPage - 1);}}>Previous</button>
                <button 
                className={page === FormTitles.length ? '.hidden-button':''}
                onClick ={()=>{
                    if (page === FormTitles.length-1){
                        setPage((currPage)=>currPage+1);
                        SetQuestion('application submitted')
                        
                    }
                    else{setPage((currPage)=>currPage+1);}
                    
                    
                    }}
                    disabled = {page === FormTitles.length}
                    >
                    {page >> FormTitles.length -2 ? "Submit":"Next"}
                    
                    </button>
            </div>

        </div>
    </div>
  )
}

export default Form