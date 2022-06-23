import axios from 'axios'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Toast } from 'primereact/toast'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function VehicleTrademarkList() {
  const navigate = useNavigate()
  const [VehicleTrademark, setVehicleTrademark] = useState([])
  const toast: any = useRef()
  useEffect(() => {
    getVechiles()
  }, [])

  const getVechiles = () => {
    axios
      .get('http://localhost:8000/core/trademark/list/')
      .then((res) => {
        setVehicleTrademark(res.data)
      })
      .catch((error) => console.log(error))
  }

  const EditOrDeleteButton = (data: HTMLDataElement) => {
    console.log('Tablodan gelen row datası ', data)
    const EditButton = () => {
      navigate('/management/add_vehicle_trademark', {
        state: { vehicleTrademarkId: data.id },
      })
    }

    const DeleteButton = () => {
      axios
        .delete(
          'http://localhost:8000/core/trademark/{id}/delete/'.replace(
            '{id}',
            data.id
          )
        )
        .then((response) => {
          toast.current.show({
            severity: 'error',
            summary: 'Uyarı',
            detail: 'Araç Tipi Başarı İle silindi',
            life: 3000,
          })

          setInterval(() => {
            getVechiles()
          }, 1000)
        })
    }

    return (
      <div>
        <Toast ref={toast} />
        <Button onClick={EditButton}>Edit</Button>
        <Button onClick={DeleteButton} style={{ marginLeft: '20px' }}>
          Delete
        </Button>
      </div>
    )
  }

  return (
    <div>
      <DataTable
        value={VehicleTrademark}
        stripedRows
        showGridlines
        responsiveLayout='scroll'
      >
        <Column field='name' header='Araç Markası Adı'></Column>
        <Column header='Edit' body={EditOrDeleteButton}></Column>
      </DataTable>
    </div>
  )
}
