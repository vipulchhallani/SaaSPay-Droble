import './App.css';
import Multicurrency from './components/Multi-Currency/index'
import Home from './components/Home/index'
import PLG from './components/PLG/index'
import SLG from './components/SLG/index'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    < >
        <Router>
         <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route  path="/multicurrency" element={<Multicurrency/>} />
         <Route  path="/plg" element={<PLG/>} />
         <Route  path="/slg" element={<SLG/>} />

         
         </Routes>
         </Router>
    
    </>
  );
}

export default App;
