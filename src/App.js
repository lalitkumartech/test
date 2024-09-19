import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/menu-pages/About';
import Layout from './component/Layout';
import Contact from './component/menu-pages/Contact';
import EnglishClasses from './component/menu-pages/EnglishClasses';



function App() {
  return (
    <div className="App" style={{backgroundColor:'#F1F5EB'}}>
      <Router>
      <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/englishclasses' element={<EnglishClasses/>}></Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
