import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import NavBar from "./Components/Navbar";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={Projects} path='/projects' />
      </Switch>
    </BrowserRouter>
   
  )
}

export default App;
