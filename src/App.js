import styled from 'styled-components'
import AliadosEstrategicos from './componentes/AliadosEstrategicos';
import Contactanos from './componentes/Contactanos';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';
import ProductoPrincipal from './componentes/ProductoPrincipal';
import ProductosYServicios from './componentes/ProductosYServicios';
import QuienesSomos from './componentes/QuienesSomos';
import QuienesSomosYAliadosEstrategicos from './componentes/QuienesSomosYAliadosEstrategicos';




function App() {

 


  return (
    <ContenedorApp>
         
       <div id='contenedorGrid'>

        
            <section id='inicio'>
                <Inicio/>
            </section>

            <section id='ProductoPrincipal'>
                <ProductoPrincipal/>

            </section>

            <section id='QuienesSomosYAliadosEstrategicos' >           

                <QuienesSomosYAliadosEstrategicos/>
                
            </section>

            <section id='ProductosYServicios'>
                <ProductosYServicios/>
            </section>

            <section id='Contactanos'>
               <Contactanos/>
            </section>

            <section id='footer'>
              <Footer/>
            </section>
       </div>

    </ContenedorApp>
  );
}

export default App;
const ContenedorApp = styled.div`

#contenedorGrid {
  display: grid;
  grid-template-areas:    
    "inicio inicio"
    "ProductoPrincipal ProductoPrincipal"
    "QuienesSomosYAliadosEstrategicos QuienesSomosYAliadosEstrategicos"
    "ProductosYServicios ProductosYServicios"
    "Contactanos Contactanos"
    "footer footer";

  grid-template-rows:auto auto auto auto auto auto;
  grid-auto-columns: 1fr 1fr;
  grid-gap: 0px;

  
 
  padding-left: 110px;
  padding-right: 110px;
}




#inicio {
  
  grid-area: inicio;
  
}

#ProductoPrincipal {
 
  grid-area: ProductoPrincipal;
  
}

#QuienesSomosYAliadosEstrategicos {
  
  grid-area: QuienesSomosYAliadosEstrategicos;
}

#ProductosYServicios {
  
  grid-area: ProductosYServicios;
}

#Contactanos {
  
  grid-area: Contactanos;
}

#footer {
 
  grid-area: footer;
}


@media (max-width: 1200px) {

  #contenedorGrid {
  padding-left: 0px;
  padding-right: 0px;
}


}






`
