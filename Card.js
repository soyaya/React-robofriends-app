import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div
      style={{
        backgroundColor: 'green',
        borderRadius: '3px',
        padding: '3px',
        animation: 'grow',
        margin: '2px',
        display: 'inline-block'
      }}
    >
      <div>
        <img src={`https://robohash.org/${id}`} alt='robo' />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
