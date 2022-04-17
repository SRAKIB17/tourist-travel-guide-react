import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/Pages/About/About';
import Blog from './Component/Pages/Blog/Blog';
import Register from './Component/Pages/Register/Register';
import Login from './Component/Pages/Login/Login';
import NotFound from './Component/Pages/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import JoinTour from './Component/Pages/JoinTour/JoinTour';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/home' element={<Home></Home>}/>
        {/* <Route path='/blog' element={<Blog></Blog>}/> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/join/:id' element={<JoinTour/>}/>
        <Route path='*' element={<NotFound> </NotFound>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
