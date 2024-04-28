import {
 
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/chrono/Chrono';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Contact from './pages/contact/Contact';
import Projets from './pages/projets/Projets';

function App() {
  return (
  <>
  <Header />
  <Main />
  <Home />
  <Contact />
  <Projets />
   {/* <Routes>
   
   <Route path='/portfolio' element={<Main />} ></Route>
   <Route path='/experience' element={<Home />} ></Route>
   <Route path='/contact' element={<Contact />} ></Route>
   <Route path='/projets' element={<Projets />} ></Route>
   </Routes> */}
   
   </>
  );
}

export default App;
