import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

const SingleUser = () => {


  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
          const { data } = await axios.get("/api/users");
          return setUser(data);
      } catch (err) {
          console.log(err);
      }
     }
     fetchUsers()
  }, [])


  return (
   <div>{user.name}</div>

  )

}
export default SingleUser
