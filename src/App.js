import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';


import Menu from './component/Menu';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Becomevendor from './component/Becomevendor';
import Contact from './component/Contact';
import Login from './component/Login';

import Hero from './pages/Hero';
import Carosal from './pages/Carosal'
import Products from './pages/Products';
import Helba from './pages/Helba';
import Rarichan from './pages/Rarichan';
import Footer from './pages/Footer';




function App() {
  return (
   <>

<Menu/>
<Routes>
  <Route exact path='/' Component={Home}/>
  <Route exact path='/Product' Component={Product}/>
  <Route exact path='/Becomevendor' Component={Becomevendor}/>
  <Route exact path='/About' Component={About}/>
  <Route exact path='/Login' Component={Login}/>
  <Route exact path='/Contact' Component={Contact}/>

  <Route exact path='/Hero' Component={Hero}/>
  <Route exact path='/Carosal' Component={Carosal}/>
  <Route exact path='/Products' Component={Products}/>
  <Route exact path='/Rarichan' Component={Rarichan}/>
  <Route exact path='/Helba' Component={Helba}/>
  <Route exact path='/Footer' Component={Footer}/>

 

</Routes>
   
   </>
  );
}

export default App;
