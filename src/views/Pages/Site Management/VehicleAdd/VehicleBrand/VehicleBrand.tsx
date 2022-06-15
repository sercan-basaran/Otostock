import axios from "axios"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useEffect, useState } from "react"
import "../PanelButon.css"
import { useLocation, useNavigate } from "react-router-dom"

export function VehicleBrand(props: any) {
  let location: any = useLocation()
<<<<<<< HEAD
  let navigate: any = useNavigate()
=======
  let navigate = useNavigate()
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797

  const [brandName, setBrandName]: any = useState()
  const [branId, setBrandId]: any = useState()

  const createOrUpdateVehicleBrand = async () => {
    if (branId) {
      await axios.put(
        "http://localhost:8000/core/marka/{id}/edit/".replace("{id}", branId),
        {
          markaName: brandName,
        }
      )
    } else {
      await axios.post("http://localhost:8000/core/marka/create/", {
        markaName: brandName,
      })
    }

<<<<<<< HEAD
    navigate("/management/add_vehicle_brand")
=======
    navigate("/yonetim/add_vehicle_brand")
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
  }

  const getBrand = async (id: any) => {
    const response = await axios.get(
      "http://localhost:8000/core/marka/{id}/edit/".replace("{id}", id)
    )
    setBrandName(response.data.markaName)
  }

  useEffect(() => {
    console.log("navigate kısmından gelen parametre", location)
    if (location.state && location.state.vechileBrandId) {
      setBrandId(location.state.vechileBrandId)
      getBrand(location.state.vechileBrandId)
    } else {
      setBrandId(null)
    }
  }, [])

  return (
    <div className='border p-4'>
      <div className='flex '>
        <div className='card' />
        <div className='p-fluid' style={{ marginTop: "-20px" }}>
          <div className='field'>
            <span className='p-float-label'>
              <h3>Araç Markası {branId ? "Düzenle" : "Ekle"}</h3>
              <InputText
                id='model'
                name='model'
                type='text'
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className='mt-3'
                style={{ width: "600px" }}
              />
            </span>
          </div>
          <Button
            onClick={createOrUpdateVehicleBrand}
            label={branId ? "Düzenle" : "Kaydet"}
            className='mt-8'
            style={{ width: "100px", marginLeft: "500px" }}
          />
        </div>
      </div>
    </div>
  )
}
