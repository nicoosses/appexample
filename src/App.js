import './App.css';
import 'semantic-ui-css/semantic.min.css';

/*COMPONENTES*/
import Nav from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import ItemList from "./Components/ItemList/ItemList";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
/*IMAGES*/
import img1 from "./assets/images/card1.png";
import img2 from "./assets/images/card2.png";
import img3 from "./assets/images/card3.png";

/*VIEWS y ROUTING*/
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About'
import Contacto from './Views/Contacto'
import Shop from './Views/Shop'


export const App = () => {

    return (

      <Router>

        <div className="App">
   
        <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contacto" component={Contacto}/>
            <Route path="/Shop" component={Shop}/>
          </Switch>

          <Header title="Titulo del header"/>    
            
              {/* 7 */}
              <ItemListContainer/>
           
        <ItemCount stock="5" initial="1" />  
        </div>

      </Router>
   
);
}
export default App;
