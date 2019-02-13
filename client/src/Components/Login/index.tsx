import React, { Component } from 'react'
import { FormStyled, FormItemStyled } from './styled'

interface ILogin {

}

export class Login extends Component<ILogin> {
  constructor(props: ILogin) {
    super(props)
  }

  render() {
    return (
      <div>
        <FormStyled>
          <FormItemStyled>
            <label>Username:</label>
            <input type="text" name="user" />
          </FormItemStyled>
          <FormItemStyled>
            <label>Password:</label>
            <input type="password" name="password" />
          </FormItemStyled>
          <FormItemStyled>
            <input type="submit" value="Enviar" />
          </FormItemStyled>
        </FormStyled>
      </div>
    )
  }
}