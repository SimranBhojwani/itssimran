import './App.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/home';
import Work from './pages/work';
import Quotes from './pages/quotes';
import About from './pages/about';

function App() {
  return (
    <div className="App">
       <Router>
         <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/work' element={<Work/>} />
          <Route path='/quotes' element={<Quotes/>} />
          <Route path='/about' element={<About/>} />
        </Routes> 
        <Footer/> 
       </Router>
     
    </div>
  );
}

export default App;
