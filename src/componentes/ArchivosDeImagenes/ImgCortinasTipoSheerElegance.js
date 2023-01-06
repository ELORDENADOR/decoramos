import React from 'react'
import styled from 'styled-components'
import imgCortinasTipoSherrElegance_1 from "../../img/cortinasTipoSheerElegance_1.png"
import imgCortinasTipoSherrElegance_2 from "../../img/cortinasTipoSheerElegance_2.png"
import imgCortinasTipoSherrElegance_3 from "../../img/cortinasTipoSheerElegance_3.png"



const ImgCortinasTipoSheerElegance = () => {

  
  return (
   <ContenedorImgCortinasTipoSheerElegance>




<div>
    <p  id='tituloImgCortinasTipoSheerElegance' >Cortinas Tipo Sheer Elegance</p>
</div>

<div id='contenedorPrimarioImgCortinasTipoSheerElegance'>


      <div id='ImgCortinasTipoSheerElegance_1'  className='contenedorSecundarioImgCortinasTipoSheerElegance'>
        <img className='configuracionImgCortinasTipoSheerElegance'
        src={imgCortinasTipoSherrElegance_1}

        
        />

      </div> 

      <div className='contenedorSecundarioImgCortinasTipoSheerElegance'>
        <img className='configuracionImgCortinasTipoSheerElegance'
        src={imgCortinasTipoSherrElegance_2}
        />

      </div> 

      <div className='contenedorSecundarioImgCortinasTipoSheerElegance'>
        <img className='configuracionImgCortinasTipoSheerElegance'
        src={imgCortinasTipoSherrElegance_3}
        />

      </div> 

      {/* <div   className='contenedorSecundarioImgCortinasTipoSheerElegance'>
        <img className='configuracionImgCortinasTipoSheerElegance'
        src={imgCortinasTipoSherrElegance_4}
        />
 
      </div>  */}

      
</div>


     
   </ContenedorImgCortinasTipoSheerElegance>     
  )
}

export default ImgCortinasTipoSheerElegance
const ContenedorImgCortinasTipoSheerElegance = styled.div`

text-align: center;

#contenedorPrimarioImgCortinasTipoSheerElegance{
display: flex;
flex-wrap: wrap;
justify-content: center;
}

.contenedorSecundarioImgCortinasTipoSheerElegance{
  text-align: center;
}

.configuracionImgCortinasTipoSheerElegance{
  width: 600px;
  height: 600px;
  padding: 15px;  
  border-radius: 5%;
}

.configuracionImgCortinasTipoSheerElegance:hover{
  border-bottom: solid #4CE19B;
}


#tituloImgCortinasTipoSheerElegance{
  color: black;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 60px;
  font-family: 'Secular One', sans-serif;
  color:#4CE19B;
}

@media (max-width: 800px) { 
  
  .configuracionImgCortinasTipoSheerElegance{
  width: 350px;
  height: 300px; 
}

}

@media (max-width: 400px) { 
  
  #tituloImgCortinasTipoSheerElegance{
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 50px;
 
}


}





`