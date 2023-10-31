import './App.css';
import 'bulma/css/bulma.min.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/home';
import Work from './pages/work';
import About from './pages/about';

function App() {
  return (
    <div className="App">
       <HashRouter>
         <Header/>
        <Routes>
          <Route path='/work' element={<Work/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/' element={<Home/>} />
        </Routes> 
        <Footer/> 
       </HashRouter>
     
    </div>
  );
}

export default App;
