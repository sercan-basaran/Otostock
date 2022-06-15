import React, { useEffect, useState } from "react"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import { Dropdown } from "primereact/dropdown"
import { InputText } from "primereact/inputtext"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import axios from "axios"
function ProductDialog() {
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
  const [vehicleYear, setVehicleYear] = useState()
  const [datatableEditButton, setDatatableEditButton] = useState()

  useEffect(() => {
    getModel()
  }, [])

  const getModel = () => {
    axios
      .get("http://localhost:8000/core/model/list/")
      .then((res) => {
        setDatatableEditButton(res.data)
      })
      .catch((error) => console.log(error))
  }

  const dialogMap = {
    vehicleProductDialog: setVehicleProductDialog,
  }

  const onClick = (name) => {
    dialogMap[`${name}`](true)
  }

  const onHide = (name) => {
    dialogMap[`${name}`](false)
  }

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label='Hayır'
          icon='pi pi-times'
          onClick={() => onHide(name)}
          className='p-button-text'
        />
        <Button
          label='Kaydet'
          icon='pi pi-check'
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    )
  }

  const EditOrDeleteButton = (data) => {
    const EditButton = () => {
      axios.put(
        "http://localhost:8000/core/model/{id}/edit/".replace("{id}", data.id),
        { marka_Id: 530, markaName: "" }
      )
    }
    const DeleteButton = () => {
      axios
        .delete(
          "http://localhost:8000/core/model/{id}/delete/".replace(
            "{id}",
            data.id
          )
        )
        .then((res) => {
          getModel()
        })
    }
    return (
      <div>
        <Button onClick={EditButton}>Edit</Button>
        <Button onClick={DeleteButton} style={{ marginLeft: "20px" }}>
          Delete
        </Button>
      </div>
    )
  }

  const items = [
    {
      label: "mEHABA",
    },
  ]

  return (
    <div className='dialog-demo'>
      <div className='card'>
        <h3>Uyumlu Araçlar</h3>
        <Button
          style={{ marginLeft: "1000px", marginTop: "-50px" }}
          onClick={() => onClick("vehicleProductDialog")}
        >
          Uyumulu Araç Ekle
        </Button>
        <br />
        <br />
        <DataTable
          stripedRows
          showGridlines
          responsiveLayout='scroll'
          value={datatableEditButton}
        >
          <Column field='modelName' header='Araç Tipi'></Column>
          <Column field='' header='Marka'></Column>
          <Column field='' header='Model'></Column>
          <Column field='' header='Motor'></Column>
          <Column field='' header='Başlangıç Yılı'></Column>
          <Column field='' header='Bitiş Yılı'></Column>
          <Column header='Edit' body={EditOrDeleteButton}></Column>
        </DataTable>
        <Dialog
          header='Uyumlu Araç Ekle'
          visible={vehicleProductDialog}
          onHide={() => onHide("vehicleProductDialog")}
          breakpoints={{ "960px": "75vw" }}
          style={{ width: "50vw" }}
          footer={renderFooter("vehicleProductDialog")}
        >
          <div className='p-4'>
            Araç Tipi
            <br />
            <Dropdown
              showClear
              placeholder='Araç Tipi Seçiniz...'
              value={selectedDropdownVehicleType}
              options={dropdownVehicleType}
              onChange={(e) => setSelectedDropdownVehicleType(e.value)}
              optionLabel={""}
              optionValue={""}
              style={{ width: "300px" }}
            />
            <br />
            <br />
            Marka
            <br />
            <Dropdown
              showClear
              placeholder='Marka Seçiniz...'
              value={selectedDropdownTrademarkType}
              options={dropdownTrademarkType}
              onChange={(e) => setSelectedDropdownTrademarkType(e.value)}
              optionLabel={""}
              optionValue={""}
              style={{ width: "300px" }}
            />
            <br />
            <br />
            Model
            <br />
            <Dropdown
              showClear
              multiple
              placeholder='Model Seçiniz...'
              value={selectedDropdownModelType}
              options={dropdownModelType}
              onChange={(e) => setSelectedDropdownModelType(e.value)}
              optionLabel={""}
              optionValue={""}
              style={{ width: "300px" }}
            />
            <br />
            <br />
            Motor
            <br />
            <Dropdown
              showClear
              placeholder='Motor Seçiniz...'
              value={selectedDropdownEngineType}
              options={dropdownEngineType}
              onChange={(e) => setSelectedDropdownEngineType(e.value)}
              optionLabel={""}
              optionValue={""}
              style={{ width: "300px" }}
            />
            <br />
            <br />
            Araç Yılı
            <br />
            <InputText
              placeholder='Aracın Yılını Giriniz...'
              value={vehicleYear}
              onChange={(e) => setVehicleYear(e.target.value)}
              style={{ width: "300px" }}
            />
          </div>
        </Dialog>
      </div>
    </div>
  )
}

export default ProductDialog
