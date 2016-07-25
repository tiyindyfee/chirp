import React from 'react'

class Following extends React.Component {
  constructor(props) {
    super(props)
    this.followToggle = this.followToggle.bind(this)
    this.state = {
      users: props.users
    }
  }

  followToggle(e) {
    var users = this.state.users,
        followingUser = !users[e.target.getAttribute('data-user-key')].currently_being_followed

    // Toggle state
    users[e.target.getAttribute('data-user-key')].currently_being_followed = followingUser
    this.setState({users: users})

    // Update API
    if (followingUser) {
      fetchApi('POST', '/followings', {
        id: users[e.target.getAttribute('data-user-key')].id
      })
    }
    else {
      fetchApi('DELETE', '/followings/' + users[e.target.getAttribute('data-user-key')].id, {})
    }
  }

  render() {
    var users = this.state.users.map((user, key) => {
      var avatarStyle = {width: '100%'}

      return <div className="well" key={key}>
        <div className="row">
          <div className="col-xs-4 col-sm-3">
            <img src={user.avatar ? user.avatar : '/img/avatar-placeholder.png'} alt={user.username} style={avatarStyle} className="thumbnail" />
          </div>
          <div className="col-xs-8 col-sm-9">
            <h4>@{user.username}</h4>
            <button className={user.currently_being_followed ? 'btn btn-success btn-block' : 'btn btn-default btn-block'} onClick={this.followToggle} data-user-key={key}>{user.currently_being_followed ? 'Following' : 'Follow'}</button>
          </div>
        </div>
      </div>
    })

    return <div>{users}</div>
  }
}

export default Following
