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
      </div>
    </div>
  )
}

export default Header
