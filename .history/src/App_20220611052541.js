
import Home from './component/Home';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Products from './component/Products';
function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Switch>
   <Route exact path='/' ><
   <Route exact path='/products' />
  
   </Switch>
   </Router>
   </>
  );
}

export default App;
