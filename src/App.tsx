import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion, Star} from "./components";
import {Raiting} from "./components";


function App() {
  return (
    <div className="App">
      This MY TypeScript APP
        <Star />
        <Raiting />
        <Accordion />
    </div>
  );
}

export default App;
