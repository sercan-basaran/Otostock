import PanelMenu from "../Menu/PanelMenu"
import { Outlet } from "react-router-dom"

function Yönetim() {
  return (
    <div>
      <div className='grid'>
<<<<<<< HEAD
        <div className='col-3 p-4'>
          <PanelMenu />
        </div>
        <div className='col-8 p-4'>
=======
        <div className='col-3'>
          <PanelMenu />
        </div>
        <div className='col-8'>
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Yönetim
