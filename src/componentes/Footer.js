import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <ContenedorFooter>       

        <p className='firma'>
            Desarrollado por <strong>Ricardo Gonzalez Ramirez</strong> © 2022
        </p>
    </ContenedorFooter>
  )
}

export default Footer
const ContenedorFooter = styled.div`
 background: #4CE19B;

 
.firma{
text-align: end;
padding-top: 20px;
padding-bottom: 20px;
padding-right: 5px;
font-size: 25px;
font-family: 'Barlow Condensed', sans-serif;
}


@media (max-width: 800px) {  
  .firma{
    text-align: center;
    font-size: 20px;    
}
}





`