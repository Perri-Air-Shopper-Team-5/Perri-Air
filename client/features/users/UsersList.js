//UserList

import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

const UserList = () => {
    const [users, setUsers] = useState([])


  useEffect(() => {
    const fetchUsers = async () => {
      try {
          const { data } = await axios.get("/api/users");
          return setUsers(data);
      } catch (err) {
          console.log(err);
      }
     }
     fetchUsers()
  }, [])


  return (
    <div className='user-container'>
      <h1>User List</h1>
      <div className='user-list'>
        { users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
              <div className='user-card'>
                <section>
                  <h1>{user.username}</h1>
                </section>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
export default UserList;
