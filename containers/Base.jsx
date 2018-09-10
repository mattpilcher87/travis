import React, { Component } from 'react'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

class Base extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Hello</h2>
            <h2>Cheese</h2>
        {/* <Header />
        <Footer /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Base
