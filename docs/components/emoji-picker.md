<script setup>
import Basic from './demo/EmojiPicker/Basic.vue'
</script>

# Emoji Picker

This Emoji Picker component is a component that enables users to search for emojis.

By default, the component displays the first category and let you click others to find your emoji

You can also search for emoji with their description

## Example Usage
Click an emoji to see what it returns in the console

<DemoContainer>
  <Basic/>
</DemoContainer>

```vue
<template>
  <EmojiPicker tooltip="true" @emojiSent="handleEmoji"/>
</template>
<script setup lang="ts">
  import {EmojiPicker} from "vue-gif-emoji-picker";
  import type {Emoji} from "vue-gif-emoji-picker";
  import 'vue-gif-emoji-picker/dist/style.css';

  function handleEmoji(emoji: Emoji) {
    console.log(emoji);
  }
</script>
```
## Reference

You may show props, slots, events, methods, etc. using Markdown.

### Properties

| Name    | Type    | Default | Description                       |
|---------|---------|---------|-----------------------------------|
| tooltip | boolean | false   | Display or not tooltips on emojis |

### Events

| Name      | Parameters             | Description                 |
|-----------|------------------------|-----------------------------|
| emojiSent | [Emoji](#emoji-object) | Emoji returned when clicked |

### Emoji Object

| Name        | Type   | Description              |
|-------------|--------|--------------------------|
| emoji       | string | Emoji character          |
| category    | string | Category of the emoji    |
| description | string | Description of the emoji |