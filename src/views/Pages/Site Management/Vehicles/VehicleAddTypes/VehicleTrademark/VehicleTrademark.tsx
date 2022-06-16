import axios from "axios"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Toast } from "primereact/toast"
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import "../PanelButon.css"
export function VehicleTrademark(props: any) {
  let location: any = useLocation()
  let navigate: any = useNavigate()
  const [brandName, setBrandName]: any = useState()
  const [branId, setBrandId]: any = useState()
  const toast: any = useRef()

  interface CreateVhicleTRademark {
    name: typeof brandName
    vechile_type: typeof branId
  }
  const createOrUpdateVehicleBrand: any = async () => {
    if (branId) {
      await axios
        .put(
          "http://localhost:8000/core/trademark/{id}/edit/".replace(
            "{id}",
            branId
          ),
          {
            name: brandName,
            vechile_type: 38,
          }
        )

        .then((res) =>
          toast.current.show({
            severity: "error",
            summary: "Uyarı",
            detail: "Marka Başarı İle Düzeltildi",
            life: 3000,
          })
        )
      navigate("")
    } else {
      await axios
        .post("http://localhost:8000/core/trademark/create/", {
          name: brandName,
          vechile_type: branId,
        })
        .then((res) =>
          toast.current.show({
            severity: "success",
            summary: "Başarı",
            detail: "Marka Başarı İle Eklendi",
            life: 3000,
          })
        )
    }

    navigate("/management/add_vehicle_trademark")
  }

  const getBrand = async (id: any) => {
    const response = await axios.get(
      "http://localhost:8000/core/trademark/{id}/edit/".replace("{id}", id)
    )
    setBrandName(response.data.name)
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
          <div>
            <Toast ref={toast} />
            <Button
              onClick={createOrUpdateVehicleBrand}
              label={branId ? "Düzenle" : "Kaydet"}
              className='mt-8'
              style={{ width: "100px", marginLeft: "500px" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
