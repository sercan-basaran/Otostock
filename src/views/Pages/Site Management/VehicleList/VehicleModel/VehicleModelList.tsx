import axios from "axios"
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function VehicleModelList() {
  const [modelVehicleList, setVehicleModelList]: any = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getModel()
  }, [])

  const getModel: any = () => {
    axios
      .get("http://localhost:8000/core/model/list/")
      .then((res) => {
        setVehicleModelList(res.data)
      })
      .catch((error) => console.log(error))
  }

  const EditOrDeleteButton = (data: any) => {
    const EditButton = () => {
<<<<<<< HEAD
      navigate("/management/add_vehicle_model", {
=======
      navigate("/yonetim/add_vehicle_model", {
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
        state: { vechileModelId: data.id },
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
          getModel()
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
      <div>
        <DataTable
          value={modelVehicleList}
          stripedRows
          showGridlines
          responsiveLayout='scroll'
        >
          <Column field='modelName' header='Araç Model Adı'></Column>
          <Column header='Edit' body={EditOrDeleteButton}></Column>
        </DataTable>
      </div>
    </div>
  )
}
