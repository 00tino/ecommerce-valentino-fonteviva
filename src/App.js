import './App.css';
import NavBar from './NavBar/NavBar';
import './NavBar/NavBar.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
