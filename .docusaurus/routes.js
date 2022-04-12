
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','6fe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','18f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','69f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','952'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','27f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','8d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','66f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','9a6'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','f28'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/blacklist',
        component: ComponentCreator('/docs/blacklist','882'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/combinechecks',
        component: ComponentCreator('/docs/combinechecks','9c2'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/configureandrun',
        component: ComponentCreator('/docs/configureandrun','f15'),
        exact: true
      },
      {
        path: '/docs/debugcheck',
        component: ComponentCreator('/docs/debugcheck','c09'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/emulatorcheck',
        component: ComponentCreator('/docs/emulatorcheck','56e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/filesverification',
        component: ComponentCreator('/docs/filesverification','f89'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/gettingstarted',
        component: ComponentCreator('/docs/gettingstarted','f63'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/gettingstarted',
        component: ComponentCreator('/docs/gettingstarted','af2'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/installorigin',
        component: ComponentCreator('/docs/installorigin','235'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/intentverification',
        component: ComponentCreator('/docs/intentverification','6f1'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/offdevicesetup',
        component: ComponentCreator('/docs/offdevicesetup','43e'),
        exact: true
      },
      {
        path: '/docs/onoroffdevice',
        component: ComponentCreator('/docs/onoroffdevice','2b1'),
        exact: true
      },
      {
        path: '/docs/oscheck',
        component: ComponentCreator('/docs/oscheck','ee9'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/reportingordefault',
        component: ComponentCreator('/docs/reportingordefault','efe'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/rootdetection',
        component: ComponentCreator('/docs/rootdetection','f6c'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/safetorunreporting',
        component: ComponentCreator('/docs/safetorunreporting','927'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/signature',
        component: ComponentCreator('/docs/signature','2cf'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/verifyurls',
        component: ComponentCreator('/docs/verifyurls','134'),
        exact: true,
        sidebar: "someSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','25d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
