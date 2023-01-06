import React from 'react'
import styled from 'styled-components'
import imgEnrollableEnScreen_1 from "../../img/enrollableEnScreen_1.png"
import imgEnrollableEnScreen_2 from "../../img/enrollableEnScreen_2.png"
import imgEnrollableEnScreen_3 from "../../img/enrollableEnScreen_3.png"
import imgEnrollableEnScreen_4 from "../../img/enrollableEnScreen_4.png"
import imgEnrollableEnScreen_5 from "../../img/enrollableEnScreen_5.png"
import imgEnrollableEnScreen_6 from "../../img/enrollableEnScreen_6.png"
import imgEnrollableEnScreen_7 from "../../img/enrollableEnScreen_7.png"
import imgEnrollableEnScreen_8 from "../../img/enrollableEnScreen_8.png"
import imgEnrollableEnScreen_9 from "../../img/enrollableEnScreen_9.png"
import imgEnrollableEnScreen_10 from "../../img/enrollableEnScreen_10.png"
import imgEnrollableEnScreen_11 from "../../img/enrollableEnScreen_11.png"
import imgEnrollableEnScreen_12 from "../../img/enrollableEnScreen_12.png"
import imgEnrollableEnScreen_13 from "../../img/enrollableEnScreen_13.png"
import imgEnrollableEnScreen_14 from "../../img/enrollableEnScreen_14.png"




const ImgEnrollableEnScreen = () => {
  return (
    <ContendorImgEnrollableEnScreen>

<div>
    <p  id='tituloImgEnrollableEnScreen' >Enrollable En Screen</p>
</div>

<div id='ContenedorPrincipalImgEnrollableEnScreen'>
  
<div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_1}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_2}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_3}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_4}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_5}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_6}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_7}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_8}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_9}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_10}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_11}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_12}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_13}
        />
        </div> 
        
        <div className='contenedorSecundarioImgEnrollableEnScreen'>
        <img className='configuracionImgEnrollableEnScreen'
        src={imgEnrollableEnScreen_14}
        />
        </div> 
</div>
        

    </ContendorImgEnrollableEnScreen>
  )
}

export default ImgEnrollableEnScreen
const ContendorImgEnrollableEnScreen = styled.div`
text-align: center;


#ContenedorPrincipalImgEnrollableEnScreen{
display: flex;
flex-wrap: wrap;
justify-content: center;
}


.contenedorSecundarioImgEnrollableEnScreen{
  text-align: center;
}

.configuracionImgEnrollableEnScreen{
  width: 600px;
  height: 600px;
  padding: 15px;  
  border-radius: 5%;
}
.configuracionImgEnrollableEnScreen:hover{
  border-bottom: solid #4CE19B; 
}


#tituloImgEnrollableEnScreen{
  color: black;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 60px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
}




@media (max-width: 800px) { 
  .configuracionImgEnrollableEnScreen{
  width: 350px;
  height: 300px;
}

}



@media (max-width: 400px) { 
  
  #tituloImgEnrollableEnScreen{
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 50px;
 
}

}

`