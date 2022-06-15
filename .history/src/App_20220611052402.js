
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
   <Rou>
   <Route exact path='/' component={Home}/>
   <Route exact path='/products' component={Products}/>
  
   </Rou>
   </Router>
   </>
  );
}

export default App;
