import React from 'react'

// const Child1 = (props) => {
//   return (
//       <div>Information:{props.info}</div>
//   )
// }

const Child1 = (props) => {
    return (
        <div>
      <input onChange={(e)=>props.setChildValue(e.target.value)} />
        Child1
            <span>Information:{props.childValue}</span>
            </div>
  )
}


export default Child1