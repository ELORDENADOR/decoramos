import React from 'react'
import styled from 'styled-components'
import imgDireccion from "../img/direccion.png"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faWhatsapp,faInstagram} from "@fortawesome/free-brands-svg-icons";
// import { faCar } from "@fortawesome/free-solid-svg-icons";


import MediosDePago from './MediosDePago';
import Direccion from './Direccion';

import { useInView } from 'react-intersection-observer'

import medioDePago1 from "../img/tipoPago1.png"
import medioDePago2 from "../img/tipoPago2.png"
import medioDePago3 from "../img/tipoPago3.png"
import medioDePago4 from "../img/tipoPago4.png"


const funcionCarro = () =>{
  
  <a        
      href="https://www.linkedin.com/in/ricardo-gonzalez-ramirez-desarrollador-front-end/"
      >
      </a>
}



const Contactanos = () => {
  const {ref, inView} = useInView({
    threshold: 0,
    delay: 1000,
    });


  return (
    <ContenedorContactanos>

  

<div >
     <p id='tituloContactanos'> Contactenos   </p>         
    </div>

     <div  ref={ref}>          

{
  inView ? 
  (
  <img  className='configuracionImgDireccion_Activado'
    src={imgDireccion}
  />

  ) 
  : 
  (
    <img  className='configuracionImgDireccion_Desactivado'
    src={imgDireccion}
  />
  )
}

</div>



  <div id='contenedorIconosRedesSocialesResponsive'>
   
      <div>
         <a  href="https://www.facebook.com/profile.php?id=100054212164931"
         >
            <FontAwesomeIcon                    
                        className='configuracionIconoRedSocial'           
                        icon={faFacebook}  
             />
         </a>
       </div>
        
       <div> 
       <a href="https://api.whatsapp.com/send?phone=573162490767&text=Hola,&nbsp;estoy&nbsp;interesado&nbsp;en&nbsp;un&nbsp;producto"  >
      
          <FontAwesomeIcon                      
                      className='configuracionIconoRedSocial'                     
                      icon={faWhatsapp}                      
              />
        </a>
     </div>  
      


       <div>
          <a  href="https://www.instagram.com/decoramos_cartagena/" >
          <FontAwesomeIcon                            
                            className='configuracionIconoRedSocial'                 
                            icon={faInstagram}                            
                    />
          </a>
       </div>

  
    </div>



    <div>

    <Direccion/>
</div>




<div id='contenedorIconosDeTiposDePagoSecundarioResponsive'>

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







    </ContenedorContactanos>
  )
}

export default Contactanos

const ContenedorContactanos = styled.div`

#contenedorIconosDeTiposDePagoSecundarioResponsive{
  display: none;
}


#contenedorIconosRedesSocialesResponsive{
  display: none;
}


text-align: center;

.configuracionImgDireccion_Activado{
 width: 100%; 
 opacity: 1;
 transition-duration: 5s;
}


.configuracionImgDireccion_Desactivado{
  width: 100%; 
  opacity: 0;
}


#tituloContactanos{
  padding-top: 50px;
  font-size: 60px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
  
}



.configuracionIconoRedSocial{
  font-size: 70px;
  color:#4CE19B;
  padding:2px;
  margin: 5px;

}

@media (max-width: 800px) {
  #tituloContactanos{
  font-size: 50px;  
}
}


@media (max-width: 1200px) {

  #contenedorIconosRedesSocialesResponsive{
   display: block;
   display: flex;
  
  }


  #contenedorIconosDeTiposDePagoSecundarioResponsive{
    display: block;
   display: flex;
}


}



.configuracionImgTiposDePago{
    width: 90px;
    height: 90px;    
}




`