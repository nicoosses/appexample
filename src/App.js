import React, { Component } from "react";
import './App.css';
import NavBar from "./Components/Navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() { 
    return (
      <div className="App">
       
           <NavBar/>
           <h1 className="Titulo">Front-E Commerce</h1>

        
      </div>

  );
}
}

export default App;
