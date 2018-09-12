import React, { Component } from 'react'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

class Base extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default Base
