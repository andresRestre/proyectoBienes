import './App.css';
import React from 'react';

function App(props) {

function aumentar(){
  setContador(contador + 1)
}

return(
<div style={{backgroundColor:props.colorFondo}}>
  <h1 style={{color:props.colorTexto}}>Contador: {contador}</h1>
  <button onClick={aumentar}>Incrementar</button>
</div>

)

}
export default App