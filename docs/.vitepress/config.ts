import path from "path";

export default {
  title: 'My Lib',
  description: 'Just playing around.',
  themeConfig: {
    repo: 'https://github.com/wuruoyun/vue-component-lib-starter',
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is My Lib?', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        items: [
          { text: 'Component A', link: '/components/component-a' },
          { text: 'Component B', link: '/components/component-b' },
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        'vue-picker-library': path.resolve(__dirname, '../../src'),
      },
    }
  }
}
