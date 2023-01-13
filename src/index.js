import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import arr from "./CardData";

const root = ReactDOM.createRoot(document.getElementById("root"));
const resultData = function(currentValue){
  return(
  <App 
  pic = {currentValue.pic}
  title ={currentValue.title}
  name = {currentValue.name}
  link ={currentValue.link}
  />)

}
root.render(
  <>
  <h1 className="heading">Top Movies On Netflix</h1>
  {arr.map(resultData)}
    {/* <App
      pic={arr[0].pic}
      title={arr[0].title}
      name={arr[0].name}
      link={arr[0].link}
    />
    <App
      pic={arr[1].pic}
      title={arr[1].title}
      name={arr[1].name}
      link={arr[1].link}
    />
    <App
      pic={arr[2].pic}
      title={arr[2].title}
      name={arr[2].name}
      link={arr[2].link}
    />
    <App
      pic={arr[3].pic}
      title={arr[3].title}
      name={arr[3].name}
      link={arr[3].link}
    />
    <App
      pic={arr[4].pic}
      title={arr[4].title}
      name={arr[4].name}
      link={arr[4].link}
    />
    <App
      pic={arr[5].pic}
      title={arr[5].title}
      name={arr[5].name}
      link={arr[5].link}
    /> */}
    
  </>
);
