import React from 'react'
import ReactDOM from 'react-dom'

import Profile from '../components/Profile'
import Timeline from '../components/Timeline'

fetchApi('GET', '/users/me', {}, function(response) {
  ReactDOM.render(<Profile {...response} />, document.getElementById('profile'))
})

ReactDOM.render(<Timeline />, document.getElementById('timeline'))
