import './App.css';
import NavbarComponent from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SumaScreen from './components/sumaScreen';
import RestaScreen from './components/restaScreen';
import MultiScreen from './components/multiScreen';
import DiviScreen from './components/diviScreen';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<SumaScreen/>}/> 
        <Route path='/suma' element={<SumaScreen/>}/> 
        <Route path='/resta' element={<RestaScreen/>}/> 
        <Route path='/multi' element={<MultiScreen/>}/> 
        <Route path='/divi' element={<DiviScreen/>}/> 
      </Routes>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
