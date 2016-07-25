import React from 'react'
import ReactDOM from 'react-dom'

import Following from '../components/Following'

fetchApi('GET', '/users', {}, function(response) {
  ReactDOM.render(<Following users={response} />, document.getElementById('followers'))
})
