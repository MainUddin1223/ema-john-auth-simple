import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Ineventory from './components/Ineventory/Ineventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Ineventory></Ineventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
