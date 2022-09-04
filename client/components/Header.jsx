import React from 'react'
import $ from 'jquery'

function Header() {
  return (
    <>
      <header>
        <div className="links">
          <div className="links-content eighty">
            <div className="logo">
              <a href="/">
                <img
                  className="moonpic"
                  src="/images/moon3.png"
                  alt="dreamoir's moon"
                />
              </a>
              <a href="/">
                <p className="logoTitle" href="/">
                  dreamoir
                </p>
              </a>
            </div>
            <div id="nav-bar">
              <a className="header-link" href="/">
                home
              </a>
              <a className="header-link" href="/diary">
                dreams
              </a>
              <a className="header-link" href="/study">
                tarot
              </a>
              <a className="header-link" href="/practice">
                quiz
              </a>
              <div className="search-bar">
                <form id="form">
                  <input
                    type="search"
                    id="query"
                    name="q"
                    placeholder="I'm looking for..."
                  />
                  <button id="searchBtn">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
