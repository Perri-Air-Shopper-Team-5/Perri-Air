import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Link, useParams } from "react-router-dom";

const SingleUser = () => {

  const [user, setUser] = useState([])

  const { userId } = useParams()

  useEffect((
  ) => {

    const fetchUser = async (uId) => {
      try {
          const { data } = await axios.get(`/api/users/${uId}`);
          return setUser(data);
      } catch (err) {
          console.log(err);
      }
     }
     fetchUser(userId)
  }, [])

  return (
   <div>THE USER: {user.username}</div>
  )

}
export default SingleUser
