import './App.css';
import NavBar from './NavBar/NavBar';
import './NavBar/NavBar.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import AppEcommerce from './AppEcommerce';

function App() {

  return (
    <div className="App">
      {/* <NavBar /> 
      <ItemListContainer /> */}
      <AppEcommerce />
    </div>
  );
}

export default App;
