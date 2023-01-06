import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const Menu = () => {            
         
    const menu = {
      inicio: "Inicio",
      productos_Pricipal: "Productos Pricipal" ,
      quienes_Somos: "Quienes Somos",
      aliados_Estrategicos: "Aliados Estrategicos",
      productos_Y_Servicos: "Productos Y Servicos",
      contactanos: "Contactanos"
    }
 
  return (   
    <ContenedorMenu>           
             <div id='contenedorMenuSecundario'>
                <a href='#inicio' ><p className='configuracionOpcionMenu' >{menu.inicio}</p></a>      
                <a href='#ProductoPrincipal' ><p className='configuracionOpcionMenu'>{menu.productos_Pricipal}</p></a>
                <a href='#QuienesSomosYAliadosEstrategicos' ><p className='configuracionOpcionMenu'>{menu.quienes_Somos}</p></a>              
                <a href='#QuienesSomosYAliadosEstrategicos' ><p className='configuracionOpcionMenu'>{menu.aliados_Estrategicos}</p></a>
                <a href='#ProductosYServicios' ><p className='configuracionOpcionMenu'>{menu.productos_Y_Servicos}</p></a>
                <a href='#Contactanos' ><p className='configuracionOpcionMenu'>{menu.contactanos}</p></a>              
             </div>
    </ContenedorMenu>
  )
}

export default Menu

const ContenedorMenu = styled.div`


 #contenedorMenuSecundario{  
   display: flex;   
   background: #33FF80; 
   justify-content: center;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
 }

.configuracionOpcionMenu{
  color: red; 
  padding: 15px;
  z-index: 1;  
  color: white;
  font-size: 18px;
  font-family: 'Secular One', sans-serif; 
}


a{
  text-decoration: none;
}


@media (max-width: 1200px) { 
display: none;
}
`
