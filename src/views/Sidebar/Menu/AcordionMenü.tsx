import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

export const AccordionDemo = () => {
  const [activeIndex, setActiveIndex]: any = useState(null);

  const onClick = (itemIndex: any) => {
    let _activeIndex = activeIndex ? [...activeIndex] : [];

    if (_activeIndex.length === 0) {
      _activeIndex.push(itemIndex);
    } else {
      const index = _activeIndex.indexOf(itemIndex);
      if (index === -1) {
        _activeIndex.push(itemIndex);
      } else {
        _activeIndex.splice(index, 1);
      }
    }

    setActiveIndex(_activeIndex);
  };

  return (
    <div className="accordion-demo">
      <div className="card" style={{ width: "300px" }}>
        <h2>Kategoriler</h2>
        <Accordion className="accordion-custom" activeIndex={0}>
          <AccordionTab
            header={
              <React.Fragment>
                <span>Motor</span>
              </React.Fragment>
            }
          >
            <p>Blok</p>
            <p>Krank Mili</p>
          </AccordionTab>
          <AccordionTab
            header={
              <React.Fragment>
                <span>Fren</span>
              </React.Fragment>
            }
          >
            <p>Balata</p>
            <p>Disk</p>
          </AccordionTab>
          <AccordionTab
            header={
              <React.Fragment>
                <span>Elektrik</span>
              </React.Fragment>
            }
          >
            <p> Ampül</p>
            <p>Bağlantı Kablosu</p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};
