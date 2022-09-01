import React from 'react'

function Writing() {
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
  return (
    <div className="typing">
      <div className="writing-header">
        <h2>title</h2>
        <h2>date: {today}</h2>
      </div>
      <form>
        <textarea
          id="entry"
          placeholder="tell me your dreams..."
          onInput={autoGrow}
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Writing
