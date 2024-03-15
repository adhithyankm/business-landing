import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Priceroute from './routes/Priceroute';
import Faqroute from './routes/Faqroute';
import Contactroute from './routes/Contactroute';


function App() {
  return (
    < >

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pricing' element={<Priceroute/>}/>
      <Route path='/faq' element={<Faqroute/>}/>
      <Route path='/contact' element={<Contactroute/>}/>
    </Routes>
     
    </>
  );
}

export default App;
