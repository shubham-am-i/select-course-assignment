// native imports
import {useLayoutEffect, useState} from 'react'
// local file imports
import fetchDetails from '../lib/fetchDetails'
import styles from '../styles/Container.module.css'
import Card from './Card'

// Container component for cards
export default function Container() {
  // state variables
  const [course, setCourse] = useState([])
  const [standard, setStandard] = useState({
    junior: true,
    senior: false,
  })
  const [isJunior, setIsJunior] = useState(true)

  // category handler
  const handleChange = (event) => {
    if (event.currentTarget.name == 'junior') {
      setStandard({
        junior: true,
        senior: false,
      })
      setIsJunior(true)
    } else {
      setStandard({
        junior: false,
        senior: true,
      })
      setIsJunior(false)
    }
  }

  //fetch data before painting the UI on DOM
  useLayoutEffect(() => {
    const randomNumber = Math.floor(Math.random() * 3)
    ;(async function fetchData() {
      const response = await fetch('src/lib/data.json')
      const courses = await response.json()
      setCourse(courses[randomNumber])
    })()
  }, [])

  // set theme colors based on category
  const category = course[0]?.category_name
  let lightTheme, darkTheme
  if (category) {
    const {light, dark} = fetchDetails(category)
    lightTheme = light
    darkTheme = dark
  }

  return (
    <section>
      <main>
        {/* Wrapper for select buttons */}
        <div className={styles.categoryBox}>
          {/* Junior Button */}
          <button
            className={styles.category}
            style={{
              backgroundColor: standard.junior ? darkTheme : lightTheme,
              color: standard.junior && 'white',
            }}
            name='junior'
            onClick={handleChange}>
            <span className={styles.title}>Junior</span>
            <span className={styles.subTitle}>
              Age({course[0]?.min_age}-{course[0]?.max_age})
            </span>
            <span
              className={styles.arrow}
              style={{
                display: standard.junior ? 'block' : 'none',
                borderTop: `10px solid ${darkTheme}`,
              }}></span>
          </button>

          {/* Senior Button */}
          <button
            className={styles.category}
            style={{
              backgroundColor: standard.senior ? darkTheme : lightTheme,
              color: standard.senior && 'white',
            }}
            name='senior'
            onClick={handleChange}>
            <span className={styles.title}>Senior</span>
            <span className={styles.subTitle}>
              Age({course[course.length - 1]?.min_age}-{course[course.length - 1]?.max_age})
            </span>
            <span
              className={styles.arrow}
              style={{
                display: standard.senior ? 'block' : 'none',
                borderTop: `10px solid ${darkTheme}`,
              }}></span>
          </button>
        </div>

        {/* Card component to display courses */}
        <Card junior={isJunior} course={course} category={category} />
      </main>
    </section>
  )
}
