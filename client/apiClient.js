// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const cardsUrl = 'https://dream-meanings.herokuapp.com/cards'
const dreamUrl = 'https://dream-meanings.herokuapp.com/interpretations'

export function getCards() {
  return request.get(cardsUrl).then((res) => {
    return res.body
  })
}

export function getDreams() {
  return request.get(dreamUrl).then((res) => {
    return res.body
  })
}
