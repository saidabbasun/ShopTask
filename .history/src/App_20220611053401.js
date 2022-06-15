
import Home from './component/Home';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,

  Route,
Routes
} from "react-router-dom";
import Products from './component/Products';
function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Route>
   <Route exact path='/' />
   <Home/>
   </Route>
   <Route exact path='/products' component={Products}/>
  
   </Routes>
   </Router>
   </>
  );
}

export default App;
