import React, { Component } from 'react';

import { sendError } from '../error-config';

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
      if (this.state.hasError) {
          return <h2>Oh no! Something went wrong.</h2>
      }
      return this.props.children; 
  }
}