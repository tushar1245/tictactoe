//import { useState } from 'react';
import '../styles.css';


export default function Square({value, setValue}) {
   
  //const [value, setVaue] = useState(null);

  // function handleClick(x){
  //   setVaue(x);
  // }
  
  return <button className="cell" onClick={setValue}>{value}</button>;


}