import { Routes, Route, useRoutes } from "react-router-dom"
import Home from "./views/Home"
import Sidebar from "./views/Sidebar/Sidebar/Sidebar"
import Header from "./views/Navigation/Header"
import NewProductAdd from "./views/Pages/StockList/NewProductAdd"
import Management from "./views/Pages/Site Management/Management"
import StockList from "./views/Pages/StockList/StockList"
import PanelMenu from "./views/Pages/Menu/PanelMenu"
import { VehicleType } from "./views/Pages/Site Management/Vehicles/VehicleAddTypes/VehicleType/VehicleType"
import { VehicleTrademark } from "./views/Pages/Site Management/Vehicles/VehicleAddTypes/VehicleTrademark/VehicleTrademark"
import { VehicleModel } from "./views/Pages/Site Management/Vehicles/VehicleAddTypes/VehicleModel/VehicleModel"
import { VehicleTypeList } from "./views/Pages/Site Management/Vehicles/VehicleListTypes/VehicleType/VehicleTypeList"
import { VehicleTrademarkList } from "./views/Pages/Site Management/Vehicles/VehicleListTypes/VehicleTrademark/VehicleTrademarkList"
import { VehicleModelList } from "./views/Pages/Site Management/Vehicles/VehicleListTypes/VehicleModel/VehicleModelList"
import ProductAdd from "./views/Pages/Site Management/Products/ProductAdd/ProductAdd"
import ProductList from "./views/Pages/Site Management/Products/ProductList/ProductList"

function App() {
  return (
    <div className='grid'>
      <div className='col-12'>
        <Header />
      </div>
      <div className='col-12'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/header' element={<Header />} />
          <Route path='/new_product_add' element={<NewProductAdd />} />
          <Route path='/stocklist' element={<StockList />} />
          <Route path='management' element={<Management />}>
            <Route path='panel_menu' element={<PanelMenu />} />
            <Route path='management_new_product_add' element={<ProductAdd />} />
            <Route
              path='management_new_product_list'
              element={<ProductList />}
            />
            <Route path='panel_menu' element={<PanelMenu />} />
            <Route path='add_vehicle_type' element={<VehicleType />} />
            <Route
              path='add_vehicle_trademark'
              element={<VehicleTrademark />}
            />
            <Route path='add_vehicle_model' element={<VehicleModel />} />
            <Route path='vehicle_type_list' element={<VehicleTypeList />} />
            <Route
              path='vehicle_trademark_list'
              element={<VehicleTrademarkList />}
            />
            <Route path='vehicle_model_list' element={<VehicleModelList />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
