import React, { useEffect, useState, useRef } from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import axios from 'axios'
import { replace } from 'formik'
import { Toast } from 'primereact/toast'
import { useNavigate } from 'react-router-dom'
function ProductDialog(props) {
  const [vehicleProductDialog, setVehicleProductDialog] = useState(false)
  const [dropdownVehicleType, setDropdownVehicleType] = useState()
  const [selectedDropdownVehicleType, setSelectedDropdownVehicleType] =
    useState()
  const [dropdownTrademarkType, setDropdownTrademarkType] = useState()
  const [selectedDropdownTrademarkType, setSelectedDropdownTrademarkType] =
    useState()
  const [dropdownModelType, setDropdownModelType] = useState()
  const [selectedDropdownModelType, setSelectedDropdownModelType] = useState()
  const [dropdownEngineType, setDropdownEngineType] = useState()
  const [selectedDropdownEngineType, setSelectedDropdownEngineType] = useState()
  const [dropdownYearStart, setDropdownYearStart] = useState()
  const [selectedDropdownYearStart, setSelectedDropdownYearStart] = useState()
  const [dropdownYearEnd, setDropdownYeraEnd] = useState()
  const [selectedDropdownYearEnd, setSelectedDropdownYearEnd] = useState()
  const [supportedVechile, setSupportedVehicle] = useState([])

  const toast = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    getSupportedVehicle()
  }, [])

  const getSupportedVehicle = () => {
    axios
      .get('http://localhost:8000/core/supported_vechile/list/')
      .then((res) => {
        console.log(res.data)
        setSupportedVehicle(res.data)
      })
  }

  const CreateButtonSupportVehicle = async () => {
    await axios
      .post('http://localhost:8000/core/supported_vechile/create/', {
        product: 1,
        vechile_type: 1,
        trademark: 1,
        model: 1,
        start_year: 2021,
        end_year: 2022,
        engine: 1,
      })
      .then((res) => getSupportedVehicle())
  }
  const dialogMap = {
    vehicleProductDialog: setVehicleProductDialog,
  }

  const openSupportedVechileDialog = async () => {
    const response = await axios.get(
      'http://localhost:8000/core/vechile_type/list/'
    )
    console.log('Backend vechiletype', response)
    setDropdownVehicleType(response.data)
    setVehicleProductDialog(true)
  }

  const onHide = () => {
    setVehicleProductDialog(false)
  }

  const vechileTypeOnChange = async (e) => {
    setSelectedDropdownVehicleType(e.value)
    const response = await axios.get(
      'http://localhost:8000/core/trademark/list/?vechile_type=' + e.value
    )
    console.log('Araç tipine baglı markalar geldi', response)
    setDropdownTrademarkType(response.data)
  }

  const vechileTrademarkOnchange = async (e) => {
    setSelectedDropdownTrademarkType(e.value)

    const response = await axios.get(
      'http://localhost:8000/core/model/list/?trademark=' + e.value
    )
    setDropdownModelType(response.data)
  }

  const vechileModelOnChange = async (e) => {
    setSelectedDropdownModelType(e.value)
  }

  const renderFooter = (name) => {
    return (
      <div>
        <Toast ref={toast} />
        <Button
          label='Hayır'
          icon='pi pi-times'
          onClick={() => onHide(name)}
          className='p-button-text'
        />
        <Button
          label='Kaydet'
          icon='pi pi-check'
          onClick={() => {
            toast.current.show({
              severity: 'error',
              summary: 'Uyarı',
              detail: 'Uyumlu Araç Başarı İle Eklendi',
              life: 3000,
            })
            CreateButtonSupportVehicle()

            setTimeout(() => {
              onHide(name)
            }, 1000)
            navigate('/management/management_new_product_add')
          }}
          autoFocus
        />
      </div>
    )
  }

  const EditOrDeleteButton = (data) => {
    const EditButton = () => {
      axios
        .put(
          'http://localhost:8000/core/supported_vechile/{id}/delete/'.replace(
            '{id}',
            data.id
          )
        )
        .then((res) => getSupportedVehicle)
    }
    const DeleteButton = () => {
      axios
        .delete(
          'http://localhost:8000/core/supported_vechile/{id}/delete/'.replace(
            '{id}',
            data.id
          )
        )
        .then((res) => {
          // toast.current.show({
          //   severity: "error",
          //   summary: "Uyarı",
          //   detail: "Uyumlu Araç Başarı İle Silindi",
          //   life: 3000
          // })

          getSupportedVehicle()
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
    <div className='dialog-demo'>
      <div className='card'>
        <h3>Uyumlu Araçlar</h3>
        <Button
          disabled={props.product.id == null}
          style={{ marginLeft: '1000px', marginTop: '-50px' }}
          onClick={() => openSupportedVechileDialog()}
        >
          Uyumulu Araç Ekle
        </Button>
        <br />
        <br />
        <DataTable
          stripedRows
          showGridlines
          responsiveLayout='scroll'
          value={supportedVechile}
        >
          <Column field='vechile_type.name' header='Araç Tipi'></Column>
          <Column field='trademark.name' header='Marka'></Column>
          <Column field='model.name' header='Model'></Column>
          <Column field='engine.name' header='Motor'></Column>
          <Column field='start_year' header='Başlangıç Yılı'></Column>
          <Column field='end_year' header='Bitiş Yılı'></Column>
          <Column header='Edit' body={EditOrDeleteButton}></Column>
        </DataTable>
        <Dialog
          header='Uyumlu Araç Ekle'
          visible={vehicleProductDialog}
          onHide={() => onHide('vehicleProductDialog')}
          breakpoints={{ '960px': '75vw' }}
          style={{ width: '50vw' }}
          footer={renderFooter('vehicleProductDialog')}
        >
          <div className='p-fluid grid'>
            <div className='col-4'>
              <div className='field '>
                Araç Tipi
                <Dropdown
                  showClear
                  placeholder='Araç Tipi Seçiniz...'
                  value={selectedDropdownVehicleType}
                  options={dropdownVehicleType}
                  onChange={(e) => vechileTypeOnChange(e)}
                  optionLabel='name'
                  optionValue='id'
                />
              </div>
              <div className='field '>
                Marka
                <Dropdown
                  showClear
                  placeholder='Marka Seçiniz...'
                  value={selectedDropdownTrademarkType}
                  options={dropdownTrademarkType}
                  onChange={(e) => vechileTrademarkOnchange(e)}
                  optionLabel='name'
                  optionValue='id'
                />
              </div>
              <div className='field '>
                Model
                <Dropdown
                  showClear
                  multiple
                  placeholder='Model Seçiniz...'
                  value={selectedDropdownModelType}
                  options={dropdownModelType}
                  onChange={(e) => vechileModelOnChange(e)}
                  optionLabel='name'
                  optionValue='id'
                />
              </div>
              <div className='field '>
                Motor
                <InputText
                  showClear
                  placeholder='Motor Seçiniz...'
                  value={selectedDropdownEngineType}
                  options={dropdownEngineType}
                  onChange={(e) =>
                    setSelectedDropdownEngineType(e.target.value)
                  }
                  optionLabel='name'
                  optionValue='id'
                />
              </div>
              <div className='field '>
                Başlangıç Yılı
                <InputText
                  showClear
                  placeholder='Başlangıç Yılı Giriniz...'
                  value={selectedDropdownYearStart}
                  options={dropdownYearStart}
                  onChange={(e) => setSelectedDropdownYearStart(e.target.value)}
                  optionLabel='name'
                  optionValue='id'
                />
              </div>
              <div className='field '>
                Bitiş Yılı
                <InputText
                  showClear
                  placeholder='Bitşi Yılı Giriniz...'
                  value={selectedDropdownYearEnd}
                  options={dropdownYearEnd}
                  onChange={(e) => setSelectedDropdownYearEnd(e.target.value)}
                  optionLabel='name'
                  optionValue='id'
                />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  )
}

export default ProductDialog
