import React from 'react'
import styles from './style.css'

const Header = (props) => {
  console.log(styles)

  return (
    <header className={styles.header}>
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header
