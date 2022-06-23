import axios from "axios"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { useEffect, useState } from "react"

function ProductList() {
  const [supportedVechile, setSupportedVehicle] = useState()

  useEffect(() => {
    getSupportedVehicle()
  }, [])
  const getSupportedVehicle = async () => {
    const response = await axios
      .get("http://localhost:8000/core/supported_vechile/list/")
      .then((res) => setSupportedVehicle(res.data))
  }
  return (
    <div>
      <DataTable
        value={supportedVechile}
        stripedRows
        showGridlines
        responsiveLayout='scroll'
      >
        <Column field='product.name' header='Ürün Adı'></Column>
        <Column field='trademark.name' header='Uyumlu Markalar'></Column>
        <Column field='model.name' header='Uyumlu Modeller'></Column>
        <Column field='engine.name' header='Motor Tipleri'></Column>
        <Column field='start_year' header='Yıllar'></Column>
        <Column field='end_year' header='Edit'></Column>
      </DataTable>
    </div>
  )
}

export default ProductList
