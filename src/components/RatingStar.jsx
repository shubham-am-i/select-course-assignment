import React from 'react'
import {Rating} from '@mui/material'
// import {Box} from '@mui/material'

const styles = {
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  ratingValue: {
    marginLeft: '0.5rem',
    fontSize: '1.2rem',
  },
}

function RatingStar({value}) {
  return (
    <div className={styles.ratingContainer}>
      <Rating
        name='rating'
        value={value}
        precision={0.1}
        max={5}
        readOnly
        style={{display: 'inline-block', display: 'flex', width: '50%'}}
      />
      {/* <Box className={styles.ratingValue} component='span' ml={1}>
        {value.toFixed(1)}
      </Box> */}
    </div>
  )
}

export default RatingStar
