import React, { useState } from 'react';
import Header from '../../components/header/Header';
import { Redirect } from 'react-router-dom';
import SideBar from '../../components/sidebar/main/index';
import Table from '../../components/table/Table';
import data from '../../data.js';
// import Ticket from '../ticket/Ticket';

export default function Home() {
  const [redirect, setRedirect] = useState('');
  const [storage, setStorage] = useState(false);

  function clearStorageAll() {
    localStorage.removeItem('session_token');
    setRedirect('/login',);
    setStorage(true);
  }

  if (storage) {
    return <Redirect to={redirect} />
  } else {
    return (
      <>
        <Header onClick={clearStorageAll} />
        <Table /> 
        {/* <Ticket/> */}
        <SideBar menu={data} />
      </>
    )
  }
}
