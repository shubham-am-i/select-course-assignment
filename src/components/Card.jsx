// native imports
import {useState} from 'react'
// external imports

// local file imports
import {juniorMaxAge} from '../lib/fetchDetails'
import RatingStar from './RatingStar'
import '../styles/Card.css'

const Card = (props) => {
  const {junior, course, category, lightTheme, darkTheme} = props
  // states
  const [isHovered, setIsHovered] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  const handleMouseOver = (i) => {
    setActiveCard(i)
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }
  let cards
  const maxAge = juniorMaxAge(category)
  if (junior) {
    cards = course.filter((card) => card.max_age <= maxAge)
  } else {
    cards = course
  }
  return (
    <div className='card-container'>
      {cards.map((item, i) => {
        const normal = isHovered && activeCard == i ? darkTheme : lightTheme
        const inverse = isHovered && activeCard == i ? lightTheme : darkTheme
        const textWhite = isHovered && activeCard == i ? 'black' : 'white'
        return (
          <main
            key={i}
            className='card'
            onMouseOver={() => handleMouseOver(i)}
            onMouseOut={handleMouseOut}>
            {/* SECTION - CARD TOP */}
            <section className='card-top' style={{background: normal}}>
              <p
                className='left-arrow card-title'
                style={{
                  background: inverse,
                  borderRight: `20px solid ${normal}`,
                  color: textWhite,
                }}>
                {' '}
                {item.num_classes} Sessions
              </p>
              <p
                className='card-name'
                style={{color: isHovered && activeCard == i ? 'white' : darkTheme}}>
                {item.name}
                {/* RATING COMPONENT */}
                <RatingStar value={+item.rating.split(';')[0]} />
                <span className='reviews'>{item.rating.split(';')[2]} reviews</span>
              </p>
            </section>
            {/* SECTION - CARD BODY */}
            <section className='card-body'>
              <p className='pitch'>{item.pitch}</p>
              <p className='curriculum-title'>Students will achieve:</p>

              {item.curriculum_outcomes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}

              <a href='#'>View Detailed Lesson Plan</a>
              {/* PRICE SECTION */}
              <div className='price-container'>
                <span>&#8377; {item.original_price}</span>
                <span className='session-price'>
                  &#8377;{' '}
                  {Math.floor((item.original_price - item.discounted_price) / item.num_classes)}{' '}
                  <span>per class</span>
                </span>
              </div>
              <span className='discount-price'>&#8377; {item.discounted_price}</span>

              {/* BOTTOM SECTION */}
              <p className='note'>We'll schedule the slots as per your convenience</p>
              <section className='extras' style={{background: lightTheme}}>
                <div>
                  <img src='activities.png' alt='activity-icon' />
                  <span>8 Activities</span>
                </div>
                <div>
                  <img src='games.png' alt='activity-icon' />
                  <span>{item.games_count} Games</span>
                </div>
                <div>
                  <img src='activities.png' alt='activity-icon' />
                  <span>{item.certificate_count} Certificate</span>
                </div>
              </section>
              <div className='button-container'>
                <button>Buy Course</button>
              </div>
            </section>
          </main>
        )
      })}
    </div>
  )
}

export default Card
