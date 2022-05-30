import React, { useState } from 'react'

const Form = () => {
 const [form,setForm] = useState({
     name: "",
     email: "",
     password: "",
     age: "0",
     isIndian:false
 })
    
    const handleChange = (e) => {
        let { checked, type, name, value } = e.target;
        console.log(type,name,value,checked);
        

        if (type === "checkbox") {
            setForm({...form,[name]:checked})
        } else {
            setForm({
                ...form,[name]:value
            })
        }
    }


  return (
      <div>
          Form
         <form>
             
              <div>
                  <label>Name:</label>
                  <input type="text" placeholder='Enter Your name' name="username" onChange={handleChange} value={form.username}/>
              </div>

              <div>
                  <label>Email:</label>
                  <input type="text" value={form.email} placeholder='Enter Your email' name="email" onChange={handleChange}/>
              </div>

              <div>
                  <label>password:</label>
                  <input type="text" value={form.password} placeholder='Enter Your password' name="password" onChange={handleChange}/>
              </div>

              <div>
                  <label>Age:</label>
                  <input type="text" value={form.age} placeholder='Enter Your Age' name="age" onChange={handleChange}/>
              </div>

               <div>
                  
                  <input type="checkbox" checked={form.isIndian}  name="isIndian" onChange={handleChange} />
                  <label>Is Indian:</label>
              </div>
          
       </form>
    </div>
  )
}

export default Form