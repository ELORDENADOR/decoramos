import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import imgProductoPrincipal1 from "../img/covid1.png"
import imgProductoPrincipal2 from "../img/covid2.png"
import imgProductoPrincipal3 from "../img/covid3.png"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MediosDePago from './MediosDePago'

// import { useInView } from 'react-intersection-observer'


const ProductoPrincipal = () => {

    // const {ref, inView} = useInView({
    //     threshold: 0,
    //     delay: 1000,
    //     });




const [cambiarImg,setCambiarImg] = useState(imgProductoPrincipal1)


const FuncionCambiarImagenIzquierda = () =>{
    if(cambiarImg === imgProductoPrincipal1){
        setCambiarImg(imgProductoPrincipal2)
    }
    if(cambiarImg === imgProductoPrincipal2){
        setCambiarImg(imgProductoPrincipal3)
    }
    if(cambiarImg === imgProductoPrincipal3){
        setCambiarImg(imgProductoPrincipal1)
    }
}


const FuncionCambiarImagenDerecha = () =>{
    if(cambiarImg === imgProductoPrincipal3){
        setCambiarImg(imgProductoPrincipal2)
    }
    if(cambiarImg === imgProductoPrincipal2){
        setCambiarImg(imgProductoPrincipal1)
    }
    if(cambiarImg === imgProductoPrincipal1){
        setCambiarImg(imgProductoPrincipal3)
    }
}



  return (
    <ContenedorProductoPrincipal>
        
<div>
<p id='tituloProductoPricipal'>Producto Principal</p>
</div>



{/* 
<div ref={ref}>
 
 {
   inView ? 
   ( 
   "si"
   )
    : 
   (
    <div id='contenedorMediosDePagos_Inactivo'>
    <MediosDePago/>
    </div>
   )
 }
 </div> */}









<div>
<div id='contenedorProductoPrincipalSecundario' >

<img className='configuracionImgCovid'
src={cambiarImg}
/>       

<div id='configuracionBotonCambiarImagenIzquierda' onClick={() => FuncionCambiarImagenIzquierda()}>
   
<p className='configuracionEmoji' >
    <FontAwesomeIcon            
                    
            icon={faArrowLeft}    
     /> 
    
</p>
</div>


<div id='configuracionBotonCambiarImagenDerecha' onClick={() => FuncionCambiarImagenDerecha()}>

<p className='configuracionEmoji'>                              
     <FontAwesomeIcon            
                      
            icon={faArrowRight}    
     />               
</p>

</div>
</div>









</div>




<div id='contenedorProductoPrincipalSecundarioResponsive' >

<img className='configuracionImgCovid'
src={imgProductoPrincipal1}
/>       
<img className='configuracionImgCovid'
src={imgProductoPrincipal2}
/>      
<img className='configuracionImgCovid'
src={imgProductoPrincipal3}
/>      
</div>



    </ContenedorProductoPrincipal>
  )
}

export default ProductoPrincipal




const ContenedorProductoPrincipal = styled.div`

#contenedorProductoPrincipalSecundarioResponsive{
    display: none;
}

text-align: center;

#contenedorProductoPrincipalSecundario{
    position: relative;
}

.configuracionImgCovid{
    width: 90%; 
}


#configuracionBotonCambiarImagenIzquierda{    
  width: 50px;
  height: 50px; 
  position: absolute;
  top: 95%;
  left: 30%;
  margin: -25px 0 0 -25px; 
}

#configuracionBotonCambiarImagenIzquierda:hover{    
 
}


#configuracionBotonCambiarImagenDerecha{
  width: 50px;
  height: 50px; 
  position: absolute;
  top: 95%;
  left: 70%;
  margin: -25px 0 0 -25px;      
}

#configuracionBotonCambiarImagenDerecha:hover{
    
}


#tituloProductoPricipal{
   
font-size: 60px;
font-family: 'Secular One', sans-serif;
color:#4CE19B;
}


.configuracionEmoji{
    font-size: 50px;
    
}


@media (max-width: 800px) {
  
        #contenedorProductoPrincipalSecundario{
        display: none;    
        }

        #contenedorProductoPrincipalSecundarioResponsive{
        display: block;
}

#tituloProductoPricipal{
        font-size: 50px;
        }
  }




 




`