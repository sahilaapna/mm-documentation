// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Main documentation sidebar - Focused on Mera Monitor
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/getting-started-signup',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Implementation',
      items: [
        'implementation/implementation-guide',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/dashboard-overview',
        'features/features-attendance',
        'features/productivity-tracking',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Member Management',
      items: ['member-management/member-management-overview'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Department Management',
      items: ['department-management/department-management-overview'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/configuration-general',
        'configuration/configuration-user-default',
        'configuration/configuration-cloud',
        'configuration/configuration-bulk-update',
        'configuration/configuration-history',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        'reports/reports-time-tracker',
        'reports/reports-web-apps',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Technical Reference',
      items: [
        'technical-reference/tech-ref-data-flow',
        'technical-reference/tech-ref-login-flow',
      ],
      collapsed: true,
    },
  ],

  // Support sidebar
  supportSidebar: [
    {
      type: 'category',
      label: 'Support Center',
      items: [
        'support/support-index',
        'support/getting-started',
        'support/troubleshooting',
        'support/faqs',
        'support/contact',
      ],
      collapsed: false,
    },
  ],
};

export default sidebars;
