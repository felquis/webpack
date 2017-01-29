import React, { Component } from 'react'
import styles from './style.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.title
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      title: 'Another Title'
    })
  }

  render () {
    return (
      <header onClick={this.handleClick} className={styles.header}>
        <h1>{this.state.title}</h1>
      </header>
    )
  }
}

export default Header
