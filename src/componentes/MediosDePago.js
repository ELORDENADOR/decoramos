import React from 'react'
import styled from 'styled-components'

import medioDePago1 from "../img/tipoPago1.png"
import medioDePago2 from "../img/tipoPago2.png"
import medioDePago3 from "../img/tipoPago3.png"
import medioDePago4 from "../img/tipoPago4.png"



const MediosDePago = () => {


  
    
    
  return (
  <ContenedorMediosDePago>
          
          
 
 
     <div id='contenedorIconosDeTiposDePago'>
    <div>      
        <img className='configuracionImgTiposDePago'
        src={medioDePago1}
        />
    </div>
    <div>      
        <img className='configuracionImgTiposDePago'
        src={medioDePago2}
        />
    </div>
    <div>      
        <img className='configuracionImgTiposDePago'
        src={medioDePago3}
        />
    </div>
    <div>      
        <img className='configuracionImgTiposDePago'
        src={medioDePago4}
        />
    </div>            
</div>     
     
            



  </ContenedorMediosDePago>

    
  )
}

export default MediosDePago

const ContenedorMediosDePago = styled.div`




.configuracionImgTiposDePago{
    
    height: 55px;   
    margin: 10px; 
}





@media (max-width: 1200px) { 

#contenedorIconosDeTiposDePago{
    display: none;
}


}



@media (max-width: 400px) { 

    #contenedorIconosDeTiposDePagoSecundarioResponsive{
     display: block;
      
}


}





`