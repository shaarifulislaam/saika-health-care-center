import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
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
    <div className="App container-custom">
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="services" element={<Services />} />
          <Route
            path="serviceDetails/:id"
            element={
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            }
          />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctorDetails/:id" element={<DoctorDetails />} />
          <Route path="about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
