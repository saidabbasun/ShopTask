
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
   <Routes>
   <Route exact path='/' element={<Home/>}/>
  c
  
   </Routes>
   </Router>
   </>
  );
}

export default App;
