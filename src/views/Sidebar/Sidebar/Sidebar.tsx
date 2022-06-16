import { Dropdown } from "primereact/dropdown"
import { useState } from "react"
import "./Sidebar.css"
import { Button } from "primereact/button"
import { AccordionDemo } from "../Menu/AcordionMenü"

function Sidebar() {
  const [vehicles, setVehicles]: any = useState()
  const [brandType, setBrandType]: any = useState()
  const [selectedBrandType, setSelectedBrandType]: any = useState()
  const [vechileType, setVechileType] =
    useState<any>() /*Argument of type '{ id: number; name: string; }[]' is not assignable to parameter of type 'SetStateAction<undefined>'.
    Type '{ id: number; name: string; }[]' provides no match for the signature '(prevState: undefined): undefined'.ts(2345) hatasi icin*/
  const [selectedVehicleType, setSelectedVechileType]: any = useState()
  const [productionYear, setProductionYear] = useState<any>()
  const [selectedProductionYear, setSelectedProductionYear] = useState()
  const vehicle = [
    { vehicle: "Kamyon", id: 1 },
    { vehicle: "Araba", id: 2 },
    { vehicle: "Otobüs", id: 3 },
    { vehicle: "Motorsiklet", id: 4 },
  ]

  const brandChanged = (event: any) => {
    setVehicles(event.value)
    if (event.value === 1) {
      setBrandType([
        {
          id: 1,
          vehicle: "Bmc",
        },
        {
          id: 1,
          vehicle: "Man",
        },
        {
          id: 1,
          vehicle: "Mercedes-Benz",
        },
        {
          id: 1,
          vehicle: "Scania",
        },
      ])
    } else if (event.value === 2) {
      setBrandType([
        {
          id: 2,
          vehicle: "Ford",
        },
        {
          id: 2,
          vehicle: "Toyota",
        },
        {
          id: 2,
          vehicle: "Opel",
        },
        {
          id: 2,
          vehicle: "Wolswagen",
        },
      ])
    } else if (event.value === 3) {
      setBrandType([
        {
          id: 3,
          vehicle: "Bmc",
        },
        {
          id: 3,
          vehicle: "Iveco",
        },
        {
          id: 3,
          vehicle: "Hyundai",
        },
        {
          id: 3,
          vehicle: "Isuzu",
        },
      ])
    } else if (event.value === 4) {
      setBrandType([
        {
          id: 4,
          vehicle: "Honda",
        },
        {
          id: 4,
          vehicle: "Yamaha",
        },
        {
          id: 4,
          vehicle: "BMW",
        },
        {
          id: 4,
          vehicle: "Suzuki",
        },
      ])
    }
  }

  const VehicleTypeOnchange = (event: any) => {
    setSelectedBrandType(event.value)
    if (event.value === 1) {
      setVechileType([
        {
          id: 1,
          name: "Procity",
        },
        {
          id: 2,
          name: "Neoport",
        },
        {
          id: 3,
          name: "Mercedes-Benz - Actros",
        },
        {
          id: 4,
          name: "Mercedes-Benz - Axor",
        },
      ])
    } else if (event.value === 2) {
      setVechileType([
        {
          id: 1,
          name: "Focus",
        },
        {
          id: 2,
          name: "Fieta",
        },
        {
          id: 3,
          name: "Corolla",
        },
        {
          id: 4,
          name: "Yaris",
        },
      ])
    } else if (event.value === 3) {
      setVechileType([
        {
          id: 1,
          name: "Tourismo",
        },
        {
          id: 2,
          name: "Travego",
        },
      ])
    } else if (event.value === 4) {
      setVechileType([
        {
          id: 1,
          name: "Honda PCX125",
        },
        {
          id: 2,
          name: "Yamaha X-Max 250 ABS",
        },
        {
          id: 3,
          name: "S1000RR",
        },
        {
          id: 4,
          name: "GSX1300R ",
        },
      ])
    }
  }

  const productionYearOnchange = (event: any) => {
    setSelectedVechileType(event.value)
    if (event.value === 1) {
      setProductionYear([
        {
          id: 1,
          years: 2016,
        },
        {
          id: 2,
          years: 2018,
        },
      ])
    } else if (event.value === 2) {
      setProductionYear([
        {
          id: 1,
          years: 2016,
        },
        {
          id: 2,
          years: 2018,
        },
      ])
    } else if (event.value === 3) {
      setProductionYear([
        {
          id: 1,
          years: 2016,
        },
        {
          id: 2,
          years: 2018,
        },
      ])
    } else if (event.value === 4) {
      setProductionYear([
        {
          id: 1,
          years: 2016,
        },
        {
          id: 2,
          years: 2018,
        },
      ])
    }
  }

  const onSubmit = (data: any) => {
    //   data={
    //   vehicle:vehicle,
    //   marka:marka,
    //   vechileType:vechileType,
    //   productionYear:productionYear
    //  }
    //  console.log(data);
  }

  // useEffect(() => {
  //   console.log(
  //     vehicle,
  //     selectedMarka,
  //     selectedVehicleType,
  //     selectedProductionYear
  //   );
  // }, [productionYear]);

  return (
    <div className='grid'>
      <div className='col-4'>
        <div onSubmit={onSubmit}>
          <div>
            Araç Tipi
            <br />
            <Dropdown
              filter
              showClear
              filterBy='vehicle'
              value={vehicles}
              options={vehicle}
              placeholder='Select a Vehicle'
              optionValue='id'
              optionLabel='vehicle'
              onChange={brandChanged}
              style={{ width: "300px" }}
            />
            <br />
            <br />
            Araç Markası
            <br />
            <Dropdown
              filter
              showClear
              filterBy='vehicle'
              value={selectedBrandType}
              options={brandType}
              optionLabel='vehicle'
              optionValue='id'
              onChange={(e) => VehicleTypeOnchange(e)}
              style={{ width: "300px" }}
            />
            <br />
            <br />
            AraçTürü
            <br />
            <br />
            <Dropdown
              filter
              showClear
              filterBy='name'
              value={selectedVehicleType}
              options={vechileType}
              optionLabel='name'
              optionValue='id'
              onChange={(e) => productionYearOnchange(e)}
              style={{ width: "300px" }}
            />
            <br />
            <br />
            Marka Yili
            <br />
            <Dropdown
              filter
              showClear
              filterBy='years'
              value={selectedProductionYear}
              options={productionYear}
              optionLabel='years'
              optionValue='id'
              onChange={(e) => setSelectedProductionYear(e.value)}
              style={{ width: "300px" }}
            />
          </div>
        </div>
        <br />
        <AccordionDemo />
        <br />
        <br />
        <div className='button-demo'>
          {" "}
          <div className='card'>
            <div className='template'>
              <Button
                className='amazon p-0'
                aria-label='Amazon'
                style={{ marginLeft: "100px" }}
              >
                <span
                  className='px-3 mt-3'
                  style={{ height: "30px", width: "100px" }}
                >
                  Arama
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

// import { Button } from 'primereact/button';
// import { Menubar } from 'primereact/menubar';
// import { useState } from 'react';

// export function Sidebar(props) {
//     const [items, setItems] = useState([
//         {
//             label: 'Anasayfa'
//         },
//         {
//             label: 'Ürünler',
//             command: () => {
//                 setItems(...items, [
//                     {
//                         label: 'Bize Ulaşın'
//                     }
//                 ]);
//             }
//         },
//         {
//             label: 'Alta Açılır',
//             items: [
//                 {
//                     label: 'Alt 1'
//                 },
//                 {
//                     label: 'Alt 2'
//                 }
//             ]
//         }
//     ]);

//     return <Menubar model="items" start="" end="" />;
// }
