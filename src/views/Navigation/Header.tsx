import { useNavigate } from "react-router-dom"
import NewProductAdd from "../Pages/StockList/NewProductAdd"
import { Menubar } from "primereact/menubar"

function Header() {
  let navigate = useNavigate()
  const items = [
    {
      label: "OTOSTOCK",
      command: () => {
        navigate("/")
      },
    },
    {
      label: "Stockliste",
      command: () => {
        navigate("/stocklist")
      },
    },
    {
      label: "Yeni Kayıt Ekle",

    },
    {

      label: "Yönetim",
      command: () => {
        navigate("/management")

      },

    },
  ]

  const start = ""
  const end = ""
  return (
    <div>
      <div>
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  )
}

export default Header
