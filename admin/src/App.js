import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DashRoute } from './Dashboard/DashRoute';
import PrivateRoute from './Dashboard/PrivateRoute';

function App() {
  return (
    <Routes className="App">
        
       <Route path="/*" element={<PrivateRoute><DashRoute/></PrivateRoute>} />
    </Routes>
  );
}

export default App;
