import React from 'react'

function User(props) {
  return (
    <div style={{backgroundColor:"tomato"}}>
        <h1>{props.person.fullName}</h1>
        {props.children}
    </div>
  )
}

export default User