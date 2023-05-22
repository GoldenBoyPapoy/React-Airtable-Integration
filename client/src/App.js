import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import Dashboard from "./components/pages/index";
import About from "./components/pages/About.js";
import Contact from "./components/pages/Contact";
const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
