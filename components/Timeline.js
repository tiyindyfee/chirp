import React from 'react'

class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.updateTimeline = this.updateTimeline.bind(this)
    this.post = this.post.bind(this)
    this.chirpChange = this.chirpChange.bind(this)

    this.state = {
      chirps: [],
      value: ''
    }
  }

  componentDidMount() {
    this.refs.chirp.focus()
    this.updateTimeline()
  }

  updateTimeline() {
    fetchApi('GET', '/posts', {}, (response) => {
      this.setState({chirps: response})
    })
  }

  post(e) {
    if (e.key === 'Enter') {
      fetchApi('POST', '/posts', {body: e.target.value}, (response, statusCode) => {
        // Success
        if (statusCode >= 200 && statusCode < 300) {
          this.setState({value: ''})
          this.updateTimeline()
        }
        // Failed
        else {
          alert('Error with Chirp API')
        }
      })
    }
  }

  chirpChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    var chirps = this.state.chirps.map(function(chirp, key) {
      return <div className="well well-sm" key={key}>
        <div className="row">
          <div className="col-xs-4 col-sm-3">
            <img src={chirp.user.avatar ? chirp.user.avatar : '/img/avatar-placeholder.png'} alt={chirp.user.username} style={{width: '100%', marginBottom: 0}} className="thumbnail" />
          </div>
          <div className="col-xs-8 col-sm-9">
            <div className="panel panel-default" style={{marginBottom: 0}}>
              <div className="panel-body">
                {chirp.body}<br />
                <small className="text-muted">Chirped by @{chirp.user.username} {moment(chirp.created_at).startOf('hour').fromNow()}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    })

    return <div>
      <div className="well well-sm">
        <input ref="chirp" type="text" placeholder="Chirp!" className="form-control" onKeyPress={this.post} value={this.state.value} onChange={this.chirpChange} />
      </div>
      <h5 className="text-center">Cheeps from your peeps...</h5>
      {chirps}
    </div>
  }
}

export default Timeline
