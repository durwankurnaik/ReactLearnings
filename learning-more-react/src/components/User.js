import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div className='text-center mt-10 text-3xl'>
        {this.props.render()}
      </div>
    )
  }
}

export default User
