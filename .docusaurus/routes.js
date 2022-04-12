
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/safe_to_run/docs',
    component: ComponentCreator('/safe_to_run/docs','9ef'),
    routes: [
      {
        path: '/safe_to_run/docs/',
        component: ComponentCreator('/safe_to_run/docs/','238'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/blacklist',
        component: ComponentCreator('/safe_to_run/docs/blacklist','2f9'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/combinechecks',
        component: ComponentCreator('/safe_to_run/docs/combinechecks','02a'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/configureandrun',
        component: ComponentCreator('/safe_to_run/docs/configureandrun','4bf'),
        exact: true
      },
      {
        path: '/safe_to_run/docs/debugcheck',
        component: ComponentCreator('/safe_to_run/docs/debugcheck','36b'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/emulatorcheck',
        component: ComponentCreator('/safe_to_run/docs/emulatorcheck','ede'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/filesverification',
        component: ComponentCreator('/safe_to_run/docs/filesverification','7a3'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/gettingstarted',
        component: ComponentCreator('/safe_to_run/docs/gettingstarted','847'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/gettingstarted',
        component: ComponentCreator('/safe_to_run/docs/gettingstarted','530'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/installorigin',
        component: ComponentCreator('/safe_to_run/docs/installorigin','5be'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/intentverification',
        component: ComponentCreator('/safe_to_run/docs/intentverification','69e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/offdevicesetup',
        component: ComponentCreator('/safe_to_run/docs/offdevicesetup','fef'),
        exact: true
      },
      {
        path: '/safe_to_run/docs/onoroffdevice',
        component: ComponentCreator('/safe_to_run/docs/onoroffdevice','393'),
        exact: true
      },
      {
        path: '/safe_to_run/docs/oscheck',
        component: ComponentCreator('/safe_to_run/docs/oscheck','ee7'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/reportingordefault',
        component: ComponentCreator('/safe_to_run/docs/reportingordefault','b2c'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/rootdetection',
        component: ComponentCreator('/safe_to_run/docs/rootdetection','435'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/safetorunreporting',
        component: ComponentCreator('/safe_to_run/docs/safetorunreporting','20e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/signature',
        component: ComponentCreator('/safe_to_run/docs/signature','56d'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/safe_to_run/docs/verifyurls',
        component: ComponentCreator('/safe_to_run/docs/verifyurls','7b5'),
        exact: true,
        sidebar: "someSidebar"
      }
    ]
  },
  {
    path: '/safe_to_run/',
    component: ComponentCreator('/safe_to_run/','cb3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
