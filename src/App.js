import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import Store from "../src/store/Store"

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
     <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     </Router>
    </div>
    </Provider>
  );
}

export default App;
