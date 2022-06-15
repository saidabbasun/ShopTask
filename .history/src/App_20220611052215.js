
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
   <Sw>
   <Route exact path='/' component={Home}/>
   <Route exact path='/products' component={Products}/>
  
   </Sw>
   </Router>
   </>
  );
}

export default App;
