
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
   <Route exact path='/' >
    <Home/>
   </Route>
   <Route exact path='/products' />
  <Products/>
   </Switch>
   </Router>
   </>
  );
}

export default App;
