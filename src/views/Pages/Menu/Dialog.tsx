<<<<<<< HEAD
import { useState } from "react"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"

export const DialogDemo = () => {
  const [displayBasic, setDisplayBasic] = useState(false)

  const dialogFuncMap: {
    [index: string]: any
  } /*Element implicitly has an 'any' type because expression of type '`${any}`' can't be used to index type '{ displayBasic: Dispatch<SetStateAction<boolean>>; }' hatasi icin*/ =
    {
      displayBasic: setDisplayBasic,
    }

  const onClick = (name: any) => {
    dialogFuncMap[`${name}`](true)
  }

  const onHide = (name: any) => {
    dialogFuncMap[`${name}`](false)
  }
=======
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export const DialogDemo = () => {
  const [displayBasic, setDisplayBasic] = useState(false);

  const dialogFuncMap: {
    [index: string]: any;
  } /*Element implicitly has an 'any' type because expression of type '`${any}`' can't be used to index type '{ displayBasic: Dispatch<SetStateAction<boolean>>; }' hatasi icin*/ =
    {
      displayBasic: setDisplayBasic,
    };

  const onClick = (name: any) => {
    dialogFuncMap[`${name}`](true);
  };

  const onHide = (name: any) => {
    dialogFuncMap[`${name}`](false);
  };
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797

  const renderFooter = (name: any) => {
    return (
      <div>
        <Button
<<<<<<< HEAD
          label='No'
          icon='pi pi-times'
          onClick={() => onHide(name)}
          className='p-button-text'
        />
        <Button
          label='Yes'
          icon='pi pi-check'
=======
          label="No"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
<<<<<<< HEAD
    )
  }

  return (
    <div className='dialog-demo'>
      <div className='card'>
        <Button label='Detay' onClick={() => onClick("displayBasic")} />
        <Dialog
          header='Ürün Detayı'
=======
    );
  };

  return (
    <div className="dialog-demo">
      <div className="card">
        <Button
          label="Detay"
          icon="pi pi-external-link"
          onClick={() => onClick("displayBasic")}
        />
        <Dialog
          header="Ürün Detayı"
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
          visible={displayBasic}
          style={{ width: "50vw" }}
          footer={renderFooter("displayBasic")}
          onHide={() => onHide("displayBasic")}
        >
          <p>
            Ford Granada 1.7 – 2.0 – 2.3 Ön ve Arka Fren Balatası ve Disk Takımı
            Değişimi ve Fren Disk Tornası Tamiri ve montajı ile bizimle irtibata
            geçebilir en uygun fiyatı servisimizden alabilirsiniz. Fiyatlar
            temsilidir farklılık göstermektedir. Stoklarımızda Yoğunlukla Ford
            Granada Orjinal balata ve diski dış ında Bosch, Ferodo marka,
            Delphi, Trw, Ate marka, Mga, Beşer, Kale, valeo vb. İsteğinize bağlı
            fren balatalarda temin edilmektedir.
            <b>Sercan Motorlu Araçlar A.Ş. </b>
            Garantisi Altindadir.
          </p>
        </Dialog>
      </div>
    </div>
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
