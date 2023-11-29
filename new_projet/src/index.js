import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Github,{gihubInfoLoader} from './components/Github/Github';
import User from './components/User/User';

// const router=createBrowserRouter([{
//   path:'/',
//    element: <Layout/>,
//    children:[
//     {
//       path:"",
//       element :<Home/>
//     }
//     ,{
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     },
//     {
//       path:"Github",
//       element:<Gitub/>
//     }
//    ]

// }])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
      loader={gihubInfoLoader}
      path='github' 
      element={<Github/>}/>
    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
