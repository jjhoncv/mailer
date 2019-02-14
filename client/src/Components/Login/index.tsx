import * as React from 'react'
import { FormStyled, FormItemStyled } from './styled'

interface ILogin {
  success: Function;
}

export interface IStateLogin {
  user: string;
  password: string;
}

export class Login extends React.Component<ILogin, IStateLogin> {
  constructor(props: ILogin) {
    super(props);
    this.state = {
      user: '',
      password: ''
    }
  }

  handleUser(e: any) {
    this.setState({ user: e.target.value })
  }

  handlePassword(e: any) {
    this.setState({ password: e.target.value })
  }

  onSubmit(e: any) {
    const { success } = this.props;
    e.preventDefault();
    success(this.state);
  }

  render() {
    return (
      <div>
        <FormStyled onSubmit={(e) => this.onSubmit(e)}>
          <FormItemStyled>
            <label>Username:</label>
            <input type="text" name="user" onChange={(e) => this.handleUser(e)} required />
          </FormItemStyled>
          <FormItemStyled>
            <label>Password:</label>
            <input type="password" name="password" onChange={(e) => this.handlePassword(e)} required />
          </FormItemStyled>
          <FormItemStyled>
            <input type="submit" value="Enviar" />
          </FormItemStyled>
        </FormStyled>
      </div>
    )
  }
}