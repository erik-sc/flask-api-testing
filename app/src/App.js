import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import {router} from "./router/index"

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
