import React, { useState } from 'react';
import SidebarIcon from '../icons/index';
import OutsideClickComponent from '../../../utils/OutsideClickComponent';
import Ticket from '../../../pages/ticket/Ticket';
//import Table from '../../table/Table';
//import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import useOutsideClick from '../../../utils/useOutsideClick';

export default function Main({ menu }) {

  const [stateButton, setStateButton] = useState('no-active');
  // const [stateTicket, setStateTicket] = useState('no-active');
  const [isTicketVisible, setIsTicketVisible] = useState(false);
  // const [stateKey, setStateKey] = useState(0);
  // const [show, setSate] = useState(false);
  // const ref = useRef();

  // useOutsideClick(ref, () => {
  //   if (show) setSate(false);
  // });
  function handleActiveButton(id) {
    setStateButton(id);
    // setStateKey(id);
    // setStateTicket(id);
    setIsTicketVisible(true);
    // return (<>
    // {isTicketVisible ? <Ticket ><h2>Ticket do Glpi</h2></Ticket> : null}
    // </>)
  }

  // className={stateKey === stateTicket ? 'modal' : 'no-active'}
  return (
    <>
      <OutsideClickComponent handleActiveButton={handleActiveButton}>
      {/* <ClickAwayListener onClickAway={() => handleActiveButton('no-active')}> */}
      {isTicketVisible ? <Ticket ><h2>Ticket do Glpi</h2></Ticket> : null}
        <div className='sidebar'>
          <ul>
            {menu.map((item, key) => (
              <li
                className={key === stateButton ? 'li-active' : 'li-default'}
                id={key}
                key={key}
                title={item.title}
                onClick={() => handleActiveButton(key)}>
                <SidebarIcon
                  key={key}
                  icon={item.icon}
                  src={item.src} />
              </li>
            ))}
          </ul>
        </div>
        </OutsideClickComponent>
      {/* </ClickAwayListener> */}
    </>
  );
}