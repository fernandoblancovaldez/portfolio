import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Main from "./components/Main";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <Head />
          <Main />
        </HashRouter>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
