import React from 'react'
import styled from 'styled-components'
import AliadosEstrategicos from './AliadosEstrategicos'
import QuienesSomos from './QuienesSomos'


const QuienesSomosYAliadosEstrategicos = () => {
  return (
    <ContenedorQuienesSomosYAliadosEstrategicos>
  

      <div id='contenedorQuienesSomosYAliadosEstrategicosSecundario'>
          
            <div id='QuienesSomos'>
                  <QuienesSomos/>
            </div>

            <div id='AliadosEstrategicos'>
                 <AliadosEstrategicos/>
            </div>
     </div>

    </ContenedorQuienesSomosYAliadosEstrategicos>
  )
}

export default QuienesSomosYAliadosEstrategicos

const ContenedorQuienesSomosYAliadosEstrategicos = styled.div`

#contenedorQuienesSomosYAliadosEstrategicosSecundario{
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 width: 100%; 
}

#QuienesSomos{ 
    width: 600px;
    height: 700px; 
    padding-top: 50px;  

}

#AliadosEstrategicos{  
    width: 420px;
    height: 500px;
    padding-top: 50px;
    padding-bottom: 50px;  
   
}





@media (max-width: 400px) {  
    #QuienesSomos{    
       
      padding-top: 20px;    
  }

  #AliadosEstrategicos{     
    padding-top: 0px;
    padding-bottom: 0px;  
}



}




`