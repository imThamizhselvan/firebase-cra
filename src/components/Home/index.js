import React, { Component } from 'react';
import { Wrapper } from './styles';
import { auth } from '../../firebase';

export default class Home extends Component {

  handleClick = () => {
    console.log('hit');
    auth.doSignInWithEmailAndPassword('thamizhtechie@gmail.com', 'password')
    .then(() => {
      console.log('success');
    })
    .catch(error => {
      console.log('error');
    });
  }

  render () {
    return (
      <Wrapper>
        <p> hello world </p>
        <button onClick={this.handleClick}> login </button>
      </Wrapper>
    );
  }
}
