import PanelMenu from "../Menu/PanelMenu"
import { Outlet } from "react-router-dom"

function Yönetim() {
  return (
    <div>
      <div className='grid'>
        <div className='col-3'>
          <PanelMenu />
        </div>
        <div className='col-8'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Yönetim
