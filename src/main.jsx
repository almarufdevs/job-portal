import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Rootlayout from './assets/layouts/Rootlayout';
import Home from './pages/Home/Home';
import Register from './pages/Home/register/Register';
import Authprovider from './Context/Authprovider';
import SignIn from './pages/Home/signin/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path:'/register',
       Component:Register,
      },
      {
        path:'/signin',
        Component: SignIn
      }
    ]
  },
]);

//  import router from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Authprovider>
      <RouterProvider router={router} />
     </Authprovider>
   
  </StrictMode>,
)




