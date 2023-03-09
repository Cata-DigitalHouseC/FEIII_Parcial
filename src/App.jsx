import {useState} from 'react'
import  Card  from "./Card";

function App() {
  //Creacion de variables de componentes

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [colorUsuario, setColorUsuario] = useState("");

  const onChangeNombreUsuario = (e) => setNombreUsuario(e.target.value);
  const onChangeColorUsuario = (e) => setColorUsuario(e.target.value);

  //Funciones de validaciones
  //Funcion de primer input: Nombre de usuario
  const validarNombreUsuario = () => {
    const withoutSpaces= nombreUsuario.trim();
    return (withoutSpaces.length>2)?true:false;
  };

  //Funcion de segundo input: Color favorito
  const validarColorUsuario = () => {
    const withoutSpaces= colorUsuario.trim();
    return (withoutSpaces.length>5)?true:false;
  };


  //Funcion del resultado a enviar
  

  const onSubmitForm = (e) => {
    e.preventDefault();

    //Validar los campos
    const esNombreValido = validarNombreUsuario(nombreUsuario);
    const esColorValido = validarColorUsuario(colorUsuario);

    //Si una de las validaciones es falsa, mostrar un mensaje de error
    if(!esNombreValido || !esColorValido) {
      alert('Por favor chequea que la información sea correcta')
    } else {
      //Si ambas validaciones son verdaderas, mostrar el resultado
      alert('La información es correcta')
      {<Card nombreUsuario={nombreUsuario} colorUsuario={colorUsuario}/>}
    }
  }

  return (
    <div className='App'>
      <h1>Elige un color</h1>
      <form onSubmit={onSubmitForm}>
        <div>
        <input 
          type="text"
          placeholder="Nombre del Usuario"
          value={nombreUsuario}
          onChange={onChangeNombreUsuario}
        />
        </div>

        <div>
        <input
          type="text"
          placeholder="Color favorito"
          value={colorUsuario}
          onChange={onChangeColorUsuario}
        />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );

  }   
export default App;
