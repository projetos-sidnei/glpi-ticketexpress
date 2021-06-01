import React from 'react';
import '../../assets/scss/styles.scss';

function Header ({onClick}) {
  return (
    <div className="header">
      <div className="header_top">
        <div className="c_logo" href="http://localhost:3000/home?" title="Home"></div>
        <div className="txt_title">
          <p>Ticket Express</p>
        </div>
        <div className="c_preference">
          <div
            className="fa fa-power-off" 
            title="Sair" 
            onClick={onClick}>
            <span className="sr-only">Sair&gt;</span>
          </div>
        </div>
      </div>
      <div className="c_menu"></div>
    </div>
  );
}

export default Header;
