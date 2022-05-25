import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {

    // const [value, setValue] = useState("");
    const [childValue,setChildValue]=useState("")

  
//   return (
//       <div>
// <input type="text" onChange={e=>setValue(e.target.value)} />
//           Parent:{value}
//           <Child1 info={value}/>
//           <Child2 />
//       </div>
      
//   )
 return (
        <div>
            parent:{childValue}
            <Child1  childValue={childValue}  setChildValue={setChildValue}/>
           
            <Child2/>
        </div>
    )
}

export default Parent