import React from 'react'

export default function State() {

let User ="React"

const ChangeName = () =>{
User = "JS"
console.log(User);

}

  return (
    <>
      <h3>{User}</h3>
      <button onclick={ChangeName}>ChangeName</button>
    
    </>
  )
}
