import { useState } from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"

import { InputNumber } from "primereact/inputnumber"
import { DialogDemo } from "../Menu/Dialog"
import Products from "./Products"

const DataTablePaginatorDemo = () => {
  const [multiSortMeta, setMultiSortMeta]: any = useState([
    { field: "category", order: -1 },
  ])
  const [selectedProducts, setSelectedProducts] = useState(null)

  const paginatorLeft = (
    <Button type='button' icon='pi pi-refresh' className='p-button-text' />
  )
  const paginatorRight = (
    <Button type='button' icon='pi pi-cloud' className='p-button-text' />
  )

  const imageBodyTemplate = (rowData: any) => {
    return (
      <img
        src='https://iyi9.com/wp-content/uploads/2021/07/fren-balatasi-disk-takimi.jpg'
        onError={(e) =>
          ((e.target as HTMLSourceElement).src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={rowData.image}
        className='product-image'
        style={{ width: "100px" }}
      />
    )
  }

  const isPositiveInteger = (val: any) => {
    let str = String(val)
    str = str.trim()
    if (!str) {
      return false
    }
    str = str.replace(/^0+/, "") || "0"
    let n = Math.floor(Number(str))
    return n !== Infinity && String(n) === str && n >= 0
  }

  const priceEditor = (options: any) => {
    return (
      <InputNumber
        value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode='currency'
        currency='USD'
        locale='en-US'
      />
    )
  }

  const textEditor = (options: any) => {
    return (
      <InputText
        type='text'
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    )
  }

  const onCellEditComplete = (e: any) => {
    let { rowData, newValue, field, originalEvent: event } = e

    switch (field) {
      case "quantity":
      case "price":
        if (isPositiveInteger(newValue)) rowData[field] = newValue
        else event.preventDefault()
        break

      default:
        if (newValue.trim().length > 0) rowData[field] = newValue
        else event.preventDefault()
        break
    }
  }
  const cellEditor = (options: any) => {
    if (options.field === "price") return priceEditor(options)
    else return textEditor(options)
  }

  const Detay = () => {
    return (
      <button>
        <DialogDemo />
      </button>
    )
  }
  return (
    <div>
      <div className='card'>
        <DataTable
          value={Products}
          paginator
          showGridlines
          stripedRows
          sortMode='multiple'
          sortField='category'
          responsiveLayout='scroll'
          removableSort
          multiSortMeta={multiSortMeta}
          selection={selectedProducts}
          selectionPageOnly
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          onSort={(e) => setMultiSortMeta(e.multiSortMeta)}
          editMode='cell'
          className='editable-cells-table'
          filterDisplay='row'
          paginatorTemplate='CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
          currentPageReportTemplate='Showing {first} to {last} of {totalRecords}'
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
        >
          <Column selectionMode='multiple'></Column>
          <Column
            field='name'
            header='Aciklama'
            style={{ height: "5%" }}
            sortable
            headerStyle={{ width: "3em" }}
            onCellEditComplete={onCellEditComplete}
            editor={(options) => cellEditor(options)}
          ></Column>
          <Column
            body={imageBodyTemplate}
            header='Resim'
            // style={{ width: "5%" }}
            sortable
          ></Column>
          <Column
            field='company'
            header='Uyumlu Modeller'
            // style={{ width: "10%" }}
            sortable
          ></Column>
          <Column
            field='representative.name'
            header='Bulundugu Yer'
            // style={{ width: "5%" }}
            sortable
          ></Column>
          <Column header='Kategori' sortable></Column>
          <Column header='detay' body={Detay}></Column>
        </DataTable>
      </div>
    </div>
  )
}

export default DataTablePaginatorDemo
