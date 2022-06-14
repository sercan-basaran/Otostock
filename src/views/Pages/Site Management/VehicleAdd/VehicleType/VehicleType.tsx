import "../PanelButon.css"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useState } from "react"
export function VehicleType() {
  const [name, setName]: any = useState()

  return (
    <div className='border p-4'>
      <div className='flex '>
        <div className='card' />
        <form className='p-fluid' style={{ marginTop: "-20px" }}>
          <div className='field'>
            <span className='p-float-label'>
              <h3>Araç Tipi Ekle</h3>
              <InputText
                id='name'
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                className='mt-3'
                style={{ width: "600px" }}
              />
              <label htmlFor='name' className='mt-2'>
                <h5>Araç Tipi Giriniz...</h5>
              </label>
            </span>
          </div>
          <Button
            type='submit'
            label='Kaydet'
            className='mt-8'
            style={{ width: "100px", marginLeft: "500px" }}
          />
        </form>
      </div>
    </div>
  )
}
