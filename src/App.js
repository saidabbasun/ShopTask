
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

function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Routes>
   <Route exact path='/' element={<Products/>}/>
   {/* <Route exact path='/products' element={}/>
   <Route exact path='/products/:id' element={<Product/>}/> */}
 
  
   </Routes>
   </Router>
   </>
  );
}

export default App;
