import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingleTitlePage from './pages/SingleTitlePage';
import TitlePage from './pages/TitlePage';
import Nav from "./components/Nav.jsx"
import DescriptionPage from './pages/DescriptionPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<Provider store={store}>
  <Nav>
  <Routes>
    <Route path={'/'} element={<TitlePage/>}/>
    <Route path={'/title/:id'} element={<SingleTitlePage/>}/>
    <Route path={'/description'} element={<DescriptionPage/>}/>
  </Routes>
  </Nav>
</Provider>
</BrowserRouter>
  </React.StrictMode>,
)