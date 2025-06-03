import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ThemedLogo({ width = 150, style = {} }) {
  const { colorMode } = useColorMode();
  const lightLogoUrl = useBaseUrl('/img/logo-light.svg');
  const darkLogoUrl = useBaseUrl('/img/logo-dark.svg');
  
  return (
    <img 
      src={colorMode === 'dark' ? darkLogoUrl : lightLogoUrl} 
      alt="Mera Monitor Logo" 
      width={width}
      style={style}
    />
  );
} 