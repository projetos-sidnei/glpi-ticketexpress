import React from 'react';
import SubmenuLink from '../../submenu/link/index';
export default class Items extends React.Component {
  generateLink = () => {
    
    return <SubmenuLink
      key={this.props.id}
      url={this.props.url}
      title={this.props.title}
      items={this.props.items} />
  }

  generateSubmenu = () => {
    let content = [this.generateLink()];
    return content;
  }

  _handleClick = () =>{
    if(this.props.items){
      alert('É um subitem');
    }
  }

  render() {
    const submenu = this.generateSubmenu();
    return (
      <>
        <li onClick={this._handleClick}>
          {submenu}
        </li>
      </>
    );
  }
}