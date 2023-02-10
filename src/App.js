import React from "react";
import { /* BrowserRouter as Router, */ HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Main from "./components/Main";

function App() {
  return (
    <>
      {/* <Router>
      </Router> */}
      <HashRouter>
        <Head />
        <Main />
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
