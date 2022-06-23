import axios from 'axios'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Toast } from 'primereact/toast'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import '../PanelButon.css'

export const VehicleModel = () => {
  const [vehicleModelName, setVehicleModelName] = useState<undefined | string>()
  const [vehiclesModelId, setVehicleModelId] = useState<null>()
  let location: History['state'] = useLocation()
  let navigate = useNavigate()
  const toast: any = useRef()

  const CreateOrUpdateVehicleModel = async () => {
    if (vehiclesModelId) {
      await axios
        .put(
          'http://localhost:8000/core/model/{id}/edit/'.replace(
            '{id}',
            vehiclesModelId
          ),
          {
            name: vehicleModelName,
            trademark: 7,
          }
        )
        .then((res) => {
          toast.current.show({
            severity: 'error',
            summary: 'Uyarı',
            detail: 'Model Başarı İle Düzeltildi',
            life: 3000,
          })
        })
    } else {
      await axios
        .post('http://localhost:8000/core/model/create/', {
          name: vehicleModelName,
          trademark: 7,
        })
        .then((res) => {
          toast.current.show({
            severity: 'success',
            summary: 'Başarı',
            detail: 'Model Başarı İle Eklendi',
            life: 3000,
          })
        })
    }

    navigate('/management/add_vehicle_model')
  }

  const getModel = async (id: string) => {
    const response = await axios.get(
      'http://localhost:8000/core/model/{id}/edit/'.replace('{id}', id)
    )
    setVehicleModelName(response.data.name)
  }

  useEffect(() => {
    console.log('navigate kısmından gelen parametre', location)
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
        <div className='p-fluid' style={{ marginTop: '-20px' }}>
          <div className='field'>
            <span className='p-float-label'>
              <h3>Araç Modeli {vehiclesModelId ? 'Düzenle' : 'Ekle'}</h3>
              <InputText
                type='text'
                id='model'
                name='model'
                value={vehicleModelName}
                onChange={(e) => setVehicleModelName(e.target.value)}
                className='mt-3'
                style={{ width: '600px' }}
              />
            </span>
          </div>
          <div>
            <Toast ref={toast} />
            <Button
              onClick={CreateOrUpdateVehicleModel}
              label={vehiclesModelId ? 'Düzenle' : 'Kaydet'}
              className='mt-8'
              style={{ width: '100px', marginLeft: '500px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
