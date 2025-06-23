import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Admin from './pages/admin';
import User from './pages/user';

function App() {
  return (
    <>
      <Navbar/>
      <div className="ml-[20%] px-8 py-6 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
