import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AyurvedaPage } from './pages/Ayurveda';
import { HealthPage } from './pages/Health';
import { PersonalCarePage } from './pages/PersonalCare';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <AllRoutes/> */}
      {/* <HealthPage/> */}
      <AyurvedaPage/>


{/* <PersonalCarePage/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
