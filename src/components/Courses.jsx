import {useEffect, useLayoutEffect, useState} from 'react'

export default function Container() {
  const [data, setData] = useState({})
  const [course, setCourse] = useState([])

  useLayoutEffect(() => {
    ;(async function fetchData() {
      const response = await fetch('src/lib/data.json')
      const courses = await response.json()
      setData(courses)
    })()
  }, [])

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const keys = Object.keys(data)
      const randomIndex = Math.floor(Math.random() * keys.length)
      const randomKey = keys[randomIndex]
      setCourse(data[randomKey])
    }
  }, [])

  console.log(course)

  return <div></div>
}
