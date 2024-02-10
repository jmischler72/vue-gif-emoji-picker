# vue-gif-emoji-picker

<strong>This component library offers a set of two components: a GIF Picker and an Emoji Picker.</strong>
[NPM Link](https://www.npmjs.com/package/vue-gif-emoji-picker)

Both components were based on this repository [enzostvs/vue3-discordpicker](https://github.com/enzostvs/vue3-discordpicker)

- The GIF Picker component uses the Tenor API v2, allowing users to search and select GIFs.

- The Emoji Picker component provides users with a wide array of emojis sorted in multiples categories . 

# Documentation

All documentation along with demos of components can be found here : 
- [jmischler72.github.io/vue-gif-emoji-picker](https://jmischler72.github.io/vue-gif-emoji-picker/)

# Getting Started

Here is a set of instructions to help you install this component library

## Setup

First make sure that this library is compatible with your version of Vue

>In your `package.json`, you shall have the dependencies compatible with the following:
>
>```json
>"dependencies": {
>   "vue": "^3.2.25"
>}
>```

Then you can install the package from npm

```shell
npm i vue-gif-emoji-picker
```

In your `main.ts`, you can import the CSS stylesheet globally:

```ts
import 'vue-gif-emoji-picker/dist/style.css'
```

> You can also import this stylesheet wherever a component is used.


Import components from this library in your own component:

```html
<script setup lang="ts">
    import {GifPicker} from 'vue-gif-emoji-picker';
</script>
```
