import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import YuGiOh from "./Routes/YuGiOh";
import Pokemon from "./Routes/Pokemon";
import Fab from "./Routes/Fab";
import reportWebVitals from './reportWebVitals';
import YuGiOhPage from './components/YuGiOhPage';
import PokemonPage from './components/PokemonPage';
import FabPage from './components/FabPage';

const rootElement = document.getElementById("root");
render(  
<BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="Yu-Gi-Oh" element={<YuGiOhPage />} />
      <Route path="Pokemon" element={<PokemonPage/>} />
      <Route path="Flesh-and-blood" element={<FabPage/>} />
    </Routes>
</BrowserRouter>, 
rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
