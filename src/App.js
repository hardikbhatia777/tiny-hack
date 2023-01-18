import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ReportBox from './pages/ReportBox';
import Achivements from './pages/Achivements';
import Profile from './pages/Profile';
import Employees from './pages/Employees';
import Workout from './pages/Workout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reportBox' element={<ReportBox/>}/>
          <Route path='/achivements' element={<Achivements/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/Workout' element={<Workout/>}/>
        </Routes>
    </BrowserRouter>
  );
}


export default App;
