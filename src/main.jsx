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
import Details from './pages/Details/Details';
import Privateroute from './Route/Privateroute';
import AddPost from './Add/AddPost';
import Application from './pages/myapplycation/Application';


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
        path:'/donate/:id',
        Component:Details,
        loader: ({params}) => fetch(`http://localhost:3000/donate/${params.id}`)
      },
      {
        path: 'AddPost/:id',
        element:<Privateroute><AddPost></AddPost></Privateroute>
      },
      {
        path: 'Application',
        element:<Privateroute><Application></Application></Privateroute>
      },
      {
        path:'/register',
       Component:Register
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




