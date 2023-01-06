import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import img1 from "../../img/panelJaponesEnBlackout_1.png"
import img2 from "../../img/panelJaponesEnBlackout_2.png"
import img3 from "../../img/panelJaponesEnBlackout_3.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";







const PanelJaponesEnBlackout = () => {
 
const  arregloImagenes = [img1,img2,img3]



const [imgVisualizador1,setImgVisualizador1] = useState(arregloImagenes[0])
const [contadorVisualizador1,setContadorVisualizador1] = useState(1)
const [contadorVisualizadorAtras,setContadorVisualizadorAtras] = useState(contadorVisualizador1 - 1)






const [inicio,setInicio] = useState(false)
const [fin,setFin] = useState(false)





const adelanteVisualizador1 = () =>{ 
   
  if(contadorVisualizador1 <  arregloImagenes.length){
    setContadorVisualizador1(contadorVisualizador1 + 1)
    setImgVisualizador1(arregloImagenes[contadorVisualizador1])
    setContadorVisualizadorAtras(contadorVisualizador1 - 1)
    setFin(true)

  }else{
    setInicio(true)
  }
}


const atrasVisualizador1 = () =>{
  
  if(contadorVisualizadorAtras >=  0){
    setImgVisualizador1(arregloImagenes[contadorVisualizadorAtras])
    setContadorVisualizador1(contadorVisualizadorAtras + 1)
    setContadorVisualizadorAtras(contadorVisualizadorAtras - 1)
    setInicio(false)

  }    else{
    setFin(false)
 
  }


}

  return (
    <ContenedorPanelJaponesEnBlackout>

            


      <div>
          <p id='tituloPanelJaponesEnBlackout'>Panel Japones En Blackout</p>
      </div>

   <div>
        <img className='configuracionPanelJaponesEnBlackout'
            src={imgVisualizador1}
        />                             
   </div>





        





           {
  inicio ? 
  (
    <button className='configuracionBtnPanelJaponesEnBlackout_Inicio_2' onClick={adelanteVisualizador1} >
        <FontAwesomeIcon            
                         
                icon={faArrowRight}    
          />
   </button>
  ) 
  : 
  (
    <button className='configuracionBtnPanelJaponesEnBlackout_Inicio_1' onClick={adelanteVisualizador1} >
        <FontAwesomeIcon            
               
                icon={faArrowRight}    
          />
   </button>
  )
}
         
         


{
  fin ? 
  (
    <button className='configuracionBtnPanelJaponesEnBlackout_Fin_1'  onClick={atrasVisualizador1} >
         <FontAwesomeIcon            
                           
                  icon={faArrowLeft}    
          />
</button>
  )
  : 
  (
<button className='configuracionBtnPanelJaponesEnBlackout_Fin_2'  onClick={atrasVisualizador1} >
         <FontAwesomeIcon            
                     
                  icon={faArrowLeft}    
          />
</button>
  )
}














    </ContenedorPanelJaponesEnBlackout>
  )
}

export default PanelJaponesEnBlackout
const ContenedorPanelJaponesEnBlackout = styled.div`
 text-align:center;


#tituloPanelJaponesEnBlackout{
  color: black;
  font-size: 30px;
  font-family: 'Secular One', sans-serif;
 
}

.configuracionPanelJaponesEnBlackout{
  
    width: 350px;
    height: 350px;
    
}


.configuracionBtnPanelJaponesEnBlackout{
    width: 50px;
    height: 50px;
    font-size: 25px;
}










.configuracionBtnPanelJaponesEnBlackout_Inicio_1{
    width: 50px;
    height: 50px;
    font-size: 25px;
}

.configuracionBtnPanelJaponesEnBlackout_Inicio_2{
    width: 50px;
    height: 50px;
    font-size: 25px;
    opacity: 0.2;
}




.configuracionBtnPanelJaponesEnBlackout_Fin_1{
    width: 50px;
    height: 50px;
    font-size: 25px;
}


.configuracionBtnPanelJaponesEnBlackout_Fin_2{
    width: 50px;
    height: 50px;
    font-size: 25px;

    opacity: 0.2;
}











` 