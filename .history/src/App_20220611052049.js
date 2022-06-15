
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
   Router
   <Navbar/>
   <Switch>
   <Route exact path='/' component={Home}/>
   <Route exact path='/products' component={Products}/>
  
   </Switch>
   </>
  );
}

export default App;
