import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import { Rating, RatingValueType} from './components/Rating';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {OnOff} from "./components/OnOff";
import {Select} from "./components/Select/Select";


type PageTitlePropsType = {
  title: string
}

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

  return (
    <div className="App">
      <PageTitle title={"This is my TypeScript APP"}/>
      <PageTitle title={"Whoa! I can do 'Hello World!' "}/>


      <Accordion title={"Menu"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed} items={[]} onItemClick={()=>{}} />
      <Rating value={ratingValue} onClick={setRatingValue}  />
      <Accordion title={"Article"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed} items={[]} onItemClick={()=>{}} />
      <Rating value={ratingValue} onClick={setRatingValue} />

      <OnOff on={on} onClick={setOn} />

      <UncontrolledOnOff onClick={setOn} />{on.toString()}

      <Select value={[]} onChange={()=>{}} items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Viktor", value: 3}]} />
      {/*<UncontrolledAccordion title={"Hello"} />*/}
      {/*<UncontrolledRating />*/}

    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h2>
    {props.title}
  </h2>
}

export default App;
