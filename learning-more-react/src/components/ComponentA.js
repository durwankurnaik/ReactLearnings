import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ComponentA extends Component {
  render() {
    return (
      <div>
        This is Component A
        <ComponentB />
      </div>
    )
  }
}

export default ComponentA
