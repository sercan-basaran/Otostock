import Sidebar from "./Sidebar/Sidebar/Sidebar"
import StockListe from "./Pages/StockList/StockList"
function Home() {
  return (
    <div className='grid  '>
      <div className='col4 p-4   '>
        <Sidebar />
      </div>

      <div className='col-9 mt-5   mx-6'>
        <StockListe />
      </div>
    </div>
  )
}

export default Home
