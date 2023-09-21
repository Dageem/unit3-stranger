import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SinglePostPage from './pages/SinglePostPage';
import AllPostsPage from './pages/AllPostsPage';
import Nav from "./components/Nav.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <Nav/>
  <Routes>
    <Route index element={<AllPostsPage/>}/>
    <Route path='/:id' element={<SinglePostPage/>}/>
  </Routes>
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
)