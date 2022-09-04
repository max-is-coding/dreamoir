import React, { useState, useEffect } from 'react'
import { getCards } from '../apiClient'
import ReactCardFlipper from 'react-card-flipper'

let readingArray = []
let idArray = []
let displayArray = []

function Reading() {
  const [tarotCards, setCards] = useState([])
  const [isVis, setVisibility] = useState('')
  const [meaning, setMeaning] = useState('')

  function newReading() {
    getCards()
      .then((cards) => {
        getRndm()
        function getRndm() {
          let randID = Math.floor(Math.random() * 72)
          if (!idArray.includes(randID)) {
            readingArray.push(cards[randID])
            idArray.push(randID)
          }
          if (idArray.length < 3) {
            getRndm()
          }
        }

        readingArray.forEach((selection) => {
          const upOrDown = Math.floor(Math.random() * 2)
          if (upOrDown == 0) {
            displayArray.push(
              <div className="todaysCards" key={selection.id}>
                <div id={selection.id}>
                  <img
                    className="reading-img reversed"
                    src={selection.image}
                    alt={selection.name}
                  />
                </div>
                <div className="meanings">
                  <p>{selection.reversed}</p>
                </div>
              </div>
            )
          } else if (upOrDown == 1) {
            displayArray.push(
              <div className="todaysCards" key={selection.id}>
                <div id={selection.id}>
                  <img
                    className="reading-img"
                    src={selection.image}
                    alt={selection.name}
                  />
                </div>
                <div className="meanings">
                  <p>{selection.upright}</p>
                </div>
              </div>
            )
          }
        })

        setCards(displayArray)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  useEffect(() => {
    newReading()
  }, [])

  // function checkCard(clicked, answer) {
  //   let clickedCard = document.getElementById(clicked)
  //   clickedCard.style.pointerEvents = 'none'
  //   if (clicked == answer) {
  //     setTimeout(() => {
  //       setVisibility('fadeOut')
  //       emptyArrays()
  //       newCard()
  //       setTimeout(() => {
  //         setVisibility('fadeIn')
  //       }, 500)
  //     }, 1700)
  //   } else {
  //     if (clickable) {
  //       setTimeout(() => {
  //         document.getElementById(clicked).style.pointerEvents = 'auto'
  //         document.getElementById(clicked).click()
  //       }, 1000)
  //       clickable = false
  //       setTimeout(() => {
  //         clickable = true
  //       }, 1050)
  //     }
  //   }
  // }

  function emptyArrays() {
    idArray = []
    displayArray = []
    readingArray = []
  }

  return (
    <div className="typing">
      <h1>today's reading</h1>
      <div className={isVis}>
        <div className="reading">
          <div className="readingCards">{tarotCards}</div>
        </div>
      </div>
    </div>
  )
}

export default Reading
