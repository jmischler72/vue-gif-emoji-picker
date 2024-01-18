import path from "path";

export default {
  base: "/vue-gif-emoji-picker/",
  title: 'vue-gif-emoji-picker',
  description: 'GIF and Emoji Picker Components for Vue3 projects',
  themeConfig: {
    repo: 'https://github.com/jmischler72/vue-gif-emoji-picker',
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
        'vue-gif-emoji-picker': path.resolve(__dirname, '../../src'),
      },
    }
  }
}
