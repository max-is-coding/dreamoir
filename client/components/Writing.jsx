import React, { useState, useEffect } from 'react'
import { getDreams } from '../apiClient'

const keyword_extractor = require('keyword-extractor')

function Writing() {
  const [text, setText] = useState('')
  const [analysedText, setAnalysis] = useState('')
  const [tags, setTags] = useState('')
  const [tag, setTagTag] = useState('')
  const [isVis, setVisibility] = useState('')
  const [tagVis, setTagVisibility] = useState('flex')

  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  let today = year + '/' + month + '/' + day

  function autoGrow() {
    let text = document.getElementById('entry')
    text.style.height = '296px'
    text.style.height = text.scrollHeight + 'px'
  }

  function analysis(dreamDiary) {
    let dreamWordArray = dreamDiary
      .toLowerCase()
      .replace(/[\p{P}$+<=>^`|~]/gu, '')

    let tagArray = []

    const extraction_result = keyword_extractor.extract(dreamWordArray, {
      language: 'english',
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: false,
    })

    getDreams()
      .then((dreams) => {
        dreams.forEach((dream) => {
          let keywords = dream.keyword.toLowerCase()
          let keywordArray = keywords.split(' ')
          if (
            extraction_result.includes(keywords) ||
            (extraction_result.includes(keywordArray[0]) &&
              extraction_result.includes(keywordArray[1])) ||
            (extraction_result.includes('actor') &&
              keywordArray.includes('actor')) ||
            (extraction_result.includes('actress') &&
              keywordArray.includes('actress'))
          ) {
            tagArray.push(
              <div className="tag" key={dream.id}>
                <button onClick={() => clickTag(dream.keyword)}>
                  <p>{dream.keyword}</p>
                </button>
              </div>
            )
          }
        })
        loadTags(tagArray)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
  function loadTags(arr) {
    setTagVisibility('flex fadeOut')

    setTimeout(() => {
      setTags(arr)
      setTagTag(
        <div className="tagId">
          <p>Tags: </p>
        </div>
      )
      setTagVisibility('flex fadeIn')
    }, 500)
  }

  function clickTag(word) {
    setVisibility('fadeOut')
    setTimeout(() => {
      getDreams()
        .then((dreams) => {
          dreams.forEach((dream) => {
            if (dream.keyword == word) {
              setVisibility('fadeIn')
              setAnalysis(
                <div key={dream.id}>
                  <p>{dream.meaning}</p>
                </div>
              )
            }
          })
        })
        .catch((err) => {
          console.error(err.message)
        })
    }, 200)
  }

  return (
    <div className="typing">
      <div className="writing-header">
        <h2>title</h2>
        <h2>date: {today}</h2>
      </div>
      <form id="newEntry">
        <textarea
          id="entry"
          placeholder="tell me your dreams..."
          onInput={autoGrow}
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
      </form>
      <div className="btnDiv">
        <button className="dreamButton" onClick={() => analysis(text)}>
          <p>decipher</p>
        </button>
      </div>
      <div className={tagVis}>
        {tag}
        <div className="tags">{tags}</div>
      </div>
      <div className="deciphered">
        <div className={isVis}>{analysedText}</div>
      </div>
    </div>
  )
}

export default Writing
