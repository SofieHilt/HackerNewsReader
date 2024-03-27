import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search topics..."
      />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};

export default Search;
