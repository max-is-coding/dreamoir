import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { BrowserRouter as Route } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Route>
      <App />
    </Route>,
    document.getElementById('app')
  )
})
