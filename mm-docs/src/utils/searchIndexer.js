/**
 * SearchIndexer - A simple utility to index and search content
 * 
 * This is a basic implementation that would need to be enhanced for production use.
 * In a real implementation, you might use a more sophisticated search library like Lunr.js,
 * or implement server-side search with Elasticsearch or similar.
 */

// In-memory storage for search index
let searchIndex = [];
let initialized = false;

/**
 * Initialize the search index
 * This would typically be done at build time in a real implementation
 */
export async function initializeSearchIndex() {
  if (initialized) return;
  
  try {
    // In a real implementation, this would fetch indexed content from a pre-built file
    // For now, we'll use a small hardcoded sample
    searchIndex = [
      {
        id: 'intro',
        title: 'Introduction to Mera Monitor',
        content: 'Mera Monitor is a comprehensive productivity tracking and monitoring solution designed for businesses of all sizes. It helps track employee productivity, monitor work activities, and generate insightful reports.',
        url: '/docs/intro',
        type: 'Documentation',
        section: 'Getting Started',
        tags: ['introduction', 'overview', 'productivity']
      },
      {
        id: 'installation',
        title: 'Installation Guide',
        content: 'Learn how to install and configure Mera Monitor for your organization. This guide covers system requirements, installation steps, and initial setup process.',
        url: '/docs/installation',
        type: 'Documentation',
        section: 'Setup',
        tags: ['install', 'setup', 'configuration', 'requirements']
      },
      {
        id: 'features',
        title: 'Key Features',
        content: 'Explore the key features of Mera Monitor including time tracking, screenshot capabilities, productivity analysis, reporting tools, and user management.',
        url: '/docs/features',
        type: 'Documentation',
        section: 'Features',
        tags: ['features', 'capabilities', 'functionality']
      },
      {
        id: 'api',
        title: 'API Reference',
        content: 'Detailed API documentation for developers integrating with Mera Monitor. Includes endpoints, authentication, request formats, and response examples.',
        url: '/docs/api',
        type: 'Documentation',
        section: 'Developer Resources',
        tags: ['api', 'development', 'integration', 'endpoints']
      },
      {
        id: 'faq',
        title: 'Frequently Asked Questions',
        content: 'Answers to common questions about Mera Monitor, its features, pricing, and technical support options.',
        url: '/docs/faq',
        type: 'Documentation',
        section: 'Support',
        tags: ['faq', 'questions', 'help', 'support']
      }
    ];
    
    initialized = true;
    console.log('Search index initialized with sample data');
  } catch (error) {
    console.error('Failed to initialize search index:', error);
  }
}

/**
 * Perform a search against the index
 * @param {string} query The search query
 * @param {Object} options Search options
 * @returns {Array} Search results
 */
export function search(query, options = {}) {
  if (!initialized) {
    console.warn('Search index not initialized. Initializing now...');
    initializeSearchIndex();
  }
  
  if (!query || query.trim() === '') {
    return [];
  }
  
  const normalizedQuery = query.toLowerCase().trim();
  const queryTerms = normalizedQuery.split(/\s+/).filter(term => term.length > 1);
  
  // Simple relevance scoring
  return searchIndex
    .map(item => {
      // Calculate relevance score
      let score = 0;
      const normalizedTitle = item.title.toLowerCase();
      const normalizedContent = item.content.toLowerCase();
      
      // Title matches are weighted higher
      if (normalizedTitle.includes(normalizedQuery)) {
        score += 10;
      }
      
      // Content matches
      if (normalizedContent.includes(normalizedQuery)) {
        score += 5;
      }
      
      // Tag matches
      const tagMatches = item.tags.filter(tag => tag.includes(normalizedQuery));
      score += tagMatches.length * 3;
      
      // Individual term matching
      queryTerms.forEach(term => {
        if (normalizedTitle.includes(term)) score += 2;
        if (normalizedContent.includes(term)) score += 1;
        item.tags.forEach(tag => {
          if (tag.includes(term)) score += 0.5;
        });
      });
      
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

// Initialize the index immediately for client-side use
if (typeof window !== 'undefined') {
  initializeSearchIndex();
}

export default {
  search,
  initializeSearchIndex
}; 