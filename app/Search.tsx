import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchInput.css';

const SearchInput: React.FC = () => {
  return (
    <div className="search-container">
      <label htmlFor="search-input" className="search-icon">
        <FaSearch />
      </label>
      <input
        type="text"
        id="search-input"
        className="search-input"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
