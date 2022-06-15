import axios from "axios"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "../PanelButon.css"

export function VehicleYears() {
  const [vehicleYear, setVehicleYear]: any = useState()
  const [vehicleYearsId, setVehicleYearsId]: any = useState()
  let location: any = useLocation()
  let navigate = useNavigate()

  const CreateOrUpdateVehicleBrand = async () => {
    if (vehicleYearsId) {
      await axios.put(
        "http://localhost:8000/core/model/{id}/edit/".replace(
          "{id}",
          vehicleYearsId
        ),
        {
          marka_Id: 530,
          modelName: vehicleYear,
        }
      )
    } else {
      await axios.post("http://localhost:8000/core/model/create/", {
        marka_Id: 530,
        modelName: vehicleYear,
      })
    }

<<<<<<< HEAD
    navigate("/management/add_vehicle_model")
=======
    navigate("/yonetim/add_vehicle_model")
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
  }

  const getYear = async (id: any) => {
    const response = await axios.get(
      "http://localhost:8000/core/model/{id}/edit/".replace("{id}", id)
    )
    setVehicleYear(response.data.modelName)
  }

  useEffect(() => {
    console.log("navigate kısmından gelen parametre", location)
    if (location.state && location.state.vechileModelId) {
      setVehicleYearsId(location.state.vechileModelId)
      getYear(location.state.vechileModelId)
    } else {
      setVehicleYearsId(null)
    }
  }, [])

  return (
    <div className='border p-4'>
      <div className='flex '>
        <div className='card' />
        <div className='p-fluid' style={{ marginTop: "-20px" }}>
          <div className='field'>
            <span className='p-float-label'>
              <h3>Araç Yılı {vehicleYearsId ? "Düzenle" : "Ekle"}</h3>
              <InputText
                type='text'
                id='model'
                name='model'
                value={vehicleYear}
                onChange={(e) => setVehicleYear(e.target.value)}
                className='mt-3'
                style={{ width: "600px" }}
              />
            </span>
          </div>
          <Button
            onClick={CreateOrUpdateVehicleBrand}
            label={vehicleYearsId ? "Düzenle" : "Kaydet"}
            className='mt-8'
            style={{ width: "100px", marginLeft: "500px" }}
          />
        </div>
      </div>
    </div>
  )
}
