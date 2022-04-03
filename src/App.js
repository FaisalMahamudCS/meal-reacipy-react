import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Head from './Component/Head/Head';
import Category from './Component/Category/Category';
import About from './Component/About/About';
import Ingrediant from './Component/Ingrediant/Ingrediant';
import Home from './Component/Home/Home';
import MealDetails from './Component/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      <Head></Head>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          
           </Route>
           <Route path='/category' element={<Category></Category>}> </Route>
           <Route path='/about' element={<About></About>}></Route>
           <Route path='/ingrediant' element={<Ingrediant></Ingrediant>}></Route>
     <Route path='/details/:i' element={<MealDetails></MealDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
