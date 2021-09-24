import AddTask from "./AddTask"
import './App.css';
import React, { useState } from 'react'
import Login from "./Login/Login";
import ShowTask from './ShowTask'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Login/Register";
import Header from "./Header"
import Accordion from "./components/FAQ/Accordion";
import Instagram from "./Instagram/Instagram";
import { useSelector } from "react-redux";
import Test from "./Test";
import Pagenation from "./Pagenation/Pagenation";

function App() {
  const [task, setTask] = useState([])
  const darr = useSelector((state) => state.darkMode)
  console.log(darr)
  const saveTaskData = (enteredTask) => {
    setTask((preTask) => [enteredTask, ...preTask])
  }
  const valueHandler = (data) => {
    setTask(task.filter((task) => task.key !== data.key))

  }


  return (
    // <div className={`app ${darr ? 'dark_mode' : ''} `}>
    <div className={`app ${darr ? "dark" : ""}`}>

      <Router>
        <Header />
        <Switch>
          <Route path="/faq" exact component={Accordion}></Route>
          <Route path="/" exact  ><AddTask onAddItem={saveTaskData} />
            <ShowTask data={task} filterData={valueHandler} /></Route>
          <Route path="/login" exact ><Login /></Route>
          <Route path="/signup" exact ><Register /></Route>
          <Route path="/instagram" exact ><Instagram /></Route>
          <Route path="/pagenation" exact><Pagenation /></Route>
        </Switch>
      </Router>

    </div >
  );
}

export default App;
