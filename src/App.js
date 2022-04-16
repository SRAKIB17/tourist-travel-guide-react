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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/home' element={<Home></Home>}/>
        {/* <Route path='/blog' element={<Blog></Blog>}/> */}
        <Route path='/about' element={<About></About>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='*' element={<NotFound> </NotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
