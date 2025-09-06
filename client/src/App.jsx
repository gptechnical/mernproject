import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import {Register} from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { Logout } from './pages/Logout';
import { Error } from './pages/Error';
import AdminLayout from './components/layouts/AdminLayout';
import AdminUsers from './pages/AdminUsers';
import AdminContacts from './pages/AdminContacts';
import AdminUpdate from './pages/AdminUpdate';
import Footer from './pages/Footer';
import Header from './components/Header';
import WhatsAppChat from './pages/WhatsAppChat';

const App = () => {
  const [showDropDown, setShowDropDown] = useState(false);  
  const [showResources, setShowResources] = useState(false);
  const [showTools, setShowTools] = useState(false);
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Navbar
          showDropDown={showDropDown}
          setShowDropDown={setShowDropDown}
          showResources={showResources}
          setShowResources={setShowResources}
          showTools={showTools}
          setShowTools={setShowTools}
        
        />
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/admin' element={<AdminLayout/>}>
              <Route path='users' element={<AdminUsers/>}/>
              <Route path='contacts' element={<AdminContacts/>}/>
              <Route path='users/:id/edit' element={<AdminUpdate/>}/>
            </Route>
         </Routes>
         <Footer/>
         <WhatsAppChat/>
      </BrowserRouter>
    </>
  )
}

export default App
