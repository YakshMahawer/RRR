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
  );
}

export default App;
