<<<<<<< HEAD
import React from "react"
import { Accordion, AccordionTab } from "primereact/accordion"

export const AccordionDemo = () => {
  return (
    <div className='accordion-demo'>
      <div className='card' style={{ width: "300px" }}>
        <h2>Kategoriler</h2>
        <Accordion className='accordion-custom' activeIndex={0}>
=======
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
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
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
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> 4e2650faf4db2b0e118486b2f3f4c143b028b797
