import React from 'react';

export default class Icon extends React.Component {
  render() {
    const icon = this.props.icon;
    return (
      <>
        {icon ? (<span className={this.props.icon}></span>) :
          (<img src={this.props.src} alt={this.props.src}></img>)
        }
      </>
    );
  }
}