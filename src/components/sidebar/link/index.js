import React from 'react';
export default class Link extends React.Component {
  render () {
    return(
      <p>{this.props.title}</p>
    );
  }
}