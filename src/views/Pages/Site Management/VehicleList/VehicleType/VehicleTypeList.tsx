import axios from "axios"
import { useEffect, useState } from "react"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
export function VehicleTypeList() {
  const [vehicletypes, setVehicleTypes]: any = useState([])
  const [vehicletypes1, setVehicleTypes1]: any = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8000/core/category/1/")
      .then((res1) => setVehicleTypes1(res1.data))
      .catch((error) => console.log(error))
  })
  useEffect(() => {
    axios
      .get(`http://localhost:8000/core/category/list/`)
      .then((res) => {
        console.log(res)
        setVehicleTypes(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

<<<<<<< HEAD
=======
  const vehiclesget = () => {
    return (
      <div>
        {/* {vehicletypes.map((vehicles: any, i: any) => (
          <div key={i}>{vehicles.categoryName}</div>
        ))} */}
      </div>
    )
  }
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
  return (
    <div className='mt-1'>
      <h1>Araç Tipi</h1>
      <DataTable
        value={vehicletypes}
        responsiveLayout='scroll'
        stripedRows
        showGridlines
        filterDisplay='row'
      >
        <Column header='Kamyon' body={vehicletypes1.categoryName}></Column>
        <Column header='Araba' body={""}></Column>
        <Column header='Otobüs'></Column>
        <Column header='Motosiklet'></Column>
      </DataTable>
      <div></div>
    </div>
  )
}
