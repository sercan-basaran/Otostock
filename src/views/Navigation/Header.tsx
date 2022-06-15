<<<<<<< HEAD
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
      command: () => {
        navigate("new_product_add")
      },
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
=======
import { Link } from "react-router-dom"
import NewProductAdd from "../Pages/StockList/NewProductAdd"

function Header() {
  return (
    <div>
      <div>
        <div
          className='p-datatable p-component p-datatable-selectable p-datatable-responsive-scroll'
          data-scrollselectors='.p-datatable-wrapper'
        >
          <div className='p-datatable-header' style={{ height: "50px" }}>
            <span className='p-input-icon-left w-full md:w-auto'>
              <Link to='/' style={{ textDecoration: "none", color: "grey" }}>
                OTOSTOCK
              </Link>
            </span>
            <div
              style={{
                marginLeft: "350px",
                marginTop: "-20px",
                display: "flex",
              }}
            >
              <Link
                to='/stockliste'
                style={{ textDecoration: "none", color: "blue" }}
              >
                StockListe
              </Link>
              <h4
                style={{
                  textDecoration: "none",
                  marginTop: "-20px",
                  marginLeft: "20px",
                }}
              >
                {" "}
                <NewProductAdd />
              </h4>
              <Link
                to='/yonetim'
                style={{
                  textDecoration: "none",
                  color: "blue",
                  marginLeft: "20px",
                }}
              >
                Yönetim
              </Link>
            </div>
          </div>
        </div>
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
      </div>
    </div>
  )
}

export default Header
