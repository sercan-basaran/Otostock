<<<<<<< HEAD
import { useState } from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
=======
import React, { useState } from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Button } from "primereact/button"
import { Ripple } from "primereact/ripple"
import { Dropdown } from "primereact/dropdown"
import { InputText } from "primereact/inputtext"
import { classNames } from "primereact/utils"
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
import { InputNumber } from "primereact/inputnumber"
import { DialogDemo } from "../Menu/Dialog"
import Products from "./Products"

const DataTablePaginatorDemo = () => {
<<<<<<< HEAD
=======
  const [first1, setFirst1] = useState(0)

  const [currentPage, setCurrentPage]: any = useState(1)
  const [pageInputTooltip, setPageInputTooltip] = useState(
    "Press 'Enter' key to go to this page."
  )
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
  const [multiSortMeta, setMultiSortMeta]: any = useState([
    { field: "category", order: -1 },
  ])
  const [selectedProducts, setSelectedProducts] = useState(null)

<<<<<<< HEAD
=======
  const onCustomPage1 = (event: any) => {
    setFirst1(event.first)
    setCurrentPage(event.page + 1)
  }

  const onPageInputKeyDown = (event: any, options: any) => {
    if (event.key === "Enter") {
      const page: any = parseInt(currentPage)
      if (page < 1 || page > options.totalPages) {
        setPageInputTooltip(
          `Value must be between 1 and ${options.totalPages}.`
        )
      } else {
        const first: any = currentPage ? options.rows * (page - 1) : 0

        setFirst1(first)
        setPageInputTooltip("Press 'Enter' key to go to this page.")
      }
    }
  }

  const onPageInputChange = (event: any) => {
    setCurrentPage(event.target.value)
  }

>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
  const paginatorLeft = (
    <Button type='button' icon='pi pi-refresh' className='p-button-text' />
  )
  const paginatorRight = (
    <Button type='button' icon='pi pi-cloud' className='p-button-text' />
  )
<<<<<<< HEAD
=======
  const template1: any = {
    layout:
      "PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport",
    PrevPageLink: (options: any) => {
      return (
        <button
          type='button'
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className='p-3'>Previous</span>
          <Ripple />
        </button>
      )
    },
    NextPageLink: (options: any) => {
      return (
        <button
          type='button'
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className='p-3'>Next</span>
          <Ripple />
        </button>
      )
    },
    PageLinks: (options: any) => {
      if (
        (options.view.startPage === options.page &&
          options.view.startPage !== 0) ||
        (options.view.endPage === options.page &&
          options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { "p-disabled": true })

        return (
          <span className={className} style={{ userSelect: "none" }}>
            ...
          </span>
        )
      }

      return (
        <button
          type='button'
          className={options.className}
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      )
    },
    RowsPerPageDropdown: (options: any) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: "All", value: options.totalRecords },
      ]

      return (
        <Dropdown
          value={options.value}
          options={dropdownOptions}
          onChange={options.onChange}
        />
      )
    },
    CurrentPageReport: (options: any) => {
      return (
        <span
          className='mx-3'
          style={{ color: "var(--text-color)", userSelect: "none" }}
        >
          Go to{" "}
          <InputText
            size={2}
            className='ml-1'
            value={currentPage}
            tooltip={pageInputTooltip}
            onKeyDown={(e) => onPageInputKeyDown(e, options)}
            onChange={onPageInputChange}
          />
        </span>
      )
    },
  }
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797

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
<<<<<<< HEAD
=======
          onPage={onCustomPage1}
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
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
<<<<<<< HEAD
=======
          first={first1}
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
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
