import React from 'react'
import styled from 'styled-components'

import imgCortinasTipoSherrElegance_1 from "../img/cortinasTipoSheerElegance_1.png"
import imgPanelJaponesEnBlackout_1 from "../img/panelJaponesEnBlackout_1.png"
import imgPanelJaponesEnScreen_1 from "../img/panelJaponesEnScreen_1.png"
import imgEnrollableEnBlackout_1 from "../img/enrollableEnBlackout_1.png"

import imgEnrollableEnScreen_1 from "../img/enrollableEnScreen_1.png"



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import ImgCortinasTipoSheerElegance from './ArchivosDeImagenes/ImgCortinasTipoSheerElegance';
import ImgPanelJaponesEnBlackout from './ArchivosDeImagenes/ImgPanelJaponesEnBlackout'
import ImgPanelJaponesEnScreen from './ArchivosDeImagenes/ImgPanelJaponesEnScreen'
import ImgEnrollableEnBlackout from './ArchivosDeImagenes/ImgEnrollableEnBlackout'
import ImgEnrollableEnScreen from './ArchivosDeImagenes/ImgEnrollableEnScreen'
import CortinasTipoSheerElegance from './ArchivosDeImagenes/CortinasTipoSheerElegance'
import EnrollableEnBlackout from './ArchivosDeImagenes/EnrollableEnBlackout'
import EnrollableEnScreen from './ArchivosDeImagenes/EnrollableEnScreen'
import PanelJaponesEnBlackout from './ArchivosDeImagenes/PanelJaponesEnBlackout'
import PanelesJaponesEnScreen from './ArchivosDeImagenes/PanelesJaponesEnScreen'


const Productos = () => {

const [seleccionarImg,setSeleccionarImg] = useState(0);


const seleccionarEstaGaleria = (seleccion) =>{
  setSeleccionarImg(seleccion)
}

  return (
    <ContenedorProductos>
       
<div>
  <p id='tituloProductos'  >Productos</p>
</div>

<div id='ContenedorSecundarioProductos'>
    
    <div id='contenedorImg' >
      <img className='configuracionImg'
          src={imgCortinasTipoSherrElegance_1}
          onClick={() => seleccionarEstaGaleria(1)}
      />
      <p className='configuracionTexto'>Cortinas Tipo Sheer Elegance</p> 
    </div>                
   
    <div id='contenedorImg' >
      <img className='configuracionImg'
          src={imgPanelJaponesEnBlackout_1}
          onClick={() => seleccionarEstaGaleria(2)}
      />
      <p className='configuracionTexto'>Panel Japones En Blackout</p> 
    </div>  

    <div id='contenedorImg' >
      <img className='configuracionImg'
          src={imgPanelJaponesEnScreen_1}
          onClick={() => seleccionarEstaGaleria(3)}
      />
      <p className='configuracionTexto'>Panel Japones En Screen</p> 
    </div>  


    <div id='contenedorImg' >
      <img className='configuracionImg'
          src={imgEnrollableEnScreen_1}
          onClick={() => seleccionarEstaGaleria(4)}
      />
      <p className='configuracionTexto'>Enrollable en Screen</p> 
    </div> 

    <div id='contenedorImg' >
      <img className='configuracionImg'
          src={imgEnrollableEnBlackout_1}
          onClick={() => seleccionarEstaGaleria(5)}
      />
      <p className='configuracionTexto'>Enrollable en Blackout</p> 
    </div> 


</div>
                        
       <div id='ContenedorGaleriaInicial'>
       {
         seleccionarImg === 1 ? 
         (<ImgCortinasTipoSheerElegance/>)   
         :   
         seleccionarImg === 2 ? 
         (<ImgPanelJaponesEnBlackout/>)   
         :   
         seleccionarImg === 3 ? 
         (<ImgPanelJaponesEnScreen/>)   
         :   
         seleccionarImg === 4 ? 
         (<ImgEnrollableEnScreen/>)   
         :   
         seleccionarImg === 5 ? 
         (<ImgEnrollableEnBlackout/>)   
         :   
         ("")
        }
       </div>

      <div id='ContenedorGaleriaResponsive1600'>
                          
        <CortinasTipoSheerElegance/>
        <EnrollableEnBlackout/>
        <EnrollableEnScreen/>
        <PanelJaponesEnBlackout/>
        <PanelesJaponesEnScreen/>

      </div>

    </ContenedorProductos>
  )
}

export default Productos

const ContenedorProductos = styled.div`
#ContenedorGaleriaResponsive1600{
  display: none;
}

text-align: center;

#ContenedorSecundarioProductos{
text-align: center;
display: flex;
flex-wrap: wrap;
justify-content: center;
}


.configuracionImg{
  width: 200px;
  height: 200px;  
  padding-left: 5px;  
}

.configuracionTexto{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 20px;
}



#tituloProductos{
  color: black;
  padding-top: 50px;
  padding-bottom: 50px;

  font-size: 60px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
}


@media (max-width: 800px) {
  #tituloProductos{
  font-size: 50px; 
}
}


@media (max-width: 400px) {


#tituloProductos{
padding-top: 0px;
padding-bottom: 0px;
}
}

@media (max-width: 1200px) { 

  #ContenedorSecundarioProductos{
    display: none;
  }

  #ContenedorGaleriaInicial{
    display: none;
  }

  #ContenedorGaleriaResponsive1600{
    display: block;
  }

}

`