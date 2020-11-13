import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import { Raiting } from './components/Rating';


type PageTitlePropsType = {
  title: string
}

function App() {
  return (
    <div className="App">
      <PageTitle title={"This is my TypeScript APP"}/>
      <PageTitle title={"Whoa! I can do 'Hello World!' "}/>
      <Accordion title={"Menu"} collapsed={true}/>
      <Raiting value={3}/>
      <Accordion title={"Article"} collapsed={false} />
      <Raiting value={4} />
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h2>
    {props.title}
  </h2>
}

export default App;
