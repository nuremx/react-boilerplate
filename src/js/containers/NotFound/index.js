import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

class NotFound extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { state, props } = this
    return (
      <div>
        <h1>Not found</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat qui
          distinctio molestias aliquid asperiores quibusdam, voluptatibus omnis
          laboriosam aperiam, possimus, fugiat consequuntur illo ad ipsum,
          architecto deserunt labore perspiciatis praesentium.
        </p>
        <Link to="/">Back home</Link>
      </div>
    )
  }
}

NotFound.propTypes = {}

export default NotFound
