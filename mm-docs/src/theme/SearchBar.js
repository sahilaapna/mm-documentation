import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import { useHistory } from '@docusaurus/router';

export default function SearchBarWrapper(props) {
  const history = useHistory();

  const handleSearchBarClick = () => {
    // Docusaurus might be using Algolia or a custom implementation
    // This is a fallback in case the search dialog doesn't appear
    try {
      // If the click doesn't open a search dialog, navigate to the search page
      setTimeout(() => {
        const searchDialog = document.querySelector('.DocSearch-Modal');
        if (!searchDialog) {
          history.push('/search');
        }
      }, 300);
    } catch (error) {
      console.error('Error with search:', error);
    }
  };

  return (
    <>
      <div onClick={handleSearchBarClick}>
        <SearchBar {...props} />
      </div>
    </>
  );
}
