import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Login from './page/Login'
import NotFound from './page/NotFound';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
