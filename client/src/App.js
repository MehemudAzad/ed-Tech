import { ChakraProvider } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CoursesLayout from './layout/CoursesLayout';
import Main from './layout/Main';
import Blogs from './Pages/Blogs';
import Checkout from './Pages/Checkout';
import Courses from './Pages/Courses';
import ErrorPage from './Pages/ErrorPage';
import FAQ from './Pages/FAQ';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PrivateRoute from './Pages/PrivateRoute';
import Profile from './Pages/Profile';
import Register from './Pages/Register';

function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/faq',
          element:<FAQ></FAQ>
        },
        {
          path:'/profile',
          element:<Profile></Profile>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>,    
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader:({params})=>
          fetch(`https://assignment-10-server-silk.vercel.app/checkout/${params.id}`)   
        
      }
      ]
    },
      {
        path:'/courses',
        element:<CoursesLayout></CoursesLayout>,
        children:[
          {
            path:"/courses/:id",
            element:<Courses></Courses>,
            loader:({params})=> 
              fetch(`https://assignment-10-server-silk.vercel.app/courses/${params.id}`)
            
          },
        ]
      },
      {
        path:'*',
        element:<ErrorPage></ErrorPage>
      }
    
  ]);

  return (
    <div className="">
    <ChakraProvider>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </ChakraProvider>
    </div>
  );
}

export default App;
