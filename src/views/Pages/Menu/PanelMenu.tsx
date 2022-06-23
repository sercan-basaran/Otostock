import { PanelMenu } from "primereact/panelmenu"
import { useNavigate } from "react-router-dom"

function PanelMEnu() {
  let navigate = useNavigate()
  const items = [
    {
      label: "Ürün Ekle",
      icon: "pi  pi-shopping-cart",
      items: [
        {
          label: "Ekle",
          icon: "pi  pi-plus",
          command: () => {
            navigate("management_new_product_add")
          },
        },
        {
          label: "Liste",
          icon: "pi pi-list",
          command: () => {
            navigate("management_new_product_list")
          },
        },
      ],
    },
    {
      label: "Araç Tipi",
      icon: "pi pi-car",
      items: [
        {
          label: "Ekle",
          icon: "pi  pi-plus",
          command: () => {
            navigate("add_vehicle_type")
          },
        },

        {
          label: "Liste",
          icon: "pi pi-list",
          command: () => {
            navigate("vehicle_type_list")
          },
        },
      ],
    },
    {
      label: "Araç Markası",
      icon: "pi pi-car",
      items: [
        {
          label: "Ekle",
          icon: "pi  pi-plus",
          command: () => {
            navigate("add_vehicle_trademark")
          },
        },

        {
          label: "Liste",
          icon: "pi pi-list",
          command: () => {
            navigate("vehicle_trademark_list")
          },
        },
      ],
    },
    {
      label: "Araç Modeli",
      icon: "pi pi-car",
      items: [
        {
          label: "Ekle",
          icon: "pi  pi-plus",
          command: () => {
            navigate("add_vehicle_model")
          },
        },

        {
          label: "Liste",
          icon: "pi pi-list",
          command: () => {
            navigate("vehicle_model_list")
          },
        },
      ],
    },
  ]

  return (
    <div>
      <PanelMenu model={items} style={{ width: "300px" }} />
    </div>
  )
}

export default PanelMEnu
