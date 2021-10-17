
import './App.css';
import { BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import Home from './pages/home/home/Home';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
   <Router>
   <Switch>
     <Route exact path="/">
      <Home></Home>
     </Route>
     <Route exact path="/home">
       <Home></Home>
     </Route>
     <Route exact path="/footer">
       <Footer></Footer>
     </Route>
     <Route exact path="*">
       <NotFound></NotFound>
     </Route>
   </Switch>
   </Router>
    </div>
  );
}

export default App;
