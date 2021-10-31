import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Nav from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Contacto from './Views/Contacto';
import Shop from './Views/Shop';
import ItemViewDetail from './Components/ItemViewDetail/ItemViewDetail';

import {PjProvider} from './ItemContext/ItemContext';


export const App = () => {

    return (

             
      <PjProvider>
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

      </PjProvider>     

           );



}
export default App;
