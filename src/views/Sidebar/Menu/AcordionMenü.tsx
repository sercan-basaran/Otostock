import React from "react"
import { Accordion, AccordionTab } from "primereact/accordion"

export const AccordionDemo = () => {
  return (
    <div className='accordion-demo'>
      <div className='card' style={{ width: "300px" }}>
        <h2>Kategoriler</h2>
        <Accordion className='accordion-custom' activeIndex={0}>
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
  )
}
