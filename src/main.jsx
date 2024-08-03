import React from "react";
import ReactDOM from "react-dom/client";
// Style
import "./index.css";
// Router DOM
import {BrowserRouter} from "react-router-dom";
// Components
import Header from "./components/header/index.jsx";
import App from "./App.jsx";
import Footer from "./components/footer/index.jsx";
// Redux
import {Provider} from "react-redux";
import {store} from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <App />
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>
);
