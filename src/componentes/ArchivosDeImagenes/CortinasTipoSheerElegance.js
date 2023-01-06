import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import img1 from "../../img/cortinasTipoSheerElegance_1.png"
import img2 from "../../img/cortinasTipoSheerElegance_2.png"
import img3 from "../../img/cortinasTipoSheerElegance_3.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const CortinasTipoSheerElegance = () => {
 
const  arregloImagenes = [img1,img2,img3]

const [estado,setEstado] = useState(false)

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

  }   else{
    setFin(false)
 
  }

}

  return (
    <ContenedorCortinasTipoSheerElegance>            


      <div>
          <p id='tituloCortinasTipoSheerElegance'>Cortinas Tipo Sheer Elegance</p>
      </div>

   <div>
        {
          estado ? 
          (
"si"
          )
          :
          (
      <img className='configuracionImgCortinasTipoSheerElegance_False'
            src={imgVisualizador1}
        />  
          )
        }                           
   </div>
       



            

{
  inicio ? 
  (
    <button className='configuracionBtnCortinasTipoSheerElegance_Inicio_2' onClick={adelanteVisualizador1} >
        <FontAwesomeIcon            
                          
                icon={faArrowRight}    
          />
   </button>
  ) 
  : 
  (
    <button className='configuracionBtnCortinasTipoSheerElegance_Inicio_1' onClick={adelanteVisualizador1} >
        <FontAwesomeIcon            
                       
                icon={faArrowRight}    
          />
   </button>
  )
}
         
         


{
  fin ? 
  (
    <button className='configuracionBtnCortinasTipoSheerElegance_Fin_1'  onClick={atrasVisualizador1} >
         <FontAwesomeIcon            
                  
                  icon={faArrowLeft}    
          />
</button>
  )
  : 
  (
<button className='configuracionBtnCortinasTipoSheerElegance_Fin_2'  onClick={atrasVisualizador1} >
         <FontAwesomeIcon            
                    
                  icon={faArrowLeft}    
          />
</button>
  )
}




           

    </ContenedorCortinasTipoSheerElegance>
  )
}

export default CortinasTipoSheerElegance
const ContenedorCortinasTipoSheerElegance = styled.div`
 text-align:center;


#tituloCortinasTipoSheerElegance{
  color: black;
  font-size: 30px;
  font-family: 'Secular One', sans-serif; 
}

.configuracionImgCortinasTipoSheerElegance_False{  
    width: 350px;
    height: 350px;   
    /* opacity: 0.2; */
}









.configuracionBtnCortinasTipoSheerElegance_Inicio_1{
    width: 50px;
    height: 50px;
    font-size: 25px;
}

.configuracionBtnCortinasTipoSheerElegance_Inicio_2{
    width: 50px;
    height: 50px;
    font-size: 25px;
    opacity: 0.2;
}




.configuracionBtnCortinasTipoSheerElegance_Fin_1{
    width: 50px;
    height: 50px;
    font-size: 25px;
}


.configuracionBtnCortinasTipoSheerElegance_Fin_2{
    width: 50px;
    height: 50px;
    font-size: 25px;

    opacity: 0.2;
}





` 