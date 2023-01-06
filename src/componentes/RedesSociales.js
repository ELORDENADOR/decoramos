import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faWhatsapp,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';




const RedesSociales = () => {


  return (
    <ContenedorRedesSociales>

<div id='contenedorIconosRedesSociales'>
   
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
       <a href="https://api.whatsapp.com/send?phone=573162490767&text=Hola&nbsp;estoy&nbsp;interesado&nbsp;en&nbsp;un&nbsp;producto"  >
      
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






    </ContenedorRedesSociales>
  )
}

export default RedesSociales

const ContenedorRedesSociales = styled.div`

  
  text-align: center;



    .configuracionIconoRedSocial{
      font-size: 50px;
      color:#4CE19B;
      padding:2px;
      margin: 5px;
     
    }
    
    #contenedorIconosRedesSociales{
      position: fixed;      
      top: 25%;
      left: 1%; 
    }

  

    @media (max-width: 1200px) { 
    #contenedorIconosRedesSociales{
      display: none; 
    }
   
  }

    `