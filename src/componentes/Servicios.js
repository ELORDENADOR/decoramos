import React from 'react'
import styled from 'styled-components'
import imgServicios from  "../img/servicios.png"

import { useInView } from 'react-intersection-observer'


const Servicios = () => {

  const {ref, inView} = useInView({
    threshold: 0,
    delay: 1000,
    });



  return (
    <ContenedorServicios>
    <div >
     <p id='tituloServicios'> Servicios   </p>         
    </div>
        


        <div  ref={ref}>          

        {
          inView ? 
          (
          <img  className='configuracionImgServicios_Activado'
            src={imgServicios}
          />

          ) 
          : 
          (
            <img  className='configuracionImgServicios_Desactivado'
            src={imgServicios}
          />
          )
        }

        </div>

    </ContenedorServicios>
  )
}

export default Servicios

const ContenedorServicios = styled.div`




text-align: center;


#tituloServicios{
  color: black;
 
  
  font-size: 60px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
}




@media (max-width: 800px) {

  #tituloServicios{ 
  font-size: 50px;
}
}


@media (max-width: 400px) {

#tituloServicios{ 

margin-top: 80px;
}
}



.configuracionImgServicios_Activado{
 width:95%; 
 opacity: 1;
 transition-duration: 6s;
}

.configuracionImgServicios_Desactivado{
 width: 95%; 
 opacity: 0;

 
}


`