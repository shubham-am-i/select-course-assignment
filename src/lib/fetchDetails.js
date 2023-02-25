export default function fetchDetails(category) {
  switch (category) {
    case 'Communication': {
      return {
        light: '#EDFCFF',
        dark: '#3EBEff',
      }
    }
    case 'Visual Arts': {
      return {
        light: '#DCCCFF',
        dark: '#905CFF',
      }
    }
    case 'Music': {
      return {
        light: '#FFEDC8',
        dark: '#F9B215',
      }
    }
    default:
      return {
        light: '#EDFCFF',
        dark: '#3EBEff',
      }
  }
}

export const juniorMaxAge = (category) => {
  switch (category) {
    case 'Communication': {
      return 10
    }
    case 'Visual Arts': {
      return 9
    }
    case 'Music': {
      return 15
    }
  }
}
