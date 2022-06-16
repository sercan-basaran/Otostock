import axios from "axios"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useEffect, useState, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Toast } from "primereact/toast"
import "../PanelButon.css"

export function VehicleType() {
  const [vehicleType, setVehicleType]: any = useState()
  const [vehiclesTypeId, setVehiclesTypeId]: any = useState()
  const toast: any = useRef(null)
  let location: any = useLocation()
  let navigate = useNavigate()

  const CreateOrUpdateVehicleBrand = async (data: any) => {
    if (vehiclesTypeId) {
      await axios
        .put(
          "http://localhost:8000/core/vechile_type/{id}/edit/".replace(
            "{id}",
            vehiclesTypeId
          ),
          {
            name: vehicleType,
          }
        )
        .then((res) =>
          toast.current.show({
            severity: "error",
            summary: "Uyarı",
            detail: "Araç Tipi Başarı İle Düzelti",
            life: 3000,
          })
        )
    } else {
      await axios
        .post("http://localhost:8000/core/vechile_type/create/", {
          name: vehicleType,
        })
        .then((res) =>
          toast.current.show({
            severity: "success",
            summary: "Başarı",
            detail: "Araç Tipi Başarı İle Eklendi",
            life: 3000,
          })
        )
    }
    navigate("/management/add_vehicle_type")
    // navigate("/management/add_vehicle_trademark", {
    //   state: { vehiclesTypeId: data.id },
    // })
    return (
      <div>
        <Toast ref={toast} />
      </div>
    )
  }

  const getType = async (id: any) => {
    const response = await axios.get(
      "http://localhost:8000/core/vechile_type/{id}/edit/".replace("{id}", id)
    )
    setVehicleType(response.data.name)
  }

  useEffect(() => {
    console.log("navigate kısmından gelen parametre", location)
    if (location.state && location.state.vehicleTypesId) {
      setVehiclesTypeId(location.state.vehicleTypesId)
      getType(location.state.vehicleTypesId)
    } else {
      setVehiclesTypeId(null)
    }
  }, [])

  return (
    <div className='border p-4'>
      <div className='flex '>
        <div className='card' />
        <div className='p-fluid' style={{ marginTop: "-20px" }}>
          <div className='field'>
            <span className='p-float-label'>
              <h3>Araç Tipi {vehiclesTypeId ? "Düzenle" : "Ekle"}</h3>
              <InputText
                type='text'
                id='id'
                name='name'
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className='mt-3'
                style={{ width: "600px" }}
              />
            </span>
          </div>
          <div>
            <Toast ref={toast} />
            <Button
              onClick={CreateOrUpdateVehicleBrand}
              label={vehiclesTypeId ? "Düzenle" : "Kaydet"}
              className='mt-8'
              style={{ width: "100px", marginLeft: "500px" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
