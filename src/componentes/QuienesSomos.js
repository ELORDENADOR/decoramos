import React from 'react'
import styled from 'styled-components'

import { useInView } from 'react-intersection-observer'



const QuienesSomos = () => {
  const {ref, inView} = useInView({
    threshold: 1,
    delay: 1000,
    });

  return (
    

<ContenedorQuienesSomos>

   <div id='x'  ref={ref}>
 
   {
     inView ? 
     ( 
     <p id='tituloQuienesSomos_Activado'>Quienes Somos</p>
     )
      : 
     (
      <p id='tituloQuienesSomos_Deactivado'>Quienes Somos</p>
     )
   }
   </div>



<div id='contenedorTextoQuienesSomos'>
        

<p id='configuracionTextoQuienesSomos'>
<strong>Decoramos</strong> es una empresa con más de 38 años de experiencia
en el mercado, por eso sabemos cuándo hablamos de decoración
para tu hogar o tu trabajo, acondicionamos cualquier espacio
donde la armonía y la calidad quieran hacer presencia. 
Contamos con un amplio surtido de productos como: Persianas, Cortinas, 
 Toldos, Sombrillas, Tapetes, Puertas, Películas
de protección solar,Telas y un sin fin de materiales que harán 
de tu espacio el mas comodo y hermoso.

</p>

    </div>
</ContenedorQuienesSomos>


  )
}

export default QuienesSomos

const ContenedorQuienesSomos = styled.div`
  text-align: center;
  


#configuracionTextoQuienesSomos{
  font-size: 30px;
  text-align: justify;
  font-family: 'Barlow Condensed', sans-serif;
  padding-top: 0px;
  padding-right: 25px;   
  
}


#tituloQuienesSomos_Activado{
  font-size: 50px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;   
  padding-top: 100px;
  
}
#tituloQuienesSomos_Deactivado{
  font-size: 50px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;   
  padding-top: 100px;
}





@media (min-width: 1000px) { 

  #tituloQuienesSomos_Activado{
  font-size: 50px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
  transition-duration: 4s;
   
}

#tituloQuienesSomos_Deactivado{
  
  transform: translateX(-150px);
  color:#4CE19B;
  transition-duration: 4s;
}


}





@media (max-width: 800px) { 
  #tituloQuienesSomos{
    font-size: 50px;  
    padding-top: 50px;
}


#configuracionTextoQuienesSomos{
    padding-left:20px;
    padding-right: 20px;  
 
}


}




@media (max-width: 400px) { 

#configuracionTextoQuienesSomos{
  font-size: 28px;
  padding-left: 10px;
  padding-right: 10px; 
}


 #tituloQuienesSomos_Activado{
    
  padding-top: 0px;

}
#tituloQuienesSomos_Deactivado{
 
  padding-top: 0px;
}

#configuracionTextoQuienesSomos{
   
  padding-top: 0px;
} 






}












`