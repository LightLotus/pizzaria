import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bookaparty from "./pages/Bookaparty";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
            <Route path="/menu" element={<Menu />}>
              <Route path="/menu/pizzaa" element={<Pizzaa />} />
              <Route path="/menu/pizzab" element={<Pizzab />} />
              <Route path="/menu/pizzac" element={<Pizzac />} />
              <Route path="/menu/pizzad" element={<Pizzad />} />
              <Route path="/menu/pizzae" element={<Pizzae />} />
              <Route path="/menu/pizzaf" element={<Pizzaf />} />
              <Route path="/menu/pizzag" element={<Pizzag />} />
              <Route path="/menu/pizzah" element={<Pizzah />} />
              <Route path="/menu/pizzai" element={<Pizzai />} />
              <Route path="/menu/pizzaj" element={<Pizzaj />} />
              <Route path="/menu/pizzak" element={<Pizzak />} />
              <Route path="/menu/pizzal" element={<Pizzal />} />
              <Route path="/menu/pizzam" element={<Pizzam />} />
              <Route path="/menu/pizzan" element={<Pizzan />} />
              <Route path="/menu/pizzao" element={<Pizzao />} />
              <Route path="/menu/pizzap" element={<Pizzap />} />
              <Route path="/menu/pizzaq" element={<Pizzaq />} />
              <Route path="/menu/pizzar" element={<Pizzar />} />
              <Route path="/menu/pizzas" element={<Pizzas />} />
              <Route path="/menu/pizzat" element={<Pizzat />} />
              <Route path="/menu/pizzau" element={<Pizzau />} />
              <Route path="/menu/pizzav" element={<Pizzav />} />
              <Route path="/menu/pizzaw" element={<Pizzaw />} />
              <Route path="/menu/pizzax" element={<Pizzax />} />
              <Route path="/menu/pizzay" element={<Pizzay />} />
              <Route path="/menu/pizzaz" element={<Pizzaz />} />
            </Route>
            <Route path="/bookaparty" element={<Bookaparty />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
