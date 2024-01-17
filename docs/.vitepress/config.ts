import path from "path";

export default {
  title: 'vue-gif-emoji-picker',
  description: 'GIF and Emoji Picker Components for Vue3 projects',
  themeConfig: {
    repo: 'https://github.com/wuruoyun/vue-component-lib-starter',
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is this library?', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        items: [
          { text: 'GIF Picker', link: '/components/gif-picker' },
          { text: 'Emoji Picker', link: '/components/emoji-picker' },
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
