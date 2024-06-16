import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound'
import Home from './pages/Home';
import Profile from './pages/Profile'
import FreePricing from './pages/Pricing/FreePricing';
import PremiumPricing from './pages/Pricing/PremiumPricing';
import Freemium from './pages/Pricing/Freemium';
import ForPremiumUser from './pages/ForPremiumUser';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <>
    <Navbar />

   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Login />} />

    <Route path='/pricing' element={<Pricing />} >
      <Route path='free' element={<FreePricing />} />
      <Route path='premium' element={<PremiumPricing />} />
      <Route path='freemium' element={<Freemium />} />
      
    </Route>
    <Route path='*' element={<NotFound />} />
    <Route path='/user/:userId' element={<Profile />}/>

    <Route element={<ProtectedRoute />}>
      <Route path='/prime' element={<ForPremiumUser />} />
      </Route>
    </Routes>
    
    
   </>
  );
}

export default App;
