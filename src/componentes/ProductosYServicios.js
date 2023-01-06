import React from 'react'
import styled from 'styled-components'
import CortinasTipoSheerElegance from './ArchivosDeImagenes/CortinasTipoSheerElegance'
import EnrollableEnBlackout from './ArchivosDeImagenes/EnrollableEnBlackout'
import Productos from './Productos'
import Servicios from './Servicios'


const ProductosYServicios = () => {
  return (
    <ContenedorProductosYServicios>
      
 
          <div id='contenedorProductosYServicios'>
                <div id='contenedorServicios'>
                     
                    <Servicios/>
                </div>

                <div id='contenedorProductos'>
                      <Productos/>                   
                      
                </div>
          </div>

    </ContenedorProductosYServicios>
  )
}

export default ProductosYServicios

const ContenedorProductosYServicios = styled.div`

#contenedorProductosYServicios{
    display: block;
   
}




`