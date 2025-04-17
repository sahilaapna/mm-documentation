import React from 'react';
import Layout from '@theme/Layout';
import { useHistory, useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Sample search data - this would ideally be generated at build time
// URLs matched to actual docs directory structure
const SEARCH_DATA = [
  {
    title: 'Introduction to Mera Monitor',
    url: 'docs/intro',
    content: 'Mera Monitor is a comprehensive productivity tracking and monitoring solution designed for businesses of all sizes.',
    section: 'Getting Started',
    tags: ['introduction', 'overview']
  },
  {
    title: 'Productivity Tracking',
    url: 'docs/features/productivity-tracking',
    content: 'Discover how Mera Monitor helps track productivity with powerful monitoring features and analytics.',
    section: 'Features',
    tags: ['productivity', 'tracking', 'monitoring']
  },
  {
    title: 'Attendance Management',
    url: 'docs/features/attendance-management',
    content: 'Learn about attendance tracking, time management, and employee scheduling features.',
    section: 'Features',
    tags: ['attendance', 'time tracking', 'scheduling']
  },
  {
    title: 'Project & Task Management',
    url: 'docs/features/project-task-management',
    content: 'Explore how to manage projects, assign tasks, and track progress efficiently.',
    section: 'Features',
    tags: ['projects', 'tasks', 'management']
  },
  {
    title: 'Reporting & Analytics',
    url: 'docs/features/reporting-analytics',
    content: 'Generate insightful reports and analytics to understand productivity trends and employee performance.',
    section: 'Features',
    tags: ['reporting', 'analytics', 'dashboards']
  },
  {
    title: 'User Management',
    url: 'docs/configuration/user-management',
    content: 'Learn how to manage users, roles, and permissions within Mera Monitor to ensure proper access control.',
    section: 'Configuration',
    tags: ['users', 'roles', 'permissions']
  },
  {
    title: 'System Configuration',
    url: 'docs/configuration/system-configuration',
    content: 'Configure system settings, preferences, and customize Mera Monitor to fit your organization\'s needs.',
    section: 'Configuration',
    tags: ['configuration', 'settings', 'setup']
  },
  {
    title: 'Integration Configuration',
    url: 'docs/configuration/integration-configuration',
    content: 'Set up integrations with other tools and services to enhance your Mera Monitor experience.',
    section: 'Configuration',
    tags: ['integrations', 'third-party', 'connections']
  },
  {
    title: 'Troubleshooting',
    url: 'docs/support/troubleshooting',
    content: 'Common issues and their solutions to help you troubleshoot Mera Monitor when problems occur.',
    section: 'Support',
    tags: ['troubleshooting', 'support', 'issues']
  },
  {
    title: 'FAQs',
    url: 'docs/support/faqs',
    content: 'Answers to frequently asked questions about Mera Monitor features, functionality, and usage.',
    section: 'Support',
    tags: ['faq', 'questions', 'help']
  },
  {
    title: 'Desktop Agent',
    url: 'docs/features/desktop-agent',
    content: 'Information about the Mera Monitor desktop agent for tracking and productivity monitoring.',
    section: 'Features',
    tags: ['desktop', 'agent', 'monitoring']
  },
  {
    title: 'Dashboard Overview',
    url: 'docs/features/dashboard-overview',
    content: 'Get familiar with the Mera Monitor dashboard and its various components and metrics.',
    section: 'Features',
    tags: ['dashboard', 'overview', 'metrics']
  }
];

export default function SearchPage() {
  const {siteConfig} = useDocusaurusContext();
  const location = useLocation();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Basic search function
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simple search implementation
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase().trim();
      const results = SEARCH_DATA.filter(item => {
        return (
          item.title.toLowerCase().includes(normalizedQuery) ||
          item.content.toLowerCase().includes(normalizedQuery) ||
          item.section.toLowerCase().includes(normalizedQuery) ||
          item.tags.some(tag => tag.includes(normalizedQuery))
        );
      });
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300); // Small delay to show loading state
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      
      // Update the URL to include the search query
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('q', searchQuery);
      history.push(`${location.pathname}?${searchParams.toString()}`);
    }
  };

  const highlightText = (text, query) => {
    if (!query.trim()) {
      return text;
    }
    
    try {
      const parts = text.split(new RegExp(`(${query})`, 'gi'));
      return (
        <>
          {parts.map((part, i) => 
            part.toLowerCase() === query.toLowerCase() ? 
              <mark key={i}>{part}</mark> : 
              part
          )}
        </>
      );
    } catch (e) {
      return text;
    }
  };

  // Handle URL construction carefully
  const constructDocUrl = (url) => {
    // Remove the leading slash if present
    const pathWithoutLeadingSlash = url.startsWith('/') ? url.substring(1) : url;
    
    // Get baseUrl from Docusaurus context
    const baseUrl = siteConfig.baseUrl || '/';
    
    // For debugging - log the constructed URL
    console.log(`Constructing URL: ${baseUrl}${pathWithoutLeadingSlash}`);
    
    // Use Docusaurus utility for URL creation
    return useBaseUrl(pathWithoutLeadingSlash);
  };

  return (
    <Layout title="Search Results" description="Search documentation">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Search Documentation</h1>
            
            <form onSubmit={handleSubmit} className="search-page-form">
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-page-input"
                />
                <button
                  type="submit"
                  style={{ 
                    padding: '0 15px',
                    background: 'var(--ifm-color-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0 4px 4px 0',
                    cursor: 'pointer'
                  }}
                >
                  Search
                </button>
              </div>
            </form>
            
            {isSearching ? (
              <div className="search-loading">
                <p>Searching...</p>
              </div>
            ) : (
              searchQuery && (
                <>
                  <div className="search-results-count">
                    Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                  </div>
                  
                  {searchResults.length > 0 ? (
                    <div className="search-results">
                      {searchResults.map((result, index) => (
                        <div key={index} className="search-result-item">
                          <h3 className="search-result-title">
                            <Link to={constructDocUrl(result.url)}>
                              {highlightText(result.title, searchQuery)}
                            </Link>
                          </h3>
                          <div className="search-result-section">
                            {result.section}
                          </div>
                          <p className="search-result-snippet">
                            {highlightText(result.content, searchQuery)}
                          </p>
                          <div className="search-result-tags">
                            {result.tags.map(tag => (
                              <span key={tag} className="search-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="search-no-results">
                      <p>No results found for "{searchQuery}"</p>
                      <p>Try using different keywords or check your spelling</p>
                    </div>
                  )}
                </>
              )
            )}
            
            {!searchQuery && (
              <div className="search-instructions">
                <p>Enter a search term above to find content in the documentation.</p>
                <h3>Search Tips:</h3>
                <ul>
                  <li>Use specific keywords for more accurate results</li>
                  <li>Search for features, topics, or specific functionality</li>
                  <li>Try different variations if you don't find what you need</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 