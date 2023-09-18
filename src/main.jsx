import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleTitlePage from "./pages/SingleTitlePage";
import TitlePage from "./pages/TitlePage";
import Nav from "./components/Nav.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
        {/* //C: should this TitlePage component be here? It will always show on the browser no matter the current URL */}
        <TitlePage />
        <Routes>
          <Route index element={<TitlePage />} />
          {/* //C: not entirely sure why we are adding title to the path here */}
          <Route path="/title/:id" element={<SingleTitlePage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
