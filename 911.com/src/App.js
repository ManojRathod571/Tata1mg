import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { HealthPage } from './pages/Health';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <HealthPage/> */}

      <Footer/>
    </div>
  );
}

export default App;
