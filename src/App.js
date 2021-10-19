import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Shared/Header/Header";
import Services from "./pages/home/Services/Services";
import Doctors from "./pages/home/Doctors/Doctors";
import About from "./pages/home/AboutUs/About";
import Login from "./pages/login/login/Login";
import AuthProvider from "./context/AuthProvider";
import ServiceDetails from "./pages/home/ServiceDetails/ServiceDetails";
import PrivateRoute from "./pages/login/privateRoute/PrivateRoute";
import DoctorDetails from "./pages/home/doctorsDetails/DoctorDetails";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute exact path="/serviceDetails/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute exact path="/doctorDetails/:id">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/contactUs">
              <Contact></Contact>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
