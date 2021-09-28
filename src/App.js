import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'semantic-ui-css/semantic.min.css';
import NavBar from "./Components/Navbar/NavBar";
import Header from './Components/Header/Header';
import CardExampleCard from "./Components/Cards/Card";
import img1 from "./Components/Cards/card1.png";
import img2 from "./Components/Cards/card2.png";
import img3 from "./Components/Cards/card3.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Carrito',
      counter: 0
    };
  }

  SumarAlCarro = () => {
    this.setState({ counter: this.state.counter + 1});
  };

  RestarAlCarro = () => {
    this.setState({counter: this.state.counter -1});
  };

  render() { 
    return (
      <div className="App">
           <Header title="Titulo del header"/>
         
           {/* <h1 className="Titulo">Front-E Commerce</h1> */}
           
       
       <div className="Cards">
         <a href="#"> <CardExampleCard img={img1} title='Custom Design' subtitle='Customization 4 u' description='Mutual work, we specialize in achieving the design that you imagine' link='PACKAGE 1'/> </a>
         <a href="#"> <CardExampleCard img={img2} title='Defined Designs' subtitle='Choose ur style' description='We have designs prepared for your project. Choose yours!' link='PACKAGE 2'/></a>
         <a href="#"> <CardExampleCard img={img3} title='Friendly Service' subtitle='Exclusive attention' description='Includes marketing proposals and creative ideas for your Project' link='PACKAGE 3'/></a>
        </div>
        
        <div>
          <button onClick={this.SumarAlCarro}>Sumar al Carro</button>
                  <button onClick={this.RestarAlCarro}>Quitar del Carro</button>
                  <p>{this.state.counter}</p>
        </div>

      </div>

  );
}
}

export default App;
