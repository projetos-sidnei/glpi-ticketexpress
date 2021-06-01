import React from 'react';
import SidebarLink from '../link/index';
import SidebarIcon from '../icons/index';

export default class Items extends React.Component {

  generateLink = () => {
    return <SidebarLink
      //key={this.props.id}
      id={this.props.id}
      url={this.props.url}
      title={this.props.title}/>
  }

  generateIcon = () => {
    return <SidebarIcon
      //key={this.props.id}
      id={this.props.id}
      icon={this.props.icon}
      src={this.props.src} />
  }
  handleClickButtonSidebar = (e) => {

    console.log('id:'+ this.props.id);
  }

  render() {
    console.log('key: '+this.props.id);
    const menu = this.generateLink();
    const icon = this.generateIcon();
    
    return (
      <>
        <li>
          {icon}
          {menu}
        </li>
      </>
    );
  }
}