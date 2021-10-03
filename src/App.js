import './App.css';
import 'semantic-ui-css/semantic.min.css';

/*COMPONENTES*/
import NavBar from './Components/Navbar/NavBar';
import Header from './Components/Header/Header';
import ItemList from "./Components/ItemListContainer/ItemList";
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
             <ItemList img={img1} title='Custom Design' subtitle='Customization 4 u' description='Mutual work, we specialize in achieving the design that you imagine' link='PACKAGE 1'  />  
             <ItemList img={img2} title='Defined Designs' subtitle='Choose ur style' description='We have designs prepared for your project. Choose yours!' link='PACKAGE 2'/>
             <ItemList img={img3} title='Friendly Service' subtitle='Exclusive attention' description='Includes marketing proposals and creative ideas for your Project' link='PACKAGE 3'/>
          </div>
          <ItemCount stock="5" initial="1" />  
    </div>
);
}
export default App;
