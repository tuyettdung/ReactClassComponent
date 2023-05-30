import React, { Component } from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'

export default class HomeTemplate extends Component {
  render() {
    return (
      <>
      <Header />
      <main id='body' style={{minHeight:650}}>
        <Outlet />
      </main>
      <footer className='bg-dark text-white text-center p-5'>
        footer cybersoft
      </footer>
      </>
    )
  }
}
