import React, { Component } from 'react'
import ComponentC from './ComponentC'

export class ComponentB extends Component {
  render() {
    return (
      <div>
        This is Component B
        <ComponentC />
      </div>
    )
  }
}

export default ComponentB
