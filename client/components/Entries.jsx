import React from 'react'

function Entries() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  let today = year + '/' + month + '/' + day

  return (
    <div className="typing">
      <div className="writing-header">
        <h2>title</h2>
        <h2>date: {today}</h2>
      </div>
      <p></p>
    </div>
  )
}

export default Entries
