import React from 'react'
import imgAliadosEstrategicos from "../img/aliadosEstrategicos.png"
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'


const AliadosEstrategicos = () => {
  const {ref, inView} = useInView({
    threshold: 1,
    delay: 1000,
    });




  return (


    <ContenedorAliadosEstrategicos>
    
     <div id='y' ref={ref}>
 
 {
   inView ? 
   ( 
   <p id='tituloAliadosEstrategicos_Activado'>Aliados</p>
   )
    : 
   (
    <p id='tituloAliadosEstrategicos_Deactivado'>Aliados</p>
   )
 }
 </div>







<div>
   <img id='configuracionImgAliadosEstrategicos'
   src={imgAliadosEstrategicos}
     />
</div>

    </ContenedorAliadosEstrategicos>
  )
}

export default AliadosEstrategicos

const ContenedorAliadosEstrategicos = styled.div`

text-align: center;



#configuracionImgAliadosEstrategicos{
  width: 300px;
  height: 320px;
}



#tituloAliadosEstrategicos_Activado{ 
  font-size: 50px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
  padding-top: 100px;
}

#tituloAliadosEstrategicos_Deactivado{   
  font-size: 50px;
  color:#4CE19B;
  font-family: 'Secular One', sans-serif;
  padding-top: 100px;
}



@media (min-width: 1000px) { 

  #tituloAliadosEstrategicos_Activado{ 
  font-size: 50px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
  transition-duration: 4s;
}

#tituloAliadosEstrategicos_Deactivado{  
  font-family: 'Secular One', sans-serif; 
  transform: translateX(100px);
  color:#4CE19B;
  transition-duration: 4s;
}

}



@media (max-width: 1600px) { 

  #tituloAliadosEstrategicos{ 
 font-size: 50px;

}

}



@media (max-width: 400px) { 

  #tituloAliadosEstrategicos_Activado{ 
    padding-top: 0px;
}

#tituloAliadosEstrategicos_Deactivado{  
  padding-top: 0px;
}


}






`

