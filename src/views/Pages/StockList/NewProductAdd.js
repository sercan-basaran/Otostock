import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
function YeniÜrünEkle() {
  
  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [vehicles, setVehicles] = useState();
  const [brandType, setBrandType] = useState();
  const [selectedBrandType, setSelectedBrandType] = useState();
  const [vechileType, setVechileType] = useState();
  const [selectedVehicleType, setSelectedVechileType] = useState();
  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);

 
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Hayır"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Kaydet"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  const vehicle = [
    { vehicle: "Kamyon", id: 1 },
    { vehicle: "Araba", id: 2 },
    { vehicle: "Otobüs", id: 3 },
    { vehicle: "Motorsiklet", id: 4 },
  ];

  const brandChanged = (event) => {
    setVehicles(event.value);
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
      ]);
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
      ]);
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
      ]);
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
      ]);
    }
  };

  const VehicleTypeOnchange = (event) => {
    setSelectedBrandType(event.value);
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
      ]);
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
      ]);
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
      ]);
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
      ]);
    }
  };

  return (
    <div>
      <div className="dialog-demo">
        <div className="card">
          <h4
            label="Yeni Ürün Ekle"
            icon="pi pi-external-link"
            onClick={() => onClick("displayResponsive")}
            style={{color:'blue'}}
          >Yeni Ürün Ekle</h4>
          <Dialog
            header="Yeni ÜrüN"
            visible={displayResponsive}
          
            onHide={() => onHide("displayResponsive")}
            breakpoints={{ "960px": "75vw" }}
            style={{ width: "50vw" }}
            footer={renderFooter("displayResponsive")}
          >
            Araç Tipi
            <br />
            <Dropdown
            filter
            showClear
            filterBy="vehicle"
              value={vehicles}
              options={vehicle}
              optionValue="id"
              optionLabel="vehicle"
              onChange={brandChanged}
              style={{ width: "300px" }}
            />
            <br />
            <br />
            Araç Markası
            <br />
            <Dropdown
              value={selectedBrandType}
              options={brandType}
              filter
              showClear
              filterBy="vehicle"
              optionLabel="vehicle"
              optionValue="id"
              onChange={(e) => VehicleTypeOnchange(e)}
              style={{ width: "300px" }}
            />
            <br />
            <br />
            AraçTürü
            <br />
            <br />
            <Dropdown
              value={selectedVehicleType}
              options={vechileType}
              filter
              showClear
              filterBy="name"
              optionLabel="name"
              optionValue="id"
              onChange={(e) => setSelectedVechileType(e.value)}
              style={{ width: "300px" }}
            />
            <br />
            <br />
            Marka Yili
            <br />
            <InputText  style={{ width: "300px" }}/>
            <br />
            Kategori
            <br />
            <Dropdown style={{ width: "300px" }} />
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default YeniÜrünEkle;
