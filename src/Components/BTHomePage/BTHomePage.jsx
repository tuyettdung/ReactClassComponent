import React, { Component } from 'react'
import BTHeader from './BTHeader'
import Navigation from '../Navigation'
import Content from './Content'
import BTFooter from './BTFooter'

export default class BTHomePage extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <div className='row '>
            <div className='col-6'>
                <Navigation />
            </div>
            <div className='col-6'>
                <Content />
            </div>
        </div>
        <BTFooter />

      </div>
    )
  }
}
