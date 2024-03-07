import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Services from './pages/Services';
import Rentdata from './pages/Rentdata';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/rent-data' element={<Rentdata/>}/>
      </Routes>
    </div>
  );
};

export default App;
