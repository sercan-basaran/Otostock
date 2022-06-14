import axios from "axios"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "../PanelButon.css"

export function VehicleModel() {
  const [vehicleModelName, setVehicleModelName]: any = useState()
  const [vehicleModelId, setVehicleModelId]: any = useState()
  let location: any = useLocation()
  let navigate = useNavigate()

  const CreateOrUpdateVehicleBrand = async () => {
    if (vehicleModelId) {
      await axios.put(
        "http://localhost:8000/core/model/{id}/edit/".replace(
          "{id}",
          vehicleModelId
        ),
        {
          marka_Id: 530,
          modelName: vehicleModelName,
        }
      )
    } else {
      await axios.post("http://localhost:8000/core/model/create/", {
        marka_Id: 530,
        modelName: vehicleModelName,
      })
    }

    navigate("/yonetim/add_vehicle_model")
  }

  const getModel = async (id: any) => {
    const response = await axios.get(
      "http://localhost:8000/core/model/{id}/edit/".replace("{id}", id)
    )
    setVehicleModelName(response.data.modelName)
  }

  useEffect(() => {
    console.log("navigate kısmından gelen parametre", location)
    if (location.state && location.state.vechileModelId) {
      setVehicleModelId(location.state.vechileModelId)
      getModel(location.state.vechileModelId)
    } else {
      setVehicleModelId(null)
    }
  }, [])

  return (
    <div className='border p-4'>
      <div className='flex '>
        <div className='card' />
        <div className='p-fluid' style={{ marginTop: "-20px" }}>
          <div className='field'>
            <span className='p-float-label'>
              <h3>Araç Modeli {vehicleModelId ? "Düzenle" : "Ekle"}</h3>
              <InputText
                type='text'
                id='model'
                name='model'
                value={vehicleModelName}
                onChange={(e) => setVehicleModelName(e.target.value)}
                className='mt-3'
                style={{ width: "600px" }}
              />
            </span>
          </div>
          <Button
            onClick={CreateOrUpdateVehicleBrand}
            label={vehicleModelId ? "Düzenle" : "Kaydet"}
            className='mt-8'
            style={{ width: "100px", marginLeft: "500px" }}
          />
        </div>
      </div>
    </div>
  )
}
