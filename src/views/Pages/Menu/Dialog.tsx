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

  const renderFooter = (name: any) => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
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
  );
};
