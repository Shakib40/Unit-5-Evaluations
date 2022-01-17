import './App.css';
import {Route , Routes} from "react-router-dom";
import {Navbar} from './Components/Navbar';
import {Home} from './Components/Home';

import {Contact} from './Components/Contact';
import {About} from './Components/About';
import {Products} from './Components/Products';
import {ProductDetails} from './Components/ProductDetails';
import{Users} from './Components/User';
import {UserDetails} from './Components/UserDetails';

import {AdminForm} from './Components/AdminForm';

import {Login} from './Components/Login';
import {Register} from './Components/Register';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
      <Routes>
        <Route path="/" element={ <Home/> }></Route>

        <Route path="/about" element={ <About/> }></Route>

        <Route path="/contactus" element={ <Contact/> }></Route>
        
        <Route path="/admin-form" element={ <AdminForm/> }></Route>
        
        <Route path="/user-form" element={ <Login/> }></Route>
         
        {/* <Route path="/users" element={ <Users/> }></Route>
        <Route path="/users/:usersId" element={ <UserDetails />}></Route>

        <Route path="/products" element={ <Products/> }></Route>
        <Route path="/products/:productsId" element={ <ProductDetails/> }></Route> */}


        <Route path="*" element={ <div>Page not found</div> }></Route>

      </Routes>

    </div>
  );
}

export default App;
