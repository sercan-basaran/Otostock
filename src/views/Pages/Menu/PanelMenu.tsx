import { PanelMenu } from "primereact/panelmenu"
import { useNavigate } from "react-router-dom"

function PanelMEnu() {
  let navigate = useNavigate()
  const items = [
    {
<<<<<<< HEAD
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
            navigate("")
          },
        },
      ],
    },
    {
=======
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
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
            navigate("add_vehicle_brand")
          },
        },

        {
          label: "Liste",
          icon: "pi pi-list",
          command: () => {
            navigate("vehicle_brand_list")
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
<<<<<<< HEAD
=======
    {
      label: "Araç Yılı",
      icon: "pi pi-car",
      items: [
        {
          label: "Ekle",
          icon: "pi  pi-plus",
          command: () => {
            navigate("add_vehicle_years")
          },
        },

        {
          label: "Liste",
          icon: "pi pi-list",
          command: () => {
            navigate("vehicle_year_list")
          },
        },
      ],
    },
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
  ]

  return (
    <div>
      <PanelMenu model={items} style={{ width: "300px" }} />
    </div>
  )
}

export default PanelMEnu
