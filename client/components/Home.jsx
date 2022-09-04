import React from 'react'

function Home() {
  return (
    <div className="typing">
      <h1>welcome back.</h1>
      <h2>what would you like to do today?</h2>
      <div className="kanji">
        <a href="/diary" className="kanjiLink">
          <img src="/images/yume.png" alt="kanji for dream" />
          <h3>dreams</h3>
        </a>
        <a href="/reading" className="kanjiLink">
          <img src="/images/kigaku2.png" alt="kanji for dream" />
          <h3>tarot</h3>
        </a>
      </div>
    </div>
  )
}

export default Home
