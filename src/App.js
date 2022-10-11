import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import "./App.css"

function App() {
  return (
    <>

      <NavBar />

      <main>
        <div className="Saludo">
          <ItemListContainer greeting="¡Bienvenidos a CarArt!" />
        </div>
        <ItemCount stockTotal={25} stockInicial={1} />
      </main>
    </>
  );
}

export default App;


