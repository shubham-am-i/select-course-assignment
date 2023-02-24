import {useEffect, useState} from 'react'

export default function Container() {
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async function fetchData() {
      const response = await fetch('src/lib/data.json')
      const courses = await response.json()
      setData(courses)
    })()
  }, [])

  console.log(data)

  return <div></div>
}
