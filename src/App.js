import "./App.css";
import "./index.css";
import Header from "./components/Header";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Catalog from "./pages/catalog";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Dop from "./pages/dop";
import Info from "./pages/info";


function App() {
  const Bounce = styled.div`
    animation: 2s ${keyframes`${fadeIn}`};
  `;
  return (
    <>
      <Bounce>
        <Header/>
        <Router>
          <Routes>
            <Route exact path="/catalog" element={<Catalog />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dop" element={<Dop />} />
            <Route exact path="/info" element={<Info />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </Bounce>
    </>
  );
}

export default App;
