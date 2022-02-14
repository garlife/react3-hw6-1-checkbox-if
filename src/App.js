import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [visibility, setVisibility] = useState(false);

  function handlerVisibility(event){
    console.log(event.target.checked)
    return(
      setVisibility(event.target.checked)
    )
    
  }

  return (
    <div>
      <label>Отобразить текст</label>
      <input type="checkbox" onClick={handlerVisibility}></input>
      {visibility && <input type="text" defaultValue="Some text"></input>}
    </div>
  );
}
