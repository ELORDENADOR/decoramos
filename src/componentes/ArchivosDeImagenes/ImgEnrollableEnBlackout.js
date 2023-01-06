import React from 'react'
import styled from 'styled-components'
import imgEnrollableEnBlackout_1 from "../../img/enrollableEnBlackout_1.png"
import imgEnrollableEnBlackout_2 from "../../img/enrollableEnBlackout_2.png"
import imgEnrollableEnBlackout_3 from "../../img/enrollableEnBlackout_3.png"
import imgEnrollableEnBlackout_4 from "../../img/enrollableEnBlackout_4.png"
import imgEnrollableEnBlackout_5 from "../../img/enrollableEnBlackout_5.png"
import imgEnrollableEnBlackout_6 from "../../img/enrollableEnBlackout_6.png"
import imgEnrollableEnBlackout_7 from "../../img/enrollableEnBlackout_7.png"
import imgEnrollableEnBlackout_8 from "../../img/enrollableEnBlackout_8.png"
import imgEnrollableEnBlackout_9 from "../../img/enrollableEnBlackout_9.png"
import imgEnrollableEnBlackout_10 from "../../img/enrollableEnBlackout_10.png"
import imgEnrollableEnBlackout_11 from "../../img/enrollableEnBlackout_11.png"






const ImgEnrollableEnBlackout = () => {
  return (
    <ContendorImgEnrollableEnBlackout>
        
        <div>
          <p  id='tituloImgEnrollableBackount' >Enrollable En Backount</p>
      </div>


    <div id='contenedorPrimarioImgEnrollableEnBlackout'>


    <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_1}
            />
      
            </div> 
                
            <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_2}
            />

            </div> 

            <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_3}
            />
     
            </div> 
            <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_4}
            />
      
            </div> 
            <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_5}
            />
   
            </div> 
            <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_6}
            />
 
            </div> 
            <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_7}
            />
       
            </div> 
            <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_8}
            />
       
            </div> 
            <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_9}
            />
   
            </div> 
            <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_10}
            />
     
            </div> 
            <div className='contenedorSecundarioImgEnrollableEnBlackout'>
            <img className='configuracionImgEnrollableEnBlackout'
            src={imgEnrollableEnBlackout_11}
            />
 
            </div> 

    </div>

          



    </ContendorImgEnrollableEnBlackout>
  )
}

export default ImgEnrollableEnBlackout
const ContendorImgEnrollableEnBlackout = styled.div`

text-align: center;


#contenedorPrimarioImgEnrollableEnBlackout{

display: flex;
flex-wrap: wrap;
justify-content: center;

}



.contenedorSecundarioImgEnrollableEnBlackout{
  text-align: center;
}

.configuracionImgEnrollableEnBlackout{
  width: 600px;
  height: 600px;
  padding: 15px;  
  border-radius: 5%;
}

.configuracionImgEnrollableEnBlackout:hover{
  border-bottom: solid #4CE19B;  
}

#tituloImgEnrollableBackount{
  color: black;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 60px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
}



@media (max-width: 800px) { 

  .configuracionImgEnrollableEnBlackout{
  width: 350px;
  height: 300px;

}

}



@media (max-width: 400px) { 
  
  #tituloImgEnrollableBackount{
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 50px;
 
}

}


`