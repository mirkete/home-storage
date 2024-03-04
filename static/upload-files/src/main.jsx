import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {routerData} from "./routes/routerData.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routerData}></RouterProvider>
)
