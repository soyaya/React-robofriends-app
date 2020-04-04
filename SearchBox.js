import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <input
        style={{ padding: '3px', backgroundColor: 'LightGreen' }}
        type='search'
        placeholder='Search for robots'
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
