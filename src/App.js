
import './App.css';
import Mensaje from './Mensaje.js'

const mensaje = () => {
  return <h1>Hola Mundo</h1>
}

const Description = () => {
  return <p>Esta es la App del Curso de fullstack bootcamp</p>
}


const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='de React' />
      <Description />
    </div>
  );
};
export default App;
