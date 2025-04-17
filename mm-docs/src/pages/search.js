import React from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import { useEffect, useState } from 'react';
import styles from './search.module.css';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { search, initializeSearchIndex } from '@site/src/utils/searchIndexer';

export default function SearchPage() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Get the search query from the URL
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const params = new URLSearchParams(location.search);
      const query = params.get('q');
      if (query) {
        setSearchQuery(query);
        performSearch(query);
      }
    }
  }, [location]);

  // Initialize search index
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      initializeSearchIndex();
    }
  }, []);

  // Perform search using the searchIndexer
  function performSearch(query) {
    setIsSearching(true);
    
    setTimeout(() => {
      const searchResults = search(query);
      setResults(searchResults);
      setIsSearching(false);
    }, 300); // Small delay for UI feedback
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      
      // Update the URL to include the search query
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('q', searchQuery);
      window.history.pushState(null, '', `${location.pathname}?${searchParams.toString()}`);
    }
  };

  return (
    <Layout title="Search Results" description="Search results page">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Search Results</h1>
            
            <form onSubmit={handleSubmit} className={styles.searchForm}>
              <input
                type="search"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </form>
            
            {isSearching ? (
              <div className={styles.loadingContainer}>
                <p>Searching...</p>
              </div>
            ) : (
              <>
                {searchQuery && (
                  <p className={styles.resultsCount}>
                    Found {results.length} result{results.length !== 1 ? 's' : ''} for "{searchQuery}"
                  </p>
                )}
                
                <div className={styles.searchResults}>
                  {results.length > 0 ? (
                    <ul className={styles.resultsList}>
                      {results.map((result, index) => (
                        <li key={index} className={styles.resultItem}>
                          <div className={styles.resultHeader}>
                            <a href={result.url} className={styles.resultTitle}>{result.title}</a>
                            <span className={styles.resultType}>{result.type}</span>
                          </div>
                          <div className={styles.resultSection}>{result.section}</div>
                          <p className={styles.resultContent}>{result.content}</p>
                        </li>
                      ))}
                    </ul>
                  ) : searchQuery && !isSearching ? (
                    <div className={styles.noResults}>
                      <p>No results found for "{searchQuery}"</p>
                      <p>Try using different keywords or check your spelling</p>
                    </div>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 