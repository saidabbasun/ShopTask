
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
   <>
   <Navbar/>
   <Switch>
   <Route exact path='/'/>
   <Home/> 
   </Switch>
   </>
  );
}

export default App;