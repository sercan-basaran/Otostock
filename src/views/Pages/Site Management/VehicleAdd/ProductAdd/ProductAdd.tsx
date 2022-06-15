import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"
import { Dropdown } from "primereact/dropdown"
import { InputText } from "primereact/inputtext"
import React, { useState } from "react"
import ProductDialog from "./ProductDialog"

function ProductAdd() {
  const [vehicleProductName, setVehicleProductName]: any = useState()
  const [selectedVehicleProductName, setSelectedVehicleProductName] = useState()

  return (
    <div>
      Ürün Adı
      <br />
      <br />
      <InputText
        name={vehicleProductName}
        placeholder='Ürün Giriniz...'
        onChange={(e) => setVehicleProductName(e.target.value)}
        style={{ width: "400px" }}
      />
      <br />
      <br />
      Kategori
      <br />
      <br />
      <Dropdown
        value={selectedVehicleProductName}
        options={vehicleProductName}
        onChange={(e) => setSelectedVehicleProductName(e.value)}
        placeholder='Kategori Seçiniz...'
        style={{ width: "400px" }}
      />
      <br />
      <br />
      <ProductDialog />
    </div>
  )
}

export default ProductAdd
