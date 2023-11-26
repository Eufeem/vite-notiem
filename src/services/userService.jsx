import axios from 'axios'
import{ useEffect, useState } from 'react'

const urlapi = 'http://localhost:8080/user'

export const userService = () => {
  const [userList, setUserList] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(urlapi).then(res => {
      console.log('Response:', res.data);
      setUserList(res.data)
    }).catch(err => {
      console.log('Error:', err);
      setError(err)
    }).finally(() => {
      console.log('Finally', loading);
      setLoading(true)
    })
  }, [])

  return { userList, error, loading }
}