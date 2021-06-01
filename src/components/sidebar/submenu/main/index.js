import React from 'react';
import SubmenuItems from '../items/index';
export default class Submenu extends React.Component {
  
  generateItems = (item) => {
    return <SubmenuItems
      key={item.id}
      items={item.items}
      url={item.url}
      title={item.title}
      submenu={item.submenu} />
  }

  render() {
    const submenu = this.props.submenu.map(this.generateItems);
    return (
      <div className='submenu'>
        <ul>
          {submenu}
        </ul>
      </div>
    );
  }
}