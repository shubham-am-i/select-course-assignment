import {useEffect, useLayoutEffect, useState} from 'react'

export default function Container() {
  const [course, setCourse] = useState([])

  useLayoutEffect(() => {
    const randomNumber = Math.floor(Math.random() * 3)
    ;(async function fetchData() {
      const response = await fetch('src/lib/data.json')
      const courses = await response.json()
      setCourse(courses[randomNumber])
    })()
  }, [])

  console.log(course)

  return <div></div>
}
