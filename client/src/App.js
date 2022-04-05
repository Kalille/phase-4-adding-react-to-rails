import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
const [movies,setMovies]=useState()
  useEffect(()=>{
    fetch("/movies")
    .then(res=>res.json())
    .then(movies=> setMovies(movies))
  },[])
  
  return (
    <div className="App">
  hello
    </div>
  );
}

export default App;
