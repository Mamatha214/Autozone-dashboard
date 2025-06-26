import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Admin from './pages/admin';
import User from './pages/user';
import Buy from './pages/buy';
import Brand from './pages/brand';
import Model from './pages/model';
import Service from './pages/service';
import Search from './pages/search';  
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <>
      <Navbar/>
      <div className="ml-[20%] px-8 py-6 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />

          <Route path="/buy" element={<Buy />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/model" element={<Model />} />
          <Route path="/service" element={<Service />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login onClose={()=>{}}/>} />
          <Route path='/register' element={<Register />} />
      

        </Routes>
      </div>
    </>
  );
}

export default App;
