import './App.css';
import 'semantic-ui-css/semantic.min.css';

/*COMPONENTES*/
import NavBar from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import Item from "./Components/Item/Item";
import ItemList from './Components/ItemList/ItemList';
import ItemCount from './Components/ItemCount/ItemCount';
/*IMAGES*/
import img1 from "./assets/images/card1.png";
import img2 from "./assets/images/card2.png";
import img3 from "./assets/images/card3.png";



export const App = () => {

    return (
    <div className="App">
         <NavBar/>
          <Header title="Titulo del header"/>    
          <h1 className="Titulo">Front-E Commerce</h1>
          <div className="Cards">
            {/* 7 */}
              <ItemList/>
          </div>
          <ItemCount stock="5" initial="1" />  
    </div>
);
}
export default App;
