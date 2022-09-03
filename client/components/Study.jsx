import React, { useState, useEffect } from 'react'
import { getCards } from '../apiClient'
import ReactCardFlipper from 'react-card-flipper'

function Study() {
  let cardArray = []

  const [tarotCards, setCards] = useState([])
  const [tarotType, setType] = useState('major arcana')

  function changeCards(suitType) {
    getCards()
      .then((cards) => {
        cards.forEach((card) => {
          if (card.suit == suitType) {
            // const cardId = String(card.id) + 'card'
            cardArray.push(
              <div key={card.id} className="indvCards">
                <ReactCardFlipper height="300px" width="200px" levitate>
                  <div className="front">
                    <img
                      className="card-img"
                      src={card.image}
                      alt={card.name}
                    />
                  </div>
                  <div className="back">
                    <p className="uprev">Upright:</p>
                    <p>{card.upright}</p>
                    <p className="uprev">Reversed:</p>
                    <p>{card.reversed}</p>
                  </div>
                </ReactCardFlipper>
                <p>{card.name}</p>
              </div>
            )
          }
        })
        setCards(cardArray)
        setType(suitType)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  useEffect(() => {
    changeCards('major arcana')
  }, [])

  return (
    <div className="typing">
      <h1>{tarotType}</h1>
      <div className="cardLinks">
        <button onClick={() => changeCards('major arcana')}>
          <h3>major arcana</h3>
        </button>
        <button onClick={() => changeCards('wands')}>
          <h3>wands</h3>
        </button>
        <button onClick={() => changeCards('cups')}>
          <h3>cups</h3>
        </button>
        <button onClick={() => changeCards('swords')}>
          <h3>swords</h3>
        </button>
        <button onClick={() => changeCards('pentacles')}>
          <h3>pentacles</h3>
        </button>
      </div>
      <div className="card-div">{tarotCards}</div>
    </div>
  )
}

export default Study
