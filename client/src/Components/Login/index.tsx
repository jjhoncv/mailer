import * as React from 'react'
import { FormStyled, FormItemStyled } from './styled'

interface ILogin {
  onSubmit: Function;
}

export class Login extends React.Component<ILogin> {
  constructor(props: ILogin) {
    super(props)
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <FormStyled onSubmit={(e) => onSubmit(e)}>
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