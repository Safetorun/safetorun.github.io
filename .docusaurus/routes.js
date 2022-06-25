
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
    path: '/docs/next',
    component: ComponentCreator('/docs/next','0fd'),
    routes: [
      {
        path: '/docs/next/',
        component: ComponentCreator('/docs/next/','78f'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/blacklist',
        component: ComponentCreator('/docs/next/blacklist','93b'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/combinechecks',
        component: ComponentCreator('/docs/next/combinechecks','792'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/configureandrun',
        component: ComponentCreator('/docs/next/configureandrun','c21'),
        exact: true
      },
      {
        path: '/docs/next/debugcheck',
        component: ComponentCreator('/docs/next/debugcheck','e32'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/emulatorcheck',
        component: ComponentCreator('/docs/next/emulatorcheck','6ae'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/filesverification',
        component: ComponentCreator('/docs/next/filesverification','c2e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/gettingstarted',
        component: ComponentCreator('/docs/next/gettingstarted','ed8'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/inputgettingstarted',
        component: ComponentCreator('/docs/next/inputgettingstarted','dcc'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/installorigin',
        component: ComponentCreator('/docs/next/installorigin','908'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/intentverification',
        component: ComponentCreator('/docs/next/intentverification','4cd'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/offdevicesetup',
        component: ComponentCreator('/docs/next/offdevicesetup','a59'),
        exact: true
      },
      {
        path: '/docs/next/onoroffdevice',
        component: ComponentCreator('/docs/next/onoroffdevice','5af'),
        exact: true
      },
      {
        path: '/docs/next/oscheck',
        component: ComponentCreator('/docs/next/oscheck','3e4'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/reportingordefault',
        component: ComponentCreator('/docs/next/reportingordefault','b85'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/rootdetection',
        component: ComponentCreator('/docs/next/rootdetection','2f8'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/safetorunreporting',
        component: ComponentCreator('/docs/next/safetorunreporting','c63'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/signature',
        component: ComponentCreator('/docs/next/signature','77f'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/next/verifyurls',
        component: ComponentCreator('/docs/next/verifyurls','f40'),
        exact: true,
        sidebar: "someSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','3aa'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','767'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/blacklist',
        component: ComponentCreator('/docs/blacklist','832'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/combinechecks',
        component: ComponentCreator('/docs/combinechecks','d26'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/configureandrun',
        component: ComponentCreator('/docs/configureandrun','bfb'),
        exact: true
      },
      {
        path: '/docs/debugcheck',
        component: ComponentCreator('/docs/debugcheck','166'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/emulatorcheck',
        component: ComponentCreator('/docs/emulatorcheck','86e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/filesverification',
        component: ComponentCreator('/docs/filesverification','b9e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/gettingstarted',
        component: ComponentCreator('/docs/gettingstarted','da3'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/inputgettingstarted',
        component: ComponentCreator('/docs/inputgettingstarted','029'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/installorigin',
        component: ComponentCreator('/docs/installorigin','8b4'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/intentverification',
        component: ComponentCreator('/docs/intentverification','77d'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/offdevicesetup',
        component: ComponentCreator('/docs/offdevicesetup','11e'),
        exact: true
      },
      {
        path: '/docs/onoroffdevice',
        component: ComponentCreator('/docs/onoroffdevice','5a2'),
        exact: true
      },
      {
        path: '/docs/oscheck',
        component: ComponentCreator('/docs/oscheck','480'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/reportingordefault',
        component: ComponentCreator('/docs/reportingordefault','8be'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/rootdetection',
        component: ComponentCreator('/docs/rootdetection','ca5'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/safetorunreporting',
        component: ComponentCreator('/docs/safetorunreporting','d20'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/signature',
        component: ComponentCreator('/docs/signature','3d2'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/verifyurls',
        component: ComponentCreator('/docs/verifyurls','004'),
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
