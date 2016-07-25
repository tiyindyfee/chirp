import React from 'react'

var Profile = (props) => <div className="text-center">
  <img className="img-responsive thumbnail" src={props.avatar ? props.avatar : '/img/avatar-placeholder.png'} alt={props.username} style={{width: '100%'}} />
  <h3>@{props.username}</h3>
  <div className="row">
    <div className="col-xs-6">{props.followers_count} Followers</div>
    <div className="col-xs-6">{props.following_count} Following</div>
  </div>
  <br />
  <a href="followers.html" className="btn btn-default btn-block btn-sm">Follow Some Peeps</a><br />
</div>

export default Profile
