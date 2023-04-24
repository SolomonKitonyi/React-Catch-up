import React,{useEffect,useState} from 'react';
import './App.css';
import ClassGroups from './ClassGroups';

function App() {
  const [data,setData] = useState([])
  const data1 = [
    {name: "Group 1", count: 4},
    {name: "Group 2", count: 4},
    {name: "Group 3", count: 4},
    {name: "Group 4", count: 4},
    {name: "Group 5", count: 4},
    {name: "Group 6", count: 4},
    {name: "Group 7", count: 3}
  ]
  useEffect(() => {
    fetch("http://localhost:3000/groups")
    .then(res => res.json())
    .then(response => {
      setData(response)
    })
  },[])
  return (
    <div className="App">
      <h1>SDFT04 GENIUS</h1>
      <p>We are genuis</p>
      <h2>We are 28 in total</h2>
      <ClassGroups groups = {data} setData={setData}/>
    </div>
  );
}

export default App;
