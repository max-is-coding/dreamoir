import React, { useState, useEffect } from 'react'
import { getCards } from '../apiClient'
import { set } from 'lodash'

let readingArray = []
let idArray = []
let displayArray = []

function Reading() {
  const [tarotCards, setCards] = useState([])
  const [isVis, setVisibility] = useState('hidden')
  const [btnVis, setBtnVis] = useState('btnDiv')

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
        loadReading(displayArray)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  function loadReading(arr) {
    setVisibility('fadeOut')
    setTimeout(() => {
      setCards(arr)

      setVisibility('fadeIn')
    }, 300)
  }

  function getReading() {
    setVisibility('fadeOut')
    newReading()
    setBtnVis('btnDiv fadeOutBtn')
  }

  // function emptyArrays() {
  //   idArray = []
  //   displayArray = []
  //   readingArray = []
  // }

  return (
    <div className="typing">
      <h1>today's reading</h1>
      <div className="readDiv">
        <div className={btnVis}>
          <button className="dreamButton rBtn" onClick={getReading}>
            <p>read my tarot</p>
          </button>
        </div>
        <div className={isVis}>
          <div className="reading">
            <div className="readingCards">{tarotCards}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reading
