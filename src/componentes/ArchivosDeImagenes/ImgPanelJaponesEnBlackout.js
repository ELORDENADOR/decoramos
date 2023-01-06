import React from 'react'
import styled from 'styled-components'
import imgpanelJaponesEnBlackout_1 from "../../img/panelJaponesEnBlackout_1.png"
import imgpanelJaponesEnBlackout_2 from "../../img/panelJaponesEnBlackout_2.png"
import imgpanelJaponesEnBlackout_3 from "../../img/panelJaponesEnBlackout_3.png"


const ImgPanelJaponesEnBlackout = () => {
  return (
    <ContenedorImgPanelJaponesEnBlackout>
        

<div>
<p  id='tituloImgPanelJaponesEnBlackout' >Panel Japones En Blackout</p>
</div>

<div id='contenedorPrimarioImgPanelJaponesEnBlackout'>
<div className='contenedorSecundarioImgPanelJaponesEnBlackout'>
        <img className='configuracionImgPanelJaponesEnBlackout'
        src={imgpanelJaponesEnBlackout_1}
        />
     
        </div> 

        <div className='contenedorSecundarioImgPanelJaponesEnBlackout'>
        <img className='configuracionImgPanelJaponesEnBlackout'
        src={imgpanelJaponesEnBlackout_2}
        />
 
        </div> 

        <div className='contenedorSecundarioImgPanelJaponesEnBlackout'>
        <img className='configuracionImgPanelJaponesEnBlackout'
        src={imgpanelJaponesEnBlackout_3}
        />
     
        </div> 

</div>


       

    </ContenedorImgPanelJaponesEnBlackout>
  )
}

export default ImgPanelJaponesEnBlackout
const ContenedorImgPanelJaponesEnBlackout = styled.div`

text-align: center;

#contenedorPrimarioImgPanelJaponesEnBlackout{
display: flex;
flex-wrap: wrap;
justify-content: center;
}


.contenedorSecundarioImgPanelJaponesEnBlackout{
  text-align: center;
}

.configuracionImgPanelJaponesEnBlackout{
  width: 600px;
  height: 600px;
  padding: 15px;  
  border-radius: 5%;  
}

.configuracionImgPanelJaponesEnBlackout:hover{
  border-bottom: solid #4CE19B; 
}


#tituloImgPanelJaponesEnBlackout{
  color: black;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 60px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
}


@media (max-width: 800px) { 
  .configuracionImgPanelJaponesEnBlackout{
  width: 350px;
  height: 300px;  
}

}


@media (max-width: 400px) { 
  
  #tituloImgPanelJaponesEnBlackout{
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 50px;
 
}

}
`