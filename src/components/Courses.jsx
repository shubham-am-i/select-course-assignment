import {useEffect, useLayoutEffect, useState} from 'react'

import fetchThemes from '../lib/fetchColors'

import styles from '../styles/Container.module.css'

export default function Container() {
  const [course, setCourse] = useState([])
  const [standard, setStandard] = useState({
    junior: true,
    senior: false,
  })

  const handleChange = (event) => {
    if (event.currentTarget.name == 'junior') {
      setStandard({
        junior: true,
        senior: false,
      })
    } else {
      setStandard({
        junior: false,
        senior: true,
      })
    }
  }

  useLayoutEffect(() => {
    const randomNumber = Math.floor(Math.random() * 3)
    ;(async function fetchData() {
      const response = await fetch('src/lib/data.json')
      const courses = await response.json()
      setCourse(courses[randomNumber])
    })()
  }, [])

  const category = course[0]?.category_name
  let lightTheme, darkTheme
  if (category) {
    const {light, dark} = fetchThemes(category)
    lightTheme = light
    darkTheme = dark
  }

  return (
    <section>
      <main>
        <div className={styles.categoryBox}>
          <button
            className={styles.category}
            style={{
              backgroundColor: standard.junior ? darkTheme : lightTheme,
              color: standard.junior && 'white',
            }}
            name='junior'
            onClick={handleChange}>
            <span className={styles.title}>Junior</span>
            <span className={styles.subTitle}>(Age 6-10)</span>
            <span
              className={styles.arrow}
              style={{
                display: standard.junior ? 'block' : 'none',
                borderTop: `10px solid ${darkTheme}`,
              }}></span>
          </button>
          <button
            className={styles.category}
            style={{
              backgroundColor: standard.senior ? darkTheme : lightTheme,
              color: standard.senior && 'white',
            }}
            name='senior'
            onClick={handleChange}>
            <span className={styles.title}>Senior</span>
            <span className={styles.subTitle}>(Age 10-15)</span>
            <span
              className={styles.arrow}
              style={{
                display: standard.senior ? 'block' : 'none',
                borderTop: `10px solid ${darkTheme}`,
              }}></span>
          </button>
        </div>
      </main>
    </section>
  )
}
