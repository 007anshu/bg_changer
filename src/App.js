import logo from './logo.svg';
import './App.css';
import react ,{useState} from "react" ;

function App() {
let [color , setcolor] =useState(" aqua");

  return (
    <div className="App" style={{background :color}}>
         <div >
          <button className='btn' onClick={() => setcolor ("blue") } style={{background :"blue"}} ></button>
          <button className='btn' onClick={() => setcolor ("red")} style={{background :"red"}} ></button>
          <button className='btn' onClick={() => setcolor ("green")} style={{background :"green"}} ></button>
          <button className='btn' onClick={() => setcolor ( "white")} style={{background :"white"}} ></button>
          <button className='btn' onClick={() => setcolor ( "yellow")} style={{background :"yellow"}} ></button>
         </div>
    </div>
  );
}

export default App;
