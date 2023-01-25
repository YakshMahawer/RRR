import { Route, Routes } from 'react-router-dom';
import './App.css';
import Complain from './components/User/Complain/Complain';
import Statistics from './components/User/Statistics/Statistics';
import Status from './components/User/Status/Status';
import Thanks from './components/User/Thanks/Thanks';

function App() {
  return (
    <div className="App">
   
    <Routes>
      <Route exact path='/' element={<Complain />} />
      <Route exact path='/statistics' element={<Statistics />} />
      <Route exact path='/status' element={<Status />} />
      <Route exact path='/thanks' element={<Thanks />} />

    </Routes>
    </div>
  );
}

export default App;
