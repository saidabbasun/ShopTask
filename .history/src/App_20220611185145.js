
import Home from './component/Home';
import Navbar from './component/Navbar';
import 'react-loading-skeleton/dist/skeleton.css'
import {
  BrowserRouter as Router,

  Route,
Routes
} from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Routes>
   <Route exact path='/' element={<Home/>}/>
   <Route exact path='/products' element={<Products/>}/>
   <Route exact path='/products/:id' element={<Product/>}/>
   <Route exact path='/cart/' element={<Cart/>}/>
  
   </Routes>
   </Router>
   </>
  );
}

export default App;
