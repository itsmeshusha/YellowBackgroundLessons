import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import { Raiting } from './components/Rating';


function App() {
  return (
    <div className="App">
      <PageTitle title={"This is my TypeScript APP"}/>
      <PageTitle title={"Whoa! I can do 'Hello World!' "}/>
      <Accordion title={"Menu"}/>
      <Raiting value={3}/>
      <Accordion title={"Article"}/>
      <Raiting value={4} />
    </div>
  );
}

function PageTitle(props: any) {
  return <h2>
    {props.title}
  </h2>
}

export default App;
