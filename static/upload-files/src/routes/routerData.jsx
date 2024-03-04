import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Folder } from './Folder/Folder.jsx'
import { Home } from './Home/Home.jsx'

const routerData = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Ha ocurrido un error</h1>
  },
  {
    path: "/:folderName",
    element: <Folder/>
  }
])

export { routerData }