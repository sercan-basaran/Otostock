import axios from 'axios'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Toast } from 'primereact/toast'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import '../PanelButon.css'
export function VehicleTrademark() {
  let location: History['state'] = useLocation()
  let navigate = useNavigate()
  const [trademarkName, setTrademarkName] = useState<undefined | string>()
  const [trademarkId, setTrademarkId] = useState<null>()
  const toast: any = useRef()

  const createOrUpdateVehicleTrademark = async () => {
    if (trademarkId) {
      await axios
        .put(
          'http://localhost:8000/core/trademark/{id}/edit/'.replace(
            '{id}',
            trademarkId
          ),
          {
            name: trademarkName,
            vechile_type: 5,
          }
        )

        .then((res) =>
          toast.current.show({
            severity: 'error',
            summary: 'Uyarı',
            detail: 'Marka Başarı İle Düzeltildi',
            life: 3000,
          })
        )
      navigate('')
    } else {
      await axios
        .post('http://localhost:8000/core/trademark/create/', {
          name: trademarkName,
          vechile_type: 5,
        })
        .then((res) =>
          toast.current.show({
            severity: 'success',
            summary: 'Başarı',
            detail: 'Marka Başarı İle Eklendi',
            life: 3000,
          })
        )
    }

    navigate('/management/add_vehicle_trademark')
  }

  const getTrademark = async (id: string) => {
    const response = await axios.get(
      'http://localhost:8000/core/trademark/{id}/edit/'.replace('{id}', id)
    )
    setTrademarkName(response.data.name)
  }

  useEffect(() => {
    console.log('navigate kısmından gelen parametre', location)
    if (location.state && location.state.vehicleTrademarkId) {
      setTrademarkId(location.state.vehicleTrademarkId)
      getTrademark(location.state.vehicleTrademarkId)
    } else {
      setTrademarkId(null)
    }
  }, [])

  return (
    <div className='border p-4'>
      <div className='flex '>
        <div className='card' />
        <div className='p-fluid' style={{ marginTop: '-20px' }}>
          <div className='field'>
            <span className='p-float-label'>
              <h3>Araç Markası {trademarkId ? 'Düzenle' : 'Ekle'}</h3>
              <InputText
                id='model'
                name='model'
                type='text'
                value={trademarkName}
                onChange={(e) => setTrademarkName(e.target.value)}
                className='mt-3'
                style={{ width: '600px' }}
              />
            </span>
          </div>
          <div>
            <Toast ref={toast} />
            <Button
              onClick={createOrUpdateVehicleTrademark}
              label={trademarkId ? 'Düzenle' : 'Kaydet'}
              className='mt-8'
              style={{ width: '100px', marginLeft: '500px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
