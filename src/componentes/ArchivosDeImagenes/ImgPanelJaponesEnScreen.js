import React from 'react'
import styled from 'styled-components'
import imgPanelJaponesEnScreen_1 from "../../img/panelJaponesEnScreen_1.png"
import imgPanelJaponesEnScreen_2 from "../../img/panelJaponesEnScreen_2.png"
import imgPanelJaponesEnScreen_3 from "../../img/panelJaponesEnScreen_3.png"
import imgPanelJaponesEnScreen_4 from "../../img/panelJaponesEnScreen_4.png"
import imgPanelJaponesEnScreen_5 from "../../img/panelJaponesEnScreen_5.png"
import imgPanelJaponesEnScreen_6 from "../../img/panelJaponesEnScreen_6.png"
import imgPanelJaponesEnScreen_7 from "../../img/panelJaponesEnScreen_7.png"
import imgPanelJaponesEnScreen_8 from "../../img/panelJaponesEnScreen_8.png"
import imgPanelJaponesEnScreen_9 from "../../img/panelJaponesEnScreen_9.png"
import imgPanelJaponesEnScreen_10 from "../../img/panelJaponesEnScreen_10.png"
import imgPanelJaponesEnScreen_11 from "../../img/panelJaponesEnScreen_11.png"
import imgPanelJaponesEnScreen_12 from "../../img/panelJaponesEnScreen_12.png"


const ImgPanelJaponesEnScreen = () => {
  return (
    <ContenedorImgPanelJaponesEnScreen>
        


<div>
  <p  id='tituloImgPanelJaponesEnScreen' >Panel Japones En Screen</p>
</div>

<div id='contenedorPrimarioImgPanelesJaponesEnScreen'>

<div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_1}
        />
     
        </div> 

        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_2}
        />
   
        </div> 

        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_3}
        />
     
        </div> 

        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_4}
        />
 
        </div> 

        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_5}
        />

        </div> 

        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_6}
        />
  
        </div> 

        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_7}
        />

        </div> 

        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_8}
        />

        </div> 

        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_9}
        />

        </div> 

        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_10}
        />

        </div> 

        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_11}
        />

        </div> 
        <div className='contenedorSecundarioImgPanelesJaponesEnScreen'>
        <img className='configuracionImgPanelesJaponesEnScreen'
        src={imgPanelJaponesEnScreen_12}
        />

        </div> 

</div>


    </ContenedorImgPanelJaponesEnScreen>
  )
}

export default ImgPanelJaponesEnScreen
const ContenedorImgPanelJaponesEnScreen = styled.div`

text-align: center;


#contenedorPrimarioImgPanelesJaponesEnScreen{
  display: flex;
flex-wrap: wrap;
justify-content: center;
}



.contenedorSecundarioImgPanelesJaponesEnScreen{
  text-align: center;
}

.configuracionImgPanelesJaponesEnScreen{
  width: 600px;
  height: 600px;
  padding: 15px;  
  border-radius: 5%;   
}


.configuracionImgPanelesJaponesEnScreen:hover{
  border-bottom: solid #4CE19B;   
}



#tituloImgPanelJaponesEnScreen{
  color: black;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 60px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
}


@media (max-width: 800px) { 
  .configuracionImgPanelesJaponesEnScreen{
  width: 350px;
  height: 300px;
}
}


@media (max-width: 400px) { 
  
  #tituloImgPanelJaponesEnScreen{
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 50px;
 
}

}

`