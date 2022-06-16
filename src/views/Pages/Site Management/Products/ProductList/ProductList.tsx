import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"

function ProductList() {
  return (
    <div>
      <DataTable stripedRows showGridlines responsiveLayout='scroll'>
        <Column header='Ürün Adı'>
          <Column header='Marka1'></Column>
        </Column>
        <Column header='Uyumlu Markalar'></Column>
        <Column header='Uyumlu Modeller'></Column>
        <Column header='Motor Tipleri'></Column>
        <Column header='Yıllar'></Column>
        <Column header='Edit'></Column>
      </DataTable>
    </div>
  )
}

export default ProductList
