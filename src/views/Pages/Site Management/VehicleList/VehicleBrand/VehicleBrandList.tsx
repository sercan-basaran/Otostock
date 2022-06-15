import axios from "axios"
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function VehicleBrandList() {
  let navigate = useNavigate()
  const [vehiclebrand, setVehicleBrand]: any = useState([])
  useEffect(() => {
    getVechiles()
  }, [])

  const getVechiles: any = function () {
    axios
      .get("http://localhost:8000/core/marka/list/")
      .then((res) => {
        setVehicleBrand(res.data)
      })
      .catch((error) => console.log(error))
  }

  const OnEditBrand: any = (data: any) => {
    console.log("Tablodan gelen row datası ", data)
    const EditButton = () => {
<<<<<<< HEAD
      navigate("/management/add_vehicle_brand", {
=======
      navigate("/yonetim/add_vehicle_brand", {
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
        state: { vechileBrandId: data.id },
      })
    }

    const DeleteButton = () => {
      axios
        .delete(
          "http://localhost:8000/core/marka/{id}/delete/".replace(
            "{id}",
            data.id
          )
        )
        .then((response) => {
          getVechiles()
        })
    }

    return (
      <div>
        <Button onClick={EditButton}>Edit</Button>
        <Button onClick={DeleteButton} style={{ marginLeft: "10px" }}>
          Remove
        </Button>
      </div>
    )
  }

  return (
    <div>
      <DataTable
        value={vehiclebrand}
        stripedRows
        showGridlines
        responsiveLayout='scroll'
      >
        <Column field='markaName' header='Araç Markası Adı'></Column>
        <Column header='Edit' body={OnEditBrand}></Column>
      </DataTable>
    </div>
  )
}
