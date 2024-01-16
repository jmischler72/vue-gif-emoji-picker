<script setup>
import Basic from './demo/GifPicker/Basic.vue';
import DemoContainer from '../.vitepress/components/DemoContainer.vue'
</script>

# Component A

This is a simple Hello Word component with a prop and use icon <span class="icon-heart" style="color:tomato"></span> from a font file.

## Example Usage

You may show demo below with the code snippet.

<Basic/>

```vue
<template>
  <GifPicker api-key="<your-api-key>"/>
</template>
<script setup lang="ts">
import GifPicker from "vue-picker-library";
import 'vue-picker-library/style.css';
</script>
```

## Reference

You may show props, slots, events, methods, etc. using Markdown.

### Properties

| Name | Type   | Default | Description    |
| ---- | ------ | ------- | -------------- |
| msg  | string | null    | Messge to show |

### Events

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
|      |            |             |

### Slots

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
|      |            |             |
