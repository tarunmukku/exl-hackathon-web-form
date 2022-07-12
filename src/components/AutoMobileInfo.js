import React from 'react'

function AutoMobileInfo({formData,setFormData}) {
    var getYearDropList = () => {
        const year = new Date().getFullYear();
        return (
            Array.from(new Array(50), (v, i) =>
                <option key={i} value={year - i}>{year - i}</option>
            )
        );
    };

    return (
        <div className='automobile-info-container'>
            
            
                    
                Please provide the details of your vehicle:
                    
                <div className='select-label' >
                    <label className='select-text-label' >
                    Year 
                    </label>   
                    <select  value={formData.autoYear} onChange={(event)=>setFormData({...formData,autoYear: event.target.value})}>
                        {getYearDropList()}
                    </select>
                </div>

            
                <div className='select-label'> 
                    <label className='select-text-label'>
                    Make 
                    </label>    
                    <select value={formData.autoMake} onChange={(event)=>setFormData({...formData,autoMake: event.target.value})}>
                        <option >Please Select</option><option code="ACURA" value="Acura">Acura</option><option code="A ROMEO" value="Alfa Romeo">Alfa Romeo</option><option code="A MARTIN" value="Aston Martin">Aston Martin</option><option code="AUDI" value="Audi">Audi</option><option code="BENTLEY" value="Bentley">Bentley</option><option code="BMW" value="BMW">BMW</option><option code="BUICK" value="Buick">Buick</option><option code="CAD" value="Cadillac">Cadillac</option><option code="CHEV" value="Chevrolet">Chevrolet</option><option code="CHRY" value="Chrysler">Chrysler</option><option code="DODGE" value="Dodge">Dodge</option><option code="FERR" value="Ferrari">Ferrari</option><option code="FIAT" value="Fiat">Fiat</option><option code="FORD" value="Ford">Ford</option><option code="GENESIS" value="Genesis">Genesis</option><option code="GMC" value="GMC">GMC</option><option code="HONDA" value="Honda">Honda</option><option code="HYUNDAI" value="Hyundai">Hyundai</option><option code="INFI" value="Infiniti">Infiniti</option><option code="JAGUAR" value="Jaguar">Jaguar</option><option code="JEEP" value="Jeep">Jeep</option><option code="KIA" value="Kia">Kia</option><option code="LAMBORGHIN" value="Lamborghini">Lamborghini</option><option code="L ROVER" value="Land Rover">Land Rover</option><option code="LEXS" value="Lexus">Lexus</option><option code="LINC" value="Lincoln">Lincoln</option><option code="LOTUS" value="Lotus">Lotus</option><option code="MASS" value="Maserati">Maserati</option><option code="MAZDA" value="Mazda">Mazda</option><option code="MCLAREN" value="McLaren">McLaren</option><option code="M BENZ" value="Mercedes Benz">Mercedes Benz</option><option code="MINI" value="Mini">Mini</option><option code="MTSBSHI" value="Mitsubishi">Mitsubishi</option><option code="NISSAN" value="Nissan">Nissan</option><option code="PORSCHE" value="Porsche">Porsche</option><option code="RAM" value="Ram">Ram</option><option code="R ROYCE" value="Rolls Royce">Rolls Royce</option><option code="SCION" value="Scion">Scion</option><option code="SMART" value="Smart">Smart</option><option code="SUBARU" value="Subaru">Subaru</option><option code="TESLA" value="Tesla">Tesla</option><option code="TOYOTA" value="Toyota">Toyota</option><option code="VOLKS" value="Volkswagen">Volkswagen</option><option code="VOLVO" value="Volvo">Volvo</option>
                    </select>
                </div>

        </div >
  )
}



export default AutoMobileInfo