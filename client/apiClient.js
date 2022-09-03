// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const cardsUrl = '/cards'

export function getCards() {
  return request.get(cardsUrl).then((res) => {
    return res.body
  })
}
