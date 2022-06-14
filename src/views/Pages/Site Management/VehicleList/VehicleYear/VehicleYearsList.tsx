import axios from "axios"
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function VehicleYearsList() {
  let navigate = useNavigate()

  const [vehicleYearList, setVehicleYearLİst] = useState([])

  useEffect(() => {
    getYear()
  })

  const getYear = () => {
    axios.get("http://localhost:8000/core/model/list/").then((res) => {
      console.log(res)
      setVehicleYearLİst(res.data)
    })
  }

  const EditOrDeleteButton: any = (data: any) => {
    const EditButton = () => {
      navigate("/yonetim/add_vehicle_years", {
        state: { vehicleYearId: data.id },
      })
    }

    const DeleteButton = () => {
      axios
        .delete(
          "http://localhost:8000/core/model/{id}/delete/".replace(
            "{id}",
            data.id
          )
        )
        .then((res) => {
          getYear()
        })
    }
    return (
      <div>
        <Button onClick={EditButton}>Edit</Button>
        <Button onClick={DeleteButton} style={{ marginLeft: "20px" }}>
          Delete
        </Button>
      </div>
    )
  }

  return (
    <div>
      <DataTable
        value={vehicleYearList}
        stripedRows
        showGridlines
        responsiveLayout='scroll'
      >
        <Column field='modelName' header='Araç Yılı'></Column>
        <Column header='Edit' body={EditOrDeleteButton}></Column>
      </DataTable>
    </div>
  )
}
