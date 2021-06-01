import React from 'react';

export default function Ticket({props}) {
    return (
      <div className="modal" ref={props}>
        <div className="container">
          <button className="close"></button>
          <div className="content">
          {props}
          </div>
        </div>
      </div>
    )
}