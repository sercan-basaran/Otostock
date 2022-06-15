import Sidebar from "./Sidebar/Sidebar/Sidebar"
import StockListe from "./Pages/StockList/StockList"
<<<<<<< HEAD
import { Outlet } from "react-router-dom"
function Home() {
  return (
    <div className='grid  '>
      <Outlet />
=======
function Home() {
  return (
    <div className='grid  '>
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
      <div className='col4 p-4   '>
        <Sidebar />
      </div>

      <div className='col-9 mt-5   mx-6'>
        <StockListe />
      </div>
    </div>
  )
}

export default Home
