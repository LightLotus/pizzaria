import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bookaparty from "./pages/Bookaparty";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MenuSlider from "./pages/MenuSlider";
import Pizzaa from "./pages/menuoptions/Pizzaa";
import Pizzab from "./pages/menuoptions/Pizzab";
import Pizzac from "./pages/menuoptions/Pizzac";
import Pizzad from "./pages/menuoptions/Pizzad";
import Pizzae from "./pages/menuoptions/Pizzae";
import Pizzaf from "./pages/menuoptions/Pizzaf";
import Pizzag from "./pages/menuoptions/Pizzag";
import Pizzah from "./pages/menuoptions/Pizzah";
import Pizzai from "./pages/menuoptions/Pizzai";
import Pizzaj from "./pages/menuoptions/Pizzaj";
import Pizzak from "./pages/menuoptions/Pizzak";
import Pizzal from "./pages/menuoptions/Pizzal";
import Pizzam from "./pages/menuoptions/Pizzam";
import Pizzan from "./pages/menuoptions/Pizzan";
import Pizzao from "./pages/menuoptions/Pizzao";
import Pizzap from "./pages/menuoptions/Pizzap";
import Pizzaq from "./pages/menuoptions/Pizzaq";
import Pizzar from "./pages/menuoptions/Pizzar";
import Pizzas from "./pages/menuoptions/Pizzas";
import Pizzat from "./pages/menuoptions/Pizzat";
import Pizzau from "./pages/menuoptions/Pizzau";
import Pizzav from "./pages/menuoptions/Pizzav";
import Pizzaw from "./pages/menuoptions/Pizzaw";
import Pizzax from "./pages/menuoptions/Pizzax";
import Pizzay from "./pages/menuoptions/Pizzay";
import Pizzaz from "./pages/menuoptions/Pizzaz";


function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/bookaparty" element={<Bookaparty />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menuslider" element={<MenuSlider />}>
              <Route path="/menuslider/pizzaa" element={<Pizzaa />} />
              <Route path="/menuslider/pizzab" element={<Pizzab />} />
              <Route path="/menuslider/pizzac" element={<Pizzac />} />
              <Route path="/menuslider/pizzad" element={<Pizzad />} />
              <Route path="/menuslider/pizzae" element={<Pizzae />} />
              <Route path="/menuslider/pizzaf" element={<Pizzaf />} />
              <Route path="/menuslider/pizzag" element={<Pizzag />} />
              <Route path="/menuslider/pizzah" element={<Pizzah />} />
              <Route path="/menuslider/pizzai" element={<Pizzai />} />
              <Route path="/menuslider/pizzaj" element={<Pizzaj />} />
              <Route path="/menuslider/pizzak" element={<Pizzak />} />
              <Route path="/menuslider/pizzal" element={<Pizzal />} />
              <Route path="/menuslider/pizzam" element={<Pizzam />} />
              <Route path="/menuslider/pizzan" element={<Pizzan />} />
              <Route path="/menuslider/pizzao" element={<Pizzao />} />
              <Route path="/menuslider/pizzap" element={<Pizzap />} />
              <Route path="/menuslider/pizzaq" element={<Pizzaq />} />
              <Route path="/menuslider/pizzar" element={<Pizzar />} />
              <Route path="/menuslider/pizzas" element={<Pizzas />} />
              <Route path="/menuslider/pizzat" element={<Pizzat />} />
              <Route path="/menuslider/pizzau" element={<Pizzau />} />
              <Route path="/menuslider/pizzav" element={<Pizzav />} />
              <Route path="/menuslider/pizzaw" element={<Pizzaw />} />
              <Route path="/menuslider/pizzax" element={<Pizzax />} />
              <Route path="/menuslider/pizzay" element={<Pizzay />} />
              <Route path="/menuslider/pizzaz" element={<Pizzaz />} />
            </Route>
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
