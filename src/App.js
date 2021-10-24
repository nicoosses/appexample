import './App.css';
import 'semantic-ui-css/semantic.min.css';


import Nav from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Contacto from './Views/Contacto';
import Shop from './Views/Shop';
import ItemDetailContainer from './Views/ItemDetailContainer';
import ItemViewDetail from './Components/ItemViewDetail/ItemViewDetail';


export const App = () => {

    return (

      <Router>

        <div className="App">
    
        <Nav/>
        <Header title="Titulo del header"/>   
        
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Contacto' component={Contacto}/>
            <Route path='/Shop' component={Shop}/>
            <Route path='/ItemDetailContainer/:id' component={ItemViewDetail}/>
                   

          </Switch>
          
        
            
       
              <ItemListContainer/>
           
           

        </div>

      </Router>
   
);
}
export default App;
