export const mockNavModel = {
  home: {
    id: 'home',
    text: 'Home',
    section: 'core',
    icon: 'home-alt',
    url: '/',
    sortWeight: -2000,
  },
  dashboards: {
    id: 'dashboards',
    text: 'Dashboards',
    section: 'core',
    subTitle: 'Manage dashboards and folders',
    icon: 'apps',
    url: '/dashboards',
    sortWeight: -1800,
    children: [
      {
        id: 'manage-dashboards',
        text: 'Browse',
        icon: 'sitemap',
        url: '/dashboards',
      },
      {
        id: 'playlists',
        text: 'Playlists',
        icon: 'presentation-play',
        url: '/playlists',
      },
      {
        id: 'snapshots',
        text: 'Snapshots',
        icon: 'camera',
        url: '/dashboard/snapshots',
      },
      {
        id: 'library-panels',
        text: 'Library panels',
        icon: 'library-panel',
        url: '/library-panels',
      },
      {
        id: 'divider',
        text: 'Divider',
        divider: true,
        hideFromTabs: true,
      },
      {
        id: 'new-dashboard',
        text: 'New dashboard',
        icon: 'plus',
        url: '/dashboard/new',
        hideFromTabs: true,
      },
      {
        id: 'new-folder',
        text: 'New folder',
        subTitle: 'Create a new folder to organize your dashboards',
        icon: 'plus',
        url: '/dashboards/folder/new',
        hideFromTabs: true,
      },
      {
        id: 'import',
        text: 'Import',
        subTitle: 'Import dashboard from file or Grafana.com',
        icon: 'plus',
        url: '/dashboard/import',
        hideFromTabs: true,
      },
    ],
  },
  'manage-dashboards': {
    id: 'manage-dashboards',
    text: 'Browse',
    icon: 'sitemap',
    url: '/dashboards',
    parentItem: {
      id: 'dashboards',
      text: 'Dashboards',
      section: 'core',
      subTitle: 'Manage dashboards and folders',
      icon: 'apps',
      url: '/dashboards',
      sortWeight: -1800,
      children: [
        {
          id: 'manage-dashboards',
          text: 'Browse',
          icon: 'sitemap',
          url: '/dashboards',
        },
        {
          id: 'playlists',
          text: 'Playlists',
          icon: 'presentation-play',
          url: '/playlists',
        },
        {
          id: 'snapshots',
          text: 'Snapshots',
          icon: 'camera',
          url: '/dashboard/snapshots',
        },
        {
          id: 'library-panels',
          text: 'Library panels',
          icon: 'library-panel',
          url: '/library-panels',
        },
        {
          id: 'divider',
          text: 'Divider',
          divider: true,
          hideFromTabs: true,
        },
        {
          id: 'new-dashboard',
          text: 'New dashboard',
          icon: 'plus',
          url: '/dashboard/new',
          hideFromTabs: true,
        },
        {
          id: 'new-folder',
          text: 'New folder',
          subTitle: 'Create a new folder to organize your dashboards',
          icon: 'plus',
          url: '/dashboards/folder/new',
          hideFromTabs: true,
        },
        {
          id: 'import',
          text: 'Import',
          subTitle: 'Import dashboard from file or Grafana.com',
          icon: 'plus',
          url: '/dashboard/import',
          hideFromTabs: true,
        },
      ],
    },
  },
  playlists: {
    id: 'playlists',
    text: 'Playlists',
    icon: 'presentation-play',
    url: '/playlists',
    parentItem: {
      id: 'dashboards',
      text: 'Dashboards',
      section: 'core',
      subTitle: 'Manage dashboards and folders',
      icon: 'apps',
      url: '/dashboards',
      sortWeight: -1800,
      children: [
        {
          id: 'manage-dashboards',
          text: 'Browse',
          icon: 'sitemap',
          url: '/dashboards',
        },
        {
          id: 'playlists',
          text: 'Playlists',
          icon: 'presentation-play',
          url: '/playlists',
        },
        {
          id: 'snapshots',
          text: 'Snapshots',
          icon: 'camera',
          url: '/dashboard/snapshots',
        },
        {
          id: 'library-panels',
          text: 'Library panels',
          icon: 'library-panel',
          url: '/library-panels',
        },
        {
          id: 'divider',
          text: 'Divider',
          divider: true,
          hideFromTabs: true,
        },
        {
          id: 'new-dashboard',
          text: 'New dashboard',
          icon: 'plus',
          url: '/dashboard/new',
          hideFromTabs: true,
        },
        {
          id: 'new-folder',
          text: 'New folder',
          subTitle: 'Create a new folder to organize your dashboards',
          icon: 'plus',
          url: '/dashboards/folder/new',
          hideFromTabs: true,
        },
        {
          id: 'import',
          text: 'Import',
          subTitle: 'Import dashboard from file or Grafana.com',
          icon: 'plus',
          url: '/dashboard/import',
          hideFromTabs: true,
        },
      ],
    },
  },
  snapshots: {
    id: 'snapshots',
    text: 'Snapshots',
    icon: 'camera',
    url: '/dashboard/snapshots',
    parentItem: {
      id: 'dashboards',
      text: 'Dashboards',
      section: 'core',
      subTitle: 'Manage dashboards and folders',
      icon: 'apps',
      url: '/dashboards',
      sortWeight: -1800,
      children: [
        {
          id: 'manage-dashboards',
          text: 'Browse',
          icon: 'sitemap',
          url: '/dashboards',
        },
        {
          id: 'playlists',
          text: 'Playlists',
          icon: 'presentation-play',
          url: '/playlists',
        },
        {
          id: 'snapshots',
          text: 'Snapshots',
          icon: 'camera',
          url: '/dashboard/snapshots',
        },
        {
          id: 'library-panels',
          text: 'Library panels',
          icon: 'library-panel',
          url: '/library-panels',
        },
        {
          id: 'divider',
          text: 'Divider',
          divider: true,
          hideFromTabs: true,
        },
        {
          id: 'new-dashboard',
          text: 'New dashboard',
          icon: 'plus',
          url: '/dashboard/new',
          hideFromTabs: true,
        },
        {
          id: 'new-folder',
          text: 'New folder',
          subTitle: 'Create a new folder to organize your dashboards',
          icon: 'plus',
          url: '/dashboards/folder/new',
          hideFromTabs: true,
        },
        {
          id: 'import',
          text: 'Import',
          subTitle: 'Import dashboard from file or Grafana.com',
          icon: 'plus',
          url: '/dashboard/import',
          hideFromTabs: true,
        },
      ],
    },
  },
  'library-panels': {
    id: 'library-panels',
    text: 'Library panels',
    icon: 'library-panel',
    url: '/library-panels',
    parentItem: {
      id: 'dashboards',
      text: 'Dashboards',
      section: 'core',
      subTitle: 'Manage dashboards and folders',
      icon: 'apps',
      url: '/dashboards',
      sortWeight: -1800,
      children: [
        {
          id: 'manage-dashboards',
          text: 'Browse',
          icon: 'sitemap',
          url: '/dashboards',
        },
        {
          id: 'playlists',
          text: 'Playlists',
          icon: 'presentation-play',
          url: '/playlists',
        },
        {
          id: 'snapshots',
          text: 'Snapshots',
          icon: 'camera',
          url: '/dashboard/snapshots',
        },
        {
          id: 'library-panels',
          text: 'Library panels',
          icon: 'library-panel',
          url: '/library-panels',
        },
        {
          id: 'divider',
          text: 'Divider',
          divider: true,
          hideFromTabs: true,
        },
        {
          id: 'new-dashboard',
          text: 'New dashboard',
          icon: 'plus',
          url: '/dashboard/new',
          hideFromTabs: true,
        },
        {
          id: 'new-folder',
          text: 'New folder',
          subTitle: 'Create a new folder to organize your dashboards',
          icon: 'plus',
          url: '/dashboards/folder/new',
          hideFromTabs: true,
        },
        {
          id: 'import',
          text: 'Import',
          subTitle: 'Import dashboard from file or Grafana.com',
          icon: 'plus',
          url: '/dashboard/import',
          hideFromTabs: true,
        },
      ],
    },
  },
  divider: {
    id: 'divider',
    text: 'Divider',
    divider: true,
    hideFromTabs: true,
    parentItem: {
      id: 'dashboards',
      text: 'Dashboards',
      section: 'core',
      subTitle: 'Manage dashboards and folders',
      icon: 'apps',
      url: '/dashboards',
      sortWeight: -1800,
      children: [
        {
          id: 'manage-dashboards',
          text: 'Browse',
          icon: 'sitemap',
          url: '/dashboards',
        },
        {
          id: 'playlists',
          text: 'Playlists',
          icon: 'presentation-play',
          url: '/playlists',
        },
        {
          id: 'snapshots',
          text: 'Snapshots',
          icon: 'camera',
          url: '/dashboard/snapshots',
        },
        {
          id: 'library-panels',
          text: 'Library panels',
          icon: 'library-panel',
          url: '/library-panels',
        },
        {
          id: 'divider',
          text: 'Divider',
          divider: true,
          hideFromTabs: true,
        },
        {
          id: 'new-dashboard',
          text: 'New dashboard',
          icon: 'plus',
          url: '/dashboard/new',
          hideFromTabs: true,
        },
        {
          id: 'new-folder',
          text: 'New folder',
          subTitle: 'Create a new folder to organize your dashboards',
          icon: 'plus',
          url: '/dashboards/folder/new',
          hideFromTabs: true,
        },
        {
          id: 'import',
          text: 'Import',
          subTitle: 'Import dashboard from file or Grafana.com',
          icon: 'plus',
          url: '/dashboard/import',
          hideFromTabs: true,
        },
      ],
    },
  },
  'new-dashboard': {
    id: 'new-dashboard',
    text: 'New dashboard',
    icon: 'plus',
    url: '/dashboard/new',
    hideFromTabs: true,
    parentItem: {
      id: 'dashboards',
      text: 'Dashboards',
      section: 'core',
      subTitle: 'Manage dashboards and folders',
      icon: 'apps',
      url: '/dashboards',
      sortWeight: -1800,
      children: [
        {
          id: 'manage-dashboards',
          text: 'Browse',
          icon: 'sitemap',
          url: '/dashboards',
        },
        {
          id: 'playlists',
          text: 'Playlists',
          icon: 'presentation-play',
          url: '/playlists',
        },
        {
          id: 'snapshots',
          text: 'Snapshots',
          icon: 'camera',
          url: '/dashboard/snapshots',
        },
        {
          id: 'library-panels',
          text: 'Library panels',
          icon: 'library-panel',
          url: '/library-panels',
        },
        {
          id: 'divider',
          text: 'Divider',
          divider: true,
          hideFromTabs: true,
        },
        {
          id: 'new-dashboard',
          text: 'New dashboard',
          icon: 'plus',
          url: '/dashboard/new',
          hideFromTabs: true,
        },
        {
          id: 'new-folder',
          text: 'New folder',
          subTitle: 'Create a new folder to organize your dashboards',
          icon: 'plus',
          url: '/dashboards/folder/new',
          hideFromTabs: true,
        },
        {
          id: 'import',
          text: 'Import',
          subTitle: 'Import dashboard from file or Grafana.com',
          icon: 'plus',
          url: '/dashboard/import',
          hideFromTabs: true,
        },
      ],
    },
  },
  'new-folder': {
    id: 'new-folder',
    text: 'New folder',
    subTitle: 'Create a new folder to organize your dashboards',
    icon: 'plus',
    url: '/dashboards/folder/new',
    hideFromTabs: true,
    parentItem: {
      id: 'dashboards',
      text: 'Dashboards',
      section: 'core',
      subTitle: 'Manage dashboards and folders',
      icon: 'apps',
      url: '/dashboards',
      sortWeight: -1800,
      children: [
        {
          id: 'manage-dashboards',
          text: 'Browse',
          icon: 'sitemap',
          url: '/dashboards',
        },
        {
          id: 'playlists',
          text: 'Playlists',
          icon: 'presentation-play',
          url: '/playlists',
        },
        {
          id: 'snapshots',
          text: 'Snapshots',
          icon: 'camera',
          url: '/dashboard/snapshots',
        },
        {
          id: 'library-panels',
          text: 'Library panels',
          icon: 'library-panel',
          url: '/library-panels',
        },
        {
          id: 'divider',
          text: 'Divider',
          divider: true,
          hideFromTabs: true,
        },
        {
          id: 'new-dashboard',
          text: 'New dashboard',
          icon: 'plus',
          url: '/dashboard/new',
          hideFromTabs: true,
        },
        {
          id: 'new-folder',
          text: 'New folder',
          subTitle: 'Create a new folder to organize your dashboards',
          icon: 'plus',
          url: '/dashboards/folder/new',
          hideFromTabs: true,
        },
        {
          id: 'import',
          text: 'Import',
          subTitle: 'Import dashboard from file or Grafana.com',
          icon: 'plus',
          url: '/dashboard/import',
          hideFromTabs: true,
        },
      ],
    },
  },
  import: {
    id: 'import',
    text: 'Import',
    subTitle: 'Import dashboard from file or Grafana.com',
    icon: 'plus',
    url: '/dashboard/import',
    hideFromTabs: true,
    parentItem: {
      id: 'dashboards',
      text: 'Dashboards',
      section: 'core',
      subTitle: 'Manage dashboards and folders',
      icon: 'apps',
      url: '/dashboards',
      sortWeight: -1800,
      children: [
        {
          id: 'manage-dashboards',
          text: 'Browse',
          icon: 'sitemap',
          url: '/dashboards',
        },
        {
          id: 'playlists',
          text: 'Playlists',
          icon: 'presentation-play',
          url: '/playlists',
        },
        {
          id: 'snapshots',
          text: 'Snapshots',
          icon: 'camera',
          url: '/dashboard/snapshots',
        },
        {
          id: 'library-panels',
          text: 'Library panels',
          icon: 'library-panel',
          url: '/library-panels',
        },
        {
          id: 'divider',
          text: 'Divider',
          divider: true,
          hideFromTabs: true,
        },
        {
          id: 'new-dashboard',
          text: 'New dashboard',
          icon: 'plus',
          url: '/dashboard/new',
          hideFromTabs: true,
        },
        {
          id: 'new-folder',
          text: 'New folder',
          subTitle: 'Create a new folder to organize your dashboards',
          icon: 'plus',
          url: '/dashboards/folder/new',
          hideFromTabs: true,
        },
        {
          id: 'import',
          text: 'Import',
          subTitle: 'Import dashboard from file or Grafana.com',
          icon: 'plus',
          url: '/dashboard/import',
          hideFromTabs: true,
        },
      ],
    },
  },
  'not-found': {
    text: 'Page not found',
    subTitle: '404 Error',
    icon: 'exclamation-triangle',
  },
  explore: {
    id: 'explore',
    text: 'Explore',
    section: 'core',
    subTitle: 'Explore your data',
    icon: 'compass',
    url: '/explore',
    sortWeight: -1700,
  },
  alerting: {
    id: 'alerting',
    text: 'Alerting',
    section: 'core',
    subTitle: 'Alert rules and notifications',
    icon: 'bell',
    url: '/alerting/list',
    sortWeight: -1600,
    children: [
      {
        id: 'alert-list',
        text: 'Alert rules',
        icon: 'list-ul',
        url: '/alerting/list',
      },
      {
        id: 'channels',
        text: 'Notification channels',
        icon: 'comment-alt-share',
        url: '/alerting/notifications',
      },
    ],
  },
  'alert-list': {
    id: 'alert-list',
    text: 'Alert rules',
    icon: 'list-ul',
    url: '/alerting/list',
    parentItem: {
      id: 'alerting',
      text: 'Alerting',
      section: 'core',
      subTitle: 'Alert rules and notifications',
      icon: 'bell',
      url: '/alerting/list',
      sortWeight: -1600,
      children: [
        {
          id: 'alert-list',
          text: 'Alert rules',
          icon: 'list-ul',
          url: '/alerting/list',
        },
        {
          id: 'channels',
          text: 'Notification channels',
          icon: 'comment-alt-share',
          url: '/alerting/notifications',
        },
      ],
    },
  },
  channels: {
    id: 'channels',
    text: 'Notification channels',
    icon: 'comment-alt-share',
    url: '/alerting/notifications',
    parentItem: {
      id: 'alerting',
      text: 'Alerting',
      section: 'core',
      subTitle: 'Alert rules and notifications',
      icon: 'bell',
      url: '/alerting/list',
      sortWeight: -1600,
      children: [
        {
          id: 'alert-list',
          text: 'Alert rules',
          icon: 'list-ul',
          url: '/alerting/list',
        },
        {
          id: 'channels',
          text: 'Notification channels',
          icon: 'comment-alt-share',
          url: '/alerting/notifications',
        },
      ],
    },
  },
  cfg: {
    id: 'cfg',
    text: 'Configuration',
    section: 'config',
    subTitle: 'Organization: Main Org',
    icon: 'cog',
    url: '/datasources',
    sortWeight: -1400,
    children: [
      {
        id: 'datasources',
        text: 'Data sources',
        description: 'Add and configure data sources',
        icon: 'database',
        url: '/datasources',
      },
      {
        id: 'users',
        text: 'Users',
        description: 'Manage org members',
        icon: 'user',
        url: '/org/users',
      },
      {
        id: 'teams',
        text: 'Teams',
        description: 'Manage org groups',
        icon: 'users-alt',
        url: '/org/teams',
      },
      {
        id: 'plugins',
        text: 'Plugins',
        description: 'View and configure plugins',
        icon: 'plug',
        url: '/plugins',
      },
      {
        id: 'org-settings',
        text: 'Preferences',
        description: 'Organization preferences',
        icon: 'sliders-v-alt',
        url: '/org',
      },
      {
        id: 'apikeys',
        text: 'API keys',
        description: 'Create & manage API keys',
        icon: 'key-skeleton-alt',
        url: '/org/apikeys',
      },
    ],
  },
  datasources: {
    id: 'datasources',
    text: 'Data sources',
    description: 'Add and configure data sources',
    icon: 'database',
    url: '/datasources',
    parentItem: {
      id: 'cfg',
      text: 'Configuration',
      section: 'config',
      subTitle: 'Organization: Main Org',
      icon: 'cog',
      url: '/datasources',
      sortWeight: -1400,
      children: [
        {
          id: 'datasources',
          text: 'Data sources',
          description: 'Add and configure data sources',
          icon: 'database',
          url: '/datasources',
        },
        {
          id: 'users',
          text: 'Users',
          description: 'Manage org members',
          icon: 'user',
          url: '/org/users',
        },
        {
          id: 'teams',
          text: 'Teams',
          description: 'Manage org groups',
          icon: 'users-alt',
          url: '/org/teams',
        },
        {
          id: 'plugins',
          text: 'Plugins',
          description: 'View and configure plugins',
          icon: 'plug',
          url: '/plugins',
        },
        {
          id: 'org-settings',
          text: 'Preferences',
          description: 'Organization preferences',
          icon: 'sliders-v-alt',
          url: '/org',
        },
        {
          id: 'apikeys',
          text: 'API keys',
          description: 'Create & manage API keys',
          icon: 'key-skeleton-alt',
          url: '/org/apikeys',
        },
      ],
    },
  },
  users: {
    id: 'users',
    text: 'Users',
    description: 'Manage org members',
    icon: 'user',
    url: '/org/users',
    parentItem: {
      id: 'cfg',
      text: 'Configuration',
      section: 'config',
      subTitle: 'Organization: Main Org',
      icon: 'cog',
      url: '/datasources',
      sortWeight: -1400,
      children: [
        {
          id: 'datasources',
          text: 'Data sources',
          description: 'Add and configure data sources',
          icon: 'database',
          url: '/datasources',
        },
        {
          id: 'users',
          text: 'Users',
          description: 'Manage org members',
          icon: 'user',
          url: '/org/users',
        },
        {
          id: 'teams',
          text: 'Teams',
          description: 'Manage org groups',
          icon: 'users-alt',
          url: '/org/teams',
        },
        {
          id: 'plugins',
          text: 'Plugins',
          description: 'View and configure plugins',
          icon: 'plug',
          url: '/plugins',
        },
        {
          id: 'org-settings',
          text: 'Preferences',
          description: 'Organization preferences',
          icon: 'sliders-v-alt',
          url: '/org',
        },
        {
          id: 'apikeys',
          text: 'API keys',
          description: 'Create & manage API keys',
          icon: 'key-skeleton-alt',
          url: '/org/apikeys',
        },
      ],
    },
  },
  teams: {
    id: 'teams',
    text: 'Teams',
    description: 'Manage org groups',
    icon: 'users-alt',
    url: '/org/teams',
    parentItem: {
      id: 'cfg',
      text: 'Configuration',
      section: 'config',
      subTitle: 'Organization: Main Org',
      icon: 'cog',
      url: '/datasources',
      sortWeight: -1400,
      children: [
        {
          id: 'datasources',
          text: 'Data sources',
          description: 'Add and configure data sources',
          icon: 'database',
          url: '/datasources',
        },
        {
          id: 'users',
          text: 'Users',
          description: 'Manage org members',
          icon: 'user',
          url: '/org/users',
        },
        {
          id: 'teams',
          text: 'Teams',
          description: 'Manage org groups',
          icon: 'users-alt',
          url: '/org/teams',
        },
        {
          id: 'plugins',
          text: 'Plugins',
          description: 'View and configure plugins',
          icon: 'plug',
          url: '/plugins',
        },
        {
          id: 'org-settings',
          text: 'Preferences',
          description: 'Organization preferences',
          icon: 'sliders-v-alt',
          url: '/org',
        },
        {
          id: 'apikeys',
          text: 'API keys',
          description: 'Create & manage API keys',
          icon: 'key-skeleton-alt',
          url: '/org/apikeys',
        },
      ],
    },
  },
  plugins: {
    id: 'plugins',
    text: 'Plugins',
    description: 'View and configure plugins',
    icon: 'plug',
    url: '/plugins',
    parentItem: {
      id: 'cfg',
      text: 'Configuration',
      section: 'config',
      subTitle: 'Organization: Main Org',
      icon: 'cog',
      url: '/datasources',
      sortWeight: -1400,
      children: [
        {
          id: 'datasources',
          text: 'Data sources',
          description: 'Add and configure data sources',
          icon: 'database',
          url: '/datasources',
        },
        {
          id: 'users',
          text: 'Users',
          description: 'Manage org members',
          icon: 'user',
          url: '/org/users',
        },
        {
          id: 'teams',
          text: 'Teams',
          description: 'Manage org groups',
          icon: 'users-alt',
          url: '/org/teams',
        },
        {
          id: 'plugins',
          text: 'Plugins',
          description: 'View and configure plugins',
          icon: 'plug',
          url: '/plugins',
        },
        {
          id: 'org-settings',
          text: 'Preferences',
          description: 'Organization preferences',
          icon: 'sliders-v-alt',
          url: '/org',
        },
        {
          id: 'apikeys',
          text: 'API keys',
          description: 'Create & manage API keys',
          icon: 'key-skeleton-alt',
          url: '/org/apikeys',
        },
      ],
    },
  },
  'org-settings': {
    id: 'org-settings',
    text: 'Preferences',
    description: 'Organization preferences',
    icon: 'sliders-v-alt',
    url: '/org',
    parentItem: {
      id: 'cfg',
      text: 'Configuration',
      section: 'config',
      subTitle: 'Organization: Main Org',
      icon: 'cog',
      url: '/datasources',
      sortWeight: -1400,
      children: [
        {
          id: 'datasources',
          text: 'Data sources',
          description: 'Add and configure data sources',
          icon: 'database',
          url: '/datasources',
        },
        {
          id: 'users',
          text: 'Users',
          description: 'Manage org members',
          icon: 'user',
          url: '/org/users',
        },
        {
          id: 'teams',
          text: 'Teams',
          description: 'Manage org groups',
          icon: 'users-alt',
          url: '/org/teams',
        },
        {
          id: 'plugins',
          text: 'Plugins',
          description: 'View and configure plugins',
          icon: 'plug',
          url: '/plugins',
        },
        {
          id: 'org-settings',
          text: 'Preferences',
          description: 'Organization preferences',
          icon: 'sliders-v-alt',
          url: '/org',
        },
        {
          id: 'apikeys',
          text: 'API keys',
          description: 'Create & manage API keys',
          icon: 'key-skeleton-alt',
          url: '/org/apikeys',
        },
      ],
    },
  },
  apikeys: {
    id: 'apikeys',
    text: 'API keys',
    description: 'Create & manage API keys',
    icon: 'key-skeleton-alt',
    url: '/org/apikeys',
    parentItem: {
      id: 'cfg',
      text: 'Configuration',
      section: 'config',
      subTitle: 'Organization: Main Org',
      icon: 'cog',
      url: '/datasources',
      sortWeight: -1400,
      children: [
        {
          id: 'datasources',
          text: 'Data sources',
          description: 'Add and configure data sources',
          icon: 'database',
          url: '/datasources',
        },
        {
          id: 'users',
          text: 'Users',
          description: 'Manage org members',
          icon: 'user',
          url: '/org/users',
        },
        {
          id: 'teams',
          text: 'Teams',
          description: 'Manage org groups',
          icon: 'users-alt',
          url: '/org/teams',
        },
        {
          id: 'plugins',
          text: 'Plugins',
          description: 'View and configure plugins',
          icon: 'plug',
          url: '/plugins',
        },
        {
          id: 'org-settings',
          text: 'Preferences',
          description: 'Organization preferences',
          icon: 'sliders-v-alt',
          url: '/org',
        },
        {
          id: 'apikeys',
          text: 'API keys',
          description: 'Create & manage API keys',
          icon: 'key-skeleton-alt',
          url: '/org/apikeys',
        },
      ],
    },
  },
  admin: {
    id: 'admin',
    text: 'Server Admin',
    section: 'config',
    subTitle: 'Manage all users and orgs',
    icon: 'shield',
    url: '/admin/users',
    sortWeight: -1300,
    hideFromTabs: true,
    children: [
      {
        id: 'global-users',
        text: 'Users',
        icon: 'user',
        url: '/admin/users',
      },
      {
        id: 'global-orgs',
        text: 'Orgs',
        icon: 'building',
        url: '/admin/orgs',
      },
      {
        id: 'server-settings',
        text: 'Settings',
        icon: 'sliders-v-alt',
        url: '/admin/settings',
      },
      {
        id: 'upgrading',
        text: 'Stats and license',
        icon: 'unlock',
        url: '/admin/upgrading',
      },
    ],
  },
  'global-users': {
    id: 'global-users',
    text: 'Users',
    icon: 'user',
    url: '/admin/users',
    parentItem: {
      id: 'admin',
      text: 'Server Admin',
      section: 'config',
      subTitle: 'Manage all users and orgs',
      icon: 'shield',
      url: '/admin/users',
      sortWeight: -1300,
      hideFromTabs: true,
      children: [
        {
          id: 'global-users',
          text: 'Users',
          icon: 'user',
          url: '/admin/users',
        },
        {
          id: 'global-orgs',
          text: 'Orgs',
          icon: 'building',
          url: '/admin/orgs',
        },
        {
          id: 'server-settings',
          text: 'Settings',
          icon: 'sliders-v-alt',
          url: '/admin/settings',
        },
        {
          id: 'upgrading',
          text: 'Stats and license',
          icon: 'unlock',
          url: '/admin/upgrading',
        },
      ],
    },
  },
  'global-orgs': {
    id: 'global-orgs',
    text: 'Orgs',
    icon: 'building',
    url: '/admin/orgs',
    parentItem: {
      id: 'admin',
      text: 'Server Admin',
      section: 'config',
      subTitle: 'Manage all users and orgs',
      icon: 'shield',
      url: '/admin/users',
      sortWeight: -1300,
      hideFromTabs: true,
      children: [
        {
          id: 'global-users',
          text: 'Users',
          icon: 'user',
          url: '/admin/users',
        },
        {
          id: 'global-orgs',
          text: 'Orgs',
          icon: 'building',
          url: '/admin/orgs',
        },
        {
          id: 'server-settings',
          text: 'Settings',
          icon: 'sliders-v-alt',
          url: '/admin/settings',
        },
        {
          id: 'upgrading',
          text: 'Stats and license',
          icon: 'unlock',
          url: '/admin/upgrading',
        },
      ],
    },
  },
  'server-settings': {
    id: 'server-settings',
    text: 'Settings',
    icon: 'sliders-v-alt',
    url: '/admin/settings',
    parentItem: {
      id: 'admin',
      text: 'Server Admin',
      section: 'config',
      subTitle: 'Manage all users and orgs',
      icon: 'shield',
      url: '/admin/users',
      sortWeight: -1300,
      hideFromTabs: true,
      children: [
        {
          id: 'global-users',
          text: 'Users',
          icon: 'user',
          url: '/admin/users',
        },
        {
          id: 'global-orgs',
          text: 'Orgs',
          icon: 'building',
          url: '/admin/orgs',
        },
        {
          id: 'server-settings',
          text: 'Settings',
          icon: 'sliders-v-alt',
          url: '/admin/settings',
        },
        {
          id: 'upgrading',
          text: 'Stats and license',
          icon: 'unlock',
          url: '/admin/upgrading',
        },
      ],
    },
  },
  upgrading: {
    id: 'upgrading',
    text: 'Stats and license',
    icon: 'unlock',
    url: '/admin/upgrading',
    parentItem: {
      id: 'admin',
      text: 'Server Admin',
      section: 'config',
      subTitle: 'Manage all users and orgs',
      icon: 'shield',
      url: '/admin/users',
      sortWeight: -1300,
      hideFromTabs: true,
      children: [
        {
          id: 'global-users',
          text: 'Users',
          icon: 'user',
          url: '/admin/users',
        },
        {
          id: 'global-orgs',
          text: 'Orgs',
          icon: 'building',
          url: '/admin/orgs',
        },
        {
          id: 'server-settings',
          text: 'Settings',
          icon: 'sliders-v-alt',
          url: '/admin/settings',
        },
        {
          id: 'upgrading',
          text: 'Stats and license',
          icon: 'unlock',
          url: '/admin/upgrading',
        },
      ],
    },
  },
  profile: {
    id: 'profile',
    text: 'admin',
    section: 'config',
    img: '/avatar/46d229b033af06a191ff2267bca9ae56',
    url: '/profile',
    sortWeight: -1200,
    children: [
      {
        id: 'profile-settings',
        text: 'Preferences',
        icon: 'sliders-v-alt',
        url: '/profile',
      },
      {
        id: 'change-password',
        text: 'Change password',
        icon: 'lock',
        url: '/profile/password',
      },
      {
        id: 'sign-out',
        text: 'Sign out',
        icon: 'arrow-from-right',
        url: '/logout',
        target: '_self',
        hideFromTabs: true,
      },
    ],
  },
  'profile-settings': {
    id: 'profile-settings',
    text: 'Preferences',
    icon: 'sliders-v-alt',
    url: '/profile',
    parentItem: {
      id: 'profile',
      text: 'admin',
      section: 'config',
      img: '/avatar/46d229b033af06a191ff2267bca9ae56',
      url: '/profile',
      sortWeight: -1200,
      children: [
        {
          id: 'profile-settings',
          text: 'Preferences',
          icon: 'sliders-v-alt',
          url: '/profile',
        },
        {
          id: 'change-password',
          text: 'Change password',
          icon: 'lock',
          url: '/profile/password',
        },
        {
          id: 'sign-out',
          text: 'Sign out',
          icon: 'arrow-from-right',
          url: '/logout',
          target: '_self',
          hideFromTabs: true,
        },
      ],
    },
  },
  'change-password': {
    id: 'change-password',
    text: 'Change password',
    icon: 'lock',
    url: '/profile/password',
    parentItem: {
      id: 'profile',
      text: 'admin',
      section: 'config',
      img: '/avatar/46d229b033af06a191ff2267bca9ae56',
      url: '/profile',
      sortWeight: -1200,
      children: [
        {
          id: 'profile-settings',
          text: 'Preferences',
          icon: 'sliders-v-alt',
          url: '/profile',
        },
        {
          id: 'change-password',
          text: 'Change password',
          icon: 'lock',
          url: '/profile/password',
        },
        {
          id: 'sign-out',
          text: 'Sign out',
          icon: 'arrow-from-right',
          url: '/logout',
          target: '_self',
          hideFromTabs: true,
        },
      ],
    },
  },
  'sign-out': {
    id: 'sign-out',
    text: 'Sign out',
    icon: 'arrow-from-right',
    url: '/logout',
    target: '_self',
    hideFromTabs: true,
    parentItem: {
      id: 'profile',
      text: 'admin',
      section: 'config',
      img: '/avatar/46d229b033af06a191ff2267bca9ae56',
      url: '/profile',
      sortWeight: -1200,
      children: [
        {
          id: 'profile-settings',
          text: 'Preferences',
          icon: 'sliders-v-alt',
          url: '/profile',
        },
        {
          id: 'change-password',
          text: 'Change password',
          icon: 'lock',
          url: '/profile/password',
        },
        {
          id: 'sign-out',
          text: 'Sign out',
          icon: 'arrow-from-right',
          url: '/logout',
          target: '_self',
          hideFromTabs: true,
        },
      ],
    },
  },
  help: {
    id: 'help',
    text: 'Help',
    section: 'config',
    subTitle: 'Grafana v8.5.0-pre (f1c4da095b)',
    icon: 'question-circle',
    url: '#',
    sortWeight: -1100,
  },
};