// native imports

// external imports

// local file imports
import {juniorMaxAge} from '../lib/fetchDetails'

const Card = (props) => {
  const {junior, course, category} = props
  let cards
  const maxAge = juniorMaxAge(category)
  if (junior) {
    cards = course.filter((card) => card.max_age <= maxAge)
  } else {
    cards = course
  }

  console.log(cards)
  return <div>Card</div>
}

export default Card
