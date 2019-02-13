import React, { Component } from 'react';

interface IHeader {

}

export const Header: React.SFC<IHeader> = (props) => {
  return (
    <header>
      <div>
        <img src="" alt="" />
      </div>
      <div>Login</div>
    </header>
  )
}