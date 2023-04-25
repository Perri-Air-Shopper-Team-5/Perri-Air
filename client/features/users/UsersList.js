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

  console.log(users)

  return (
    <div className='user-container'>
      <h1>Best Seller's Book List</h1>
      <div className='user-list'>
        { user.map((book) => (
            <Link key={user.id} to={`/user/${user.id}`}>
              <div className='user-card'>
                <section>
                  <h1>{user.name}</h1>
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
