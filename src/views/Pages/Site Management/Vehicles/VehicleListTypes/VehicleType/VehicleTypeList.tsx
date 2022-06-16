import axios from "axios"
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { Toast } from "primereact/toast"
import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

export function VehicleTypeList() {
  const [vechileTypeList, setVechileTypeList]: any = useState([])
  const navigate = useNavigate()
  const toast: any = useRef(null)

  useEffect(() => {
    getModel()
  }, [])

  const getModel: any = () => {
    axios
      .get("http://localhost:8000/core/vechile_type/list/")
      .then((res) => {
        setVechileTypeList(res.data)
      })
      .catch((error) => console.log(error))
  }

  const EditOrDeleteButton = (data: any) => {
    const EditButton = () => {
      navigate("/management/add_vehicle_type", {
        state: { vehicleTypesId: data.id },
      })
    }
    const DeleteButton = () => {
      axios
        .delete(
          "http://localhost:8000/core/vechile_type/{id}/delete/".replace(
            "{id}",
            data.id
          )
        )
        .then((res) => {
          toast.current.show({
            severity: "error",
            summary: "Uyarı",
            detail: "Araç Tipi Başarı İle silindi",
            life: 3000,
          })

          setInterval(() => {
            getModel()
          }, 1000)
        })
    }
    return (
      <div>
        <Toast ref={toast} />
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
          value={vechileTypeList}
          stripedRows
          showGridlines
          responsiveLayout='scroll'
        >
          <Column field='name' header='Araç Tipi Adı'></Column>
          <Column header='Edit' body={EditOrDeleteButton}></Column>
        </DataTable>
      </div>
    </div>
  )
}
