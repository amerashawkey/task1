
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import AuthLayout from './components/shared/AuthLayout/AuthLayout'
import MasterLayout from './components/shared/MasterLayout/MasterLayout'
import UsersList from './components/UsersList/UsersList'
import UserData from './components/UserData/UserData'
import UserProfile from './components/UserProfile/UserProfile'
import NotFound from './components/shared/NotFound/NotFound'

function App() {
 const routes = createBrowserRouter(
  [
    {
      path:'',
      element:<AuthLayout/>,
      errorElement:<NotFound/>,
      children:[{index:true,element:<Login/>},
        {path:'login',element:<Login/>}
      ]

 },
 {
    path:'home',
    element:<MasterLayout/>,
    errorElement:<NotFound/>,
      children:[{index:true,element:<UsersList/>},
        {path:'users-list',element:<UsersList/>},
        {path:'users-data',element:<UserData/>},
        {path:'users-profile',element:<UserProfile/>}
      ]

 }
]
)

  return (
    <>
   <RouterProvider router={routes}></RouterProvider>
    
    </>
  )
}

export default App
