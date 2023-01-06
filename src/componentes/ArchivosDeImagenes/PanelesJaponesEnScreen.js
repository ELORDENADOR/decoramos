import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import img1 from "../../img/panelJaponesEnScreen_1.png"
import img2 from "../../img/panelJaponesEnScreen_2.png"
import img3 from "../../img/panelJaponesEnScreen_3.png"
import img4 from "../../img/panelJaponesEnScreen_4.png"
import img5 from "../../img/panelJaponesEnScreen_5.png"
import img6 from "../../img/panelJaponesEnScreen_6.png"
import img7 from "../../img/panelJaponesEnScreen_7.png"
import img8 from "../../img/panelJaponesEnScreen_8.png"
import img9 from "../../img/panelJaponesEnScreen_9.png"
import img10 from "../../img/panelJaponesEnScreen_10.png"
import img11 from "../../img/panelJaponesEnScreen_11.png"
import img12 from "../../img/panelJaponesEnScreen_12.png"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const PanelesJaponesEnScreen = () => {
 
const  arregloImagenes = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]



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
    <ContenedorPanelesJaponesEnScreen>

            


      <div>
          <p id='tituloPanelesJaponesEnScreen'>Paneles Japones En Screen</p>
      </div>

   <div>
        <img className='configuracionPanelesJaponesEnScreen'
            src={imgVisualizador1}
        />                             
   </div>
        

        
        
  






          {
  inicio ? 
  (
    <button className='configuracionBtnPanelesJaponesEnScreen_Inicio_2' onClick={adelanteVisualizador1} >
        <FontAwesomeIcon            
                         
                icon={faArrowRight}    
          />
   </button>
  ) 
  : 
  (
    <button className='configuracionBtnPanelesJaponesEnScreen_Inicio_1' onClick={adelanteVisualizador1} >
        <FontAwesomeIcon            
               
                icon={faArrowRight}    
          />
   </button>
  )
}
         
         


{
  fin ? 
  (
    <button className='configuracionBtnPanelesJaponesEnScreen_Fin_1'  onClick={atrasVisualizador1} >
         <FontAwesomeIcon            
                           
                  icon={faArrowLeft}    
          />
</button>
  )
  : 
  (
<button className='configuracionBtnPanelesJaponesEnScreen_Fin_2'  onClick={atrasVisualizador1} >
         <FontAwesomeIcon            
                     
                  icon={faArrowLeft}    
          />
</button>
  )
}


















    </ContenedorPanelesJaponesEnScreen>
  )
}

export default PanelesJaponesEnScreen
const ContenedorPanelesJaponesEnScreen = styled.div`
 text-align:center;


#tituloPanelesJaponesEnScreen{
  color: black;
  font-size: 30px;
  font-family: 'Secular One', sans-serif;
 
}

.configuracionPanelesJaponesEnScreen{
  
    width: 350px;
    height: 350px;
}


.configuracionBtnPanelesJaponesEnScreen{
    width: 50px;
    height: 50px;
    font-size: 25px;
}













.configuracionBtnPanelesJaponesEnScreen_Inicio_1{
    width: 50px;
    height: 50px;
    font-size: 25px;
}

.configuracionBtnPanelesJaponesEnScreen_Inicio_2{
    width: 50px;
    height: 50px;
    font-size: 25px;
    opacity: 0.2;
}




.configuracionBtnPanelesJaponesEnScreen_Fin_1{
    width: 50px;
    height: 50px;
    font-size: 25px;
}


.configuracionBtnPanelesJaponesEnScreen_Fin_2{
    width: 50px;
    height: 50px;
    font-size: 25px;

    opacity: 0.2;
}















` 