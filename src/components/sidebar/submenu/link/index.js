import React from 'react';
export default class LinkSubmenu extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <>
        {title ? (<h1>{this.props.title}</h1>) :
         (<p>{this.props.items}</p>)}
      </>
    );
  }
}