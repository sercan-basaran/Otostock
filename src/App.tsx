<<<<<<< HEAD
import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Sidebar from "./views/Sidebar/Sidebar/Sidebar"
import Header from "./views/Navigation/Header"
import NewProductAdd from "./views/Pages/StockList/NewProductAdd"
import Management from "./views/Pages/Site Management/Management"
import StockList from "./views/Pages/StockList/StockList"
=======
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Sidebar from "./views/Sidebar/Sidebar/Sidebar"
import Header from "./views/Navigation/Header"
import YeniÜrünEkle from "./views/Pages/StockList/NewProductAdd"
import Yonetim from "./views/Pages/Site Management/Management"
import StockListe from "./views/Pages/StockList/StockList"
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
import PanelMenu from "./views/Pages/Menu/PanelMenu"
import { VehicleType } from "./views/Pages/Site Management/VehicleAdd/VehicleType/VehicleType"
import { VehicleBrand } from "./views/Pages/Site Management/VehicleAdd/VehicleBrand/VehicleBrand"
import { VehicleModel } from "./views/Pages/Site Management/VehicleAdd/VehicleModel/VehicleModel"
import { VehicleYears } from "./views/Pages/Site Management/VehicleAdd/VehicleYear/VehicleYears"
import { VehicleTypeList } from "./views/Pages/Site Management/VehicleList/VehicleType/VehicleTypeList"
import { VehicleBrandList } from "./views/Pages/Site Management/VehicleList/VehicleBrand/VehicleBrandList"
import { VehicleModelList } from "./views/Pages/Site Management/VehicleList/VehicleModel/VehicleModelList"
import { VehicleYearsList } from "./views/Pages/Site Management/VehicleList/VehicleYear/VehicleYearsList"
<<<<<<< HEAD
import ProductAdd from "./views/Pages/Site Management/VehicleAdd/ProductAdd/ProductAdd"
=======
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797

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
<<<<<<< HEAD
          <Route path='/header' element={<Header />}></Route>
          <Route path='/new_product_add' element={<NewProductAdd />} />
          <Route path='/stocklist' element={<StockList />} />
          <Route path='management' element={<Management />}>
            <Route path='panel_menu' element={<PanelMenu />} />
            <Route path='management_new_product_add' element={<ProductAdd />} />
=======
          <Route path='/header' element={<Header />} />
          <Route path='/' element={<YeniÜrünEkle />} />
          <Route path='/stockliste' element={<StockListe />} />
          <Route path='management' element={<Yonetim />}>
            <Route path='panel_menu' element={<PanelMenu />} />
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
            <Route path='add_vehicle_type' element={<VehicleType />} />
            <Route path='add_vehicle_brand' element={<VehicleBrand />} />
            <Route path='add_vehicle_model' element={<VehicleModel />} />
            <Route path='add_vehicle_years' element={<VehicleYears />} />
            <Route path='vehicle_type_list' element={<VehicleTypeList />} />
            <Route path='vehicle_brand_list' element={<VehicleBrandList />} />
            <Route path='vehicle_model_list' element={<VehicleModelList />} />
            <Route path='vehicle_year_list' element={<VehicleYearsList />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
