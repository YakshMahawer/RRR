<<<<<<< HEAD
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
=======
import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import AdminLogin from './Components/AdminLogin';


/** routes */
const router = createBrowserRouter([
  {
    path:'/',
    element: <div>Home page</div>
  },

  {
    path:'/admin',
    element: <AdminLogin />
  },

])


function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
>>>>>>> 10a949638de46873306b33124049414471d17df2
  );
}

export default App;
