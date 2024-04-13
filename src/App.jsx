import React from 'react'
import './App.css'
import { useRoutes} from 'react-router-dom'
import Navigation from './components/Navigation'
import Create from './pages/Create'
import Edit from './pages/Edit'
import View from './pages/View'
import Home from './pages/Home'
import CrewInfo from './pages/CrewInfo'
import Footer from './components/Footer'

function App() {

  // Sets up routes
  let element = useRoutes([
    {
      path: "/view",
      element:<View />
    },
    {
      path:"/edit/:id",
      element: <Edit />
    },
    {
      path:"/create",
      element: <Create />
    },
    {
      path:"/",
      element: <Home />
    },
    {
      path:"/view/:id",
      element: <CrewInfo />
    }
  ]);

  return (
    <div className='page'>
      < Navigation />
      <div className='content'>
        {element}
      </div>
    </div>
  )
}

export default App;
