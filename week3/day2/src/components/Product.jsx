import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Product = () => {
    const[product,setProduct] = useState({})

    const { id } = useParams();
  
    useEffect(() => {
        if (id) {
            const axios = require('axios').default;

           
            axios.get(`http://localhost:8080/products/${id}`)
                .then(function (response) {
                   
                    setProduct(response.data);
                })
        }
    },[id])

  return (
      <div>Product ID :{id}
          <div>{product.title}</div>
      </div>
  )
}

export default Product