
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import Home from './pages/home/home/Home';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
import Services from './pages/home/Services/Services';
import Doctors from './pages/home/Doctors/Doctors';
import About from './pages/home/AboutUs/About';
import Login from './pages/login/login/Login';

function App() {
  return (
    <div className="App">
   <Router>
     <Header></Header>
   <Switch>
     <Route exact path="/">
      <Home></Home>
     </Route>
     <Route exact path="/home">
       <Home></Home>
     </Route>
     <Route exact path="/login">
       <Login></Login>
     </Route>
     <Route exact path="/services">
       <Services></Services>
     </Route>
     <Route exact path="/doctors">
       <Doctors></Doctors>
     </Route>
     <Route exact path="/about">
       <About></About>
     </Route>
     <Route exact path="*">
       <NotFound></NotFound>
     </Route>
   </Switch>
    <Footer></Footer>
   </Router>
    </div>
  );
}

export default App;
