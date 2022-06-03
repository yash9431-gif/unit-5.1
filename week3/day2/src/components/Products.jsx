import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    const [Products, setProducts] = useState([])
    useEffect(() => {
        
   
       const axios = require('axios').default;

  axios.get('http://localhost:8080/products')
  .then(function (response) {
    // handle success
      
    setProducts(response.data);
  })
         },[])
  
  return (
      <div>
          Products:{" "}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
               <Outlet />
              <div>
                  
              {Products.map((p) => (
                  <div key={p.id}>
                      <Link to={`/products/${p.id}`}>{p.name}</Link>
                  </div>
              ))}
                  </div>
             <Outlet />
          </div>
       
    </div>
  )
}

export default Products