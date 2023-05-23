import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/layouts/Header1";
import Footer from "./components/layouts/Footer";

import Compare from "./components/pages/Compare";
import AboutUS from "./components/pages/AboutUS";
import FAQ from "./components/pages/FAQ";
const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/compare" />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/aboutUS" element={<AboutUS />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
