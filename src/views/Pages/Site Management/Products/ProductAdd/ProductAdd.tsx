import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import React, { useState, useEffect, useRef, ReactNode } from 'react'
import ProductDialog from './ProductDialog'
import axios from 'axios'
import { Toast } from 'primereact/toast'

const ProductAdd: React.FC = () => {
  const toast: any = useRef(null)
  const [product, setProduct] = useState({
    id: null,
    name: '',
    category: null,
  })
  const [categories, setCategories] = useState([{ id: 1, name: 'Fren' }])

  useEffect(() => {
    axios.get('http://localhost:8000/core/category/list/').then((res) => {
      console.log(res.data)
      setCategories(res.data)
    })
  }, [])

  const saveProduct = () => {
    axios
      .post('http://localhost:8000/core/product/create/', {
        name: product.name,
        category: product.category,
      })
      .then((response) => {
        setProduct(response.data)
        toast.current.show({
          severity: 'success',
          summary: 'Başarılı',
          detail: 'Ürün başarı ile eklendi. Lütfen uyumlu araçları giriniz.',
          life: 3000,
        })
      })
  }

  return (
    <div>
      <Toast ref={toast} />
      <div className='p-fluid grid'>
        <div className='col-6'>
          <div className='field '>
            <label htmlFor='username1' className='block'>
              Ürün Adı
            </label>
            <InputText
              name={product.name}
              placeholder='Ürün Giriniz...'
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div className='field'>
            <label htmlFor='username1' className='block'>
              Kategorisi
            </label>
            <Dropdown
              value={product.category}
              options={categories}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              placeholder='Kategori Seçiniz...'
              optionLabel='name'
              optionValue='id'
            />
          </div>
          <div className='field'>
            <Button label='KAYDET' onClick={saveProduct} />
          </div>
        </div>
      </div>
      <ProductDialog product={product} />
    </div>
  )
}

export default ProductAdd
