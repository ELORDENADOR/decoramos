import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import imgBanner1 from "../img/banner1.png"
import imgBanner2 from "../img/banner2.png"
import imgBanner3 from "../img/banner3.png"
import imgBanner4 from "../img/banner4.png"


import { useInView } from 'react-intersection-observer'



import MediosDePago from './MediosDePago'
import RedesSociales from './RedesSociales'


const Banner = () => {

  const {ref, inView} = useInView({
    threshold: 1,
    delay: 500,
    });

  // const {ref2, inView2} = useInView({
  //   threshold: 1,
  //   delay: 1000,
  //   });



const [imgBannerVisto,setImgBannerVisto] = useState(imgBanner1)

const tiempoBanner = 5000;

useEffect(() => {    
   
if(imgBannerVisto === imgBanner1)
        setTimeout(() => {
            setImgBannerVisto(imgBanner2)    
}, tiempoBanner)

if(imgBannerVisto === imgBanner2)
        setTimeout(() => {
            setImgBannerVisto(imgBanner3)    
}, tiempoBanner)

if(imgBannerVisto === imgBanner3)
        setTimeout(() => {
            setImgBannerVisto(imgBanner4)    
}, tiempoBanner)

if(imgBannerVisto === imgBanner4)
        setTimeout(() => {
            setImgBannerVisto(imgBanner1)    
}, tiempoBanner)


},[imgBannerVisto]);


  return (
    <ContenedorBanner>






        <div id='contenedorSecundarioBanner'>

           <div id='tituloPagina'>
            <p className='configuracionTituloPagina'>DECORAMOS</p>
           </div>
 


           <div  id='contenedor_configuracionTituloPagina_Activado_Desactivado'  ref={ref}  >
 
 {
   inView ? 
   ( 
   <p className='configuracionTituloPagina_Activado'>DECORAMOS</p>
   )
    : 
   (
    <p className='configuracionTituloPagina_Desactivado'>DECORAMOS</p>
   )
 }
 </div>

       



 <div ref={ref}>
 
 {
   inView ? 
   ( 
   ""
   )
    : 
   (
  <div>
        <div id='contenedorMediosDePagos_Inactivo'>
          <MediosDePago/>
        </div>

         <div id='contenedorIconosRedesSociales'>       
            < RedesSociales/>        
        </div>
  </div>

   )
 }
 </div>
       
    <img className='configuracionImgBanner'
    src={imgBannerVisto}
    />

   </div>



    
    </ContenedorBanner>
  )
}

export default Banner
const ContenedorBanner = styled.div`

text-align: center;


#contenedorSecundarioBanner{
  position: relative;
}

#tituloPagina{
  position: absolute;
  font-size: 100px;
  color:#4CE19B;
  top: -47px;
  font-family: 'Secular One', sans-serif;  
  z-index: 10;
}

.configuracionImgBanner{  
     width: 100%;     
     filter: invert(0.2) sepia(1) hue-rotate(20deg) saturate(100%);
     z-index: 2;
    }

    .configuracionImgBanner:active{  
   filter: none;
    }

    #tituloPagina{  
  display: none;
}


@media (max-width: 1200px) {  
      #tituloPagina{  
  display: block;
}
  
#contenedor_configuracionTituloPagina_Activado_Desactivado{
  display: none;
}



}




@media (max-width: 1200px) {  
  #tituloPagina{  
    font-size: 70px;
    left: 120px;
}


.configuracionImgBanner{  
  width: 100%;
}
  
}


@media (max-width: 928px) { 
  #tituloPagina{ 
    font-size: 60px;
    left: 120px;
}
}


@media (max-width: 822px) { 
  #tituloPagina{     
  
    left: 100px;
}
  
}


@media (max-width: 549px) { 
  #tituloPagina{     
    font-size: 48px;
    left: 45px;
}
  
}



@media (max-width: 780px) { 
  #contenedorIconosRedesSociales{
    display: none;
  }
  
}


.configuracionTituloPagina{

 padding-left: 10px;
 padding-right: 10px;
 color:#34F5A6; 

}



 .configuracionTituloPagina_Activado{
  position: absolute;
  top:-60px;
  z-index: 4;
  left: 50px;
  font-size: 680%;
  font-family: 'Secular One', sans-serif; 
  color:#34F5A6;     
  transition-duration: 4s;
}

.configuracionTituloPagina_Desactivado{
  
  position: absolute;
  top: -60px;
  z-index: 4;
  left: 70px;
  font-size: 680%;
  font-family: 'Secular One', sans-serif; 
  transform: translateX(300px);  
  color:#34F5A6; 
  transition-duration: 4s;
}


#contenedorMediosDePagos_Inactivo{
    position: fixed;  
    top: 20%;
    left: 93%; 
} 

  




`