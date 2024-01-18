<script setup>
import Basic from './demo/EmojiPicker/Basic.vue'
</script>
# Component B

This component depends on third-party component library for Vue 3:

* Component (button) from [PrimeVue](https://www.primefaces.org/primevue/)
* CSS from [PrimeIcons](https://www.primefaces.org/showcase/icons.xhtml) and [PrimeFlex](https://www.primefaces.org/primeflex/)

## Example Usage

Click the buttons to change the count.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/components/demo/EmojiPicker/Basic.vue

## Reference
You may show props, slots, events, methods, etc. using Markdown.

### Properties

| Name        | Type     | Default  | Description     |
| ----------- | -------- | -------- | --------------- |
|             |          |          |                 |

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