import './App.css';
import 'semantic-ui-css/semantic.min.css';


/*COMPONENTES*/
import Nav from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';



/*VIEWS y ROUTING*/
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Contacto from './Views/Contacto';
import Shop from './Views/Shop';
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';



export const App = () => {

    return (

      <Router>

        <div className="App">
    
        <Nav/>
        <Header title="Titulo del header"/>   
        
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contacto" component={Contacto}/>
            <Route path="/Shop" component={Shop}/>
            
            <Route path="/detail/:id" component={ItemDetailContainer}/>

          </Switch>
          
          
            
              {/* 7 */}
              <ItemListContainer/>
           
        <ItemCount stock="5" initial="1" />  
        </div>

      </Router>
   
);
}
export default App;
