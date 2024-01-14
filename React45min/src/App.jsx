import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Hola REACT</h1>
      <div className='container'>
        <Card title="Título" 
        description="la descripción"/>
        <Card title="Título2" 
        description="la descripción2"/>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
