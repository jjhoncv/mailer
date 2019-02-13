import React, { Component } from 'react'
import { Login } from '../../Components/Login'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'

interface IHome {

}

export class Home extends Component<IHome> {
  constructor(props: IHome) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <Login />
        <Footer />
      </div>
    )
  }
}