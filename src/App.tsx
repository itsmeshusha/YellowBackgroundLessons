import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Raiting, RatingValueType} from './components/Rating';
import {OnOff} from "./components/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/UncontrolledRating";


type PageTitlePropsType = {
  title: string
}

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  return (
    <div className="App">
      <PageTitle title={"This is my TypeScript APP"}/>
      <PageTitle title={"Whoa! I can do 'Hello World!' "}/>


      <Accordion title={"Menu"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed} />
      <Raiting value={ratingValue} onClick={setRatingValue} />
      <Accordion title={"Article"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed} />
      <Raiting value={ratingValue} onClick={setRatingValue} />

      <OnOff />
      {/*<UncontrolledAccordion title={"Hello"} />*/}
      {/*<UncontrolledRaiting />*/}

    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h2>
    {props.title}
  </h2>
}

export default App;
