/**
 * Custom NavbarSearch component to replace the default Docusaurus search.
 * 
 * This component integrates our custom SearchBar into the Navbar.
 */

import React from 'react';
import SearchBar from '@site/src/components/SearchBar';
import styles from './styles.module.css';

export default function NavbarSearch() {
  return (
    <div className={styles.navbarSearchWrapper}>
      <SearchBar className={styles.navbarSearchBar} placeholder="Search..." />
    </div>
  );
} 