import * as React from 'react'
import { Login } from '../../Components/Login'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'

interface IHome {

}

export class Home extends React.Component<IHome> {
  constructor(props: IHome) {
    super(props)
  }

  submit(e: any) {
    e.preventDefault();
    alert('alert');
  }
  render() {
    return (
      <div>
        <Header />
        <Login onSubmit={this.submit} />
        <Footer />
      </div>
    )
  }
}