import React, { useState, useEffect } from 'react'
import { getCards } from '../apiClient'
import ReactCardFlipper from 'react-card-flipper'
import { pulse } from 'react-animations'

let studyArray = []
let idArray = []
let displayArray = []
let clickable = true

function Practice() {
  const [tarotCards, setCards] = useState([])
  const [studyCard, setCard] = useState([])

  function newCard() {
    getCards()
      .then((cards) => {
        let chosenID = Math.floor(Math.random() * 72)
        idArray.push(chosenID)
        setCard(cards[chosenID])
        getRndm()
        function getRndm() {
          let randID = Math.floor(Math.random() * 72)
          if (!idArray.includes(randID)) {
            studyArray.push(cards[randID])
            idArray.push(randID)
          }
          if (idArray.length < 6) {
            getRndm()
          }
        }

        let arrayIndex = Math.floor(Math.random() * 6)
        studyArray.splice(arrayIndex, 0, cards[chosenID])

        studyArray.forEach((selection) => {
          displayArray.push(
            <div
              key={selection.id}
              onClick={() => checkCard(selection.id, cards[chosenID].id)}
            >
              <ReactCardFlipper height="250px" width="167px" levitate>
                <div className="front study" id={selection.id}>
                  <p className="uprev">Upright:</p>
                  <p>{selection.upright}</p>
                  <p className="uprev">Reversed:</p>
                  <p>{selection.reversed}</p>
                </div>
                <div className="back study">
                  <img
                    className="card-img"
                    src={selection.image}
                    alt={selection.name}
                  />
                </div>
              </ReactCardFlipper>
            </div>
          )
        })
        setCards(displayArray)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  useEffect(() => {
    newCard()
  }, [])

  function checkCard(clicked, answer) {
    let clickedCard = document.getElementById(clicked)
    clickedCard.style.pointerEvents = 'none'
    if (clicked == answer) {
      $(clickedCard).fadeOut('slow')
      setTimeout(() => {
        emptyArrays()
        newCard()
      }, 1700)
    } else {
      if (clickable) {
        setTimeout(() => {
          document.getElementById(clicked).style.pointerEvents = 'auto'
          document.getElementById(clicked).click()
        }, 1000)
        clickable = false
        setTimeout(() => {
          clickable = true
        }, 1050)
      }
    }
  }

  function emptyArrays() {
    idArray = []
    displayArray = []
    studyArray = []
  }

  return (
    <div className="typing">
      <h1>tarot quiz</h1>
      <div className="studyGame">
        <div className="studyCard">
          <img
            className="studyCardImg"
            src={studyCard.image}
            alt={studyCard.name}
          />
        </div>
        <div className="select">{tarotCards}</div>
      </div>
    </div>
  )
}

export default Practice
