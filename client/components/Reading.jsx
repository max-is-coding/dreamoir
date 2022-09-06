import React, { useState, useEffect } from 'react'
import { getCards } from '../apiClient'
import { set } from 'lodash'

let readingArray = []
let idArray = []
let displayArray = []
let meaningArray = []
let middleArray = []
let endArray = []

function Reading() {
  const [tarotCards, setCards] = useState([])
  const [isVis, setVisibility] = useState('hidden')
  const [celticVis, setCelVis] = useState('hidden')
  const [btnVis, setBtnVis] = useState('btnDiv')
  const [celtic2, setCeltic2] = useState([])
  const [celtic3, setCeltic3] = useState([])
  const [celtic4, setCeltic4] = useState([])
  const [celticMid, setCelticMid] = useState([])
  const [celticEnd, setCelticEnd] = useState([])
  const [meanings, setMeanings] = useState([])
  const [btnClass, setButtons] = useState('dreamButton rBtn')
  const [view, setView] = useState('readDiv')

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

  function celticReading() {
    getCards()
      .then((cards) => {
        getRndm()
        function getRndm() {
          let randID = Math.floor(Math.random() * 72)
          if (!idArray.includes(randID)) {
            readingArray.push(cards[randID])
            idArray.push(randID)
          }
          if (idArray.length < 10) {
            getRndm()
          }
        }
        let i = 1
        readingArray.forEach((selection) => {
          const upOrDown = Math.floor(Math.random() * 2)
          switch (i) {
            case 3:
              if (upOrDown == 0) {
                setCeltic3(
                  <div className="celticCard c3" key={selection.id}>
                    <img
                      className="reading-C reversed"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>The Past: {selection.name}</p>
                    <p>
                      <i>
                        <i>{selection.reversed}</i>
                      </i>
                    </p>
                  </div>
                )
              } else if (upOrDown == 1) {
                setCeltic3(
                  <div className="celticCard c3" key={selection.id}>
                    <img
                      className="reading-C"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>The Past: {selection.name}</p>
                    <p>
                      <i>{selection.upright}</i>
                    </p>
                  </div>
                )
              }
              break
            case 5:
              if (upOrDown == 0) {
                middleArray.unshift(
                  <div className="celticCard c5" key={selection.id}>
                    <img
                      className="reading-C reversed"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>Conscious: {selection.name}</p>
                    <p>
                      <i>
                        <i>{selection.reversed}</i>
                      </i>
                    </p>
                  </div>
                )
              } else if (upOrDown == 1) {
                middleArray.unshift(
                  <div className="celticCard c5" key={selection.id}>
                    <img
                      className="reading-C"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>Conscious: {selection.name}</p>
                    <p>
                      <i>{selection.upright}</i>
                    </p>
                  </div>
                )
              }
              break
            case 1:
              if (upOrDown == 0) {
                middleArray.push(
                  <div className="celticCard c1" key={selection.id}>
                    <img
                      className="reading-C reversed"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>The Present: {selection.name}</p>
                    <p>
                      <i>{selection.reversed}</i>
                    </p>
                  </div>
                )
              } else if (upOrDown == 1) {
                middleArray.push(
                  <div className="celticCard c1" key={selection.id}>
                    <img
                      className="reading-C"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>The Present: {selection.name}</p>
                    <p>
                      <i>{selection.upright}</i>
                    </p>
                  </div>
                )
              }
              break
            case 6:
              if (upOrDown == 0) {
                middleArray.push(
                  <div className="celticCard c6" key={selection.id}>
                    <img
                      className="reading-C reversed"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>Unconscious: {selection.name}</p>
                    <p>
                      <i>{selection.reversed}</i>
                    </p>
                  </div>
                )
              } else if (upOrDown == 1) {
                middleArray.push(
                  <div className="celticCard c6" key={selection.id}>
                    <img
                      className="reading-C"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>Unconscious: {selection.name}</p>
                    <p>
                      <i>{selection.upright}</i>
                    </p>
                  </div>
                )
              }
              break
            case 2:
              if (upOrDown == 0) {
                setCeltic2(
                  <div className="celticCard c2" key={selection.id}>
                    <img
                      className="reading-C reversed"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>The Challenge: {selection.name}</p>
                    <p>
                      <i>{selection.reversed}</i>
                    </p>
                  </div>
                )
              } else if (upOrDown == 1) {
                setCeltic2(
                  <div className="celticCard c2" key={selection.id}>
                    <img
                      className="reading-C"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>The Challenge: {selection.name}</p>
                    <p>
                      <i>{selection.upright}</i>
                    </p>
                  </div>
                )
              }
              break
            case 4:
              if (upOrDown == 0) {
                setCeltic4(
                  <div className="celticCard" key={selection.id}>
                    <img
                      className="reading-C reversed"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>The Future: {selection.name}</p>
                    <p>
                      <i>{selection.reversed}</i>
                    </p>
                  </div>
                )
              } else if (upOrDown == 1) {
                setCeltic4(
                  <div className="celticCard c4" key={selection.id}>
                    <img
                      className="reading-C"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>The Future: {selection.name}</p>
                    <p>
                      <i>{selection.upright}</i>
                    </p>
                  </div>
                )
              }
              break
            case 10:
              if (upOrDown == 0) {
                endArray.unshift(
                  <div className="celticCard c10" key={selection.id}>
                    <img
                      className="reading-C reversed"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>Outcome: {selection.name}</p>
                    <p>
                      <i>{selection.reversed}</i>
                    </p>
                  </div>
                )
              } else if (upOrDown == 1) {
                endArray.unshift(
                  <div className="celticCard c10" key={selection.id}>
                    <img
                      className="reading-C"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>Outcome: {selection.name}</p>
                    <p>
                      <i>{selection.upright}</i>
                    </p>
                  </div>
                )
              }
              break
            case 9:
              if (upOrDown == 0) {
                endArray.unshift(
                  <div className="celticCard c9" key={selection.id}>
                    <img
                      className="reading-C reversed"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>Hopes And/Or Fears: {selection.name}</p>
                    <p>
                      <i>{selection.reversed}</i>
                    </p>
                  </div>
                )
              } else if (upOrDown == 1) {
                endArray.unshift(
                  <div className="celticCard c9" key={selection.id}>
                    <img
                      className="reading-C"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>Hopes And/Or Fears: {selection.name}</p>
                    <p>
                      <i>{selection.upright}</i>
                    </p>
                  </div>
                )
              }
              break
            case 8:
              if (upOrDown == 0) {
                endArray.unshift(
                  <div className="celticCard c8" key={selection.id}>
                    <img
                      className="reading-C reversed"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>External Influences: {selection.name}</p>
                    <p>
                      <i>{selection.reversed}</i>
                    </p>
                  </div>
                )
              } else if (upOrDown == 1) {
                endArray.unshift(
                  <div className="celticCard c8" key={selection.id}>
                    <img
                      className="reading-C"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>External Influences: {selection.name}</p>
                    <p>
                      <i>{selection.upright}</i>
                    </p>
                  </div>
                )
              }
              break
            case 7:
              if (upOrDown == 0) {
                endArray.unshift(
                  <div className="celticCard c7" key={selection.id}>
                    <img
                      className="reading-C reversed"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p>Advice: {selection.name}</p>
                    <p>
                      <i>{selection.reversed}</i>
                    </p>
                  </div>
                )
              } else if (upOrDown == 1) {
                endArray.unshift(
                  <div className="celticCard c7" key={selection.id}>
                    <img
                      className="reading-C"
                      src={selection.image}
                      alt={selection.name}
                    />
                  </div>
                )
                meaningArray.push(
                  <div className="meanings" key={selection.id}>
                    <p className="meaningID">Advice: {selection.name}</p>
                    <p>
                      <i>{selection.upright}</i>
                    </p>
                  </div>
                )
              }
              break
          }
          i++
        })
        loadCeltic()
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

  function loadCeltic() {
    setCelVis('fadeOut')
    setTimeout(() => {
      setCelticMid(middleArray)
      setCelticEnd(endArray)
      setMeanings(meaningArray)
      setCelVis('fadeIn')
    }, 300)
  }

  function getReading() {
    setVisibility('fadeOut')
    newReading()
    setBtnVis('btnDiv fadeOutBtn')
    setTimeout(() => {
      setButtons('none')
    }, 500)
  }

  function getCelticReading() {
    setCelVis('fadeOut')
    celticReading()
    setBtnVis('btnDiv fadeOutBtn')
    setTimeout(() => {
      setButtons('none')
    }, 500)
    setTimeout(() => {
      setView('')
    }, 1000)
  }

  // function emptyArrays() {
  //   idArray = []
  //   displayArray = []
  //   readingArray = []
  // }

  return (
    <div className="typing">
      <h1>today's reading</h1>
      <div className={view}>
        <div className={btnVis}>
          <button className={btnClass} onClick={getReading}>
            <p>3 card reading</p>
          </button>
          <button className={btnClass} onClick={getCelticReading}>
            <p>celtic cross</p>
          </button>
        </div>
        <div className={isVis}>
          <div className="reading">
            <div className="readingCards">{tarotCards}</div>
          </div>
        </div>
        <div className={celticVis}>
          <div className="celtic">
            <div className="cCards">
              <div className="celt">{celtic3}</div>
              <div className="celt">{celticMid}</div>
              <div className="two">{celtic2}</div>
              <div className="celt">{celtic4}</div>
              <div className="celt">{celticEnd}</div>
            </div>
            <div className="celMeanings">{meanings}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reading
