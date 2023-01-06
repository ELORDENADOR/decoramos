import React from 'react'
import styled from 'styled-components'

const Direccion = () => {
  return (
    <ContenedorDireccion>
        <div>
            <p className='configuracionDireccion'>
               Crespo Av Santander Calle 63 # 1-05 piso 2,
               6583272,
               3162490767, 3013835099,
               decoramos_cartagena@yahoo.es
            </p>
        </div>
    </ContenedorDireccion>
  )
}

export default Direccion

const ContenedorDireccion = styled.div`

.configuracionDireccion{
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 30px;   
}


@media (max-width: 560px) { 
  .configuracionDireccion{    
    font-size: 20px;   
}

  
}



`