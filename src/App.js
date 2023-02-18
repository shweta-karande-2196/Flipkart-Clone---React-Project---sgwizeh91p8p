import { Box } from '@mui/system';
import './App.css';
import Header from './component/Header';
import Home from './component/Home/Home';
// import Product from './component/Product/Product'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ProductDetails from './component/details/ProductDetails';
import Cart from './component/cart/Cart'

function App() {
  return (
    <BrowserRouter >
      <Header/>
      <Box style={{marginTop : 55}}>
     <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/product/:id'element={<ProductDetails />}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </Box>
      
      
      
    </BrowserRouter>
  );
}

export default App;
