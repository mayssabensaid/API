import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './UserList.css' 


const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    
      axios.get ('https://jsonplaceholder.typicode.com/users')
      .then (res => {
        
        setUsers (res.data)
      })

    .catch (error => {
        console.log(error)
    })
    
  })
  return (
    <div>
    {users.map((user,i)=>(
        <div key={i} className="user">
            
            <div className="user-name"> Name : {user.name} </div> 
            <div className="user-username"> UserName : {user.username} </div>
            <div className="user-email"> E-mail : {user.email} </div>
            <div className="user-address"   > 
                <p className="title">Address :</p>
                <span>{user.address.street }</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
                <span>{user.address.zipcode}</span>
            </div>
        </div>
        ))}
    
</div>
  )
}

export default UserList