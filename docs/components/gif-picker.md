<script setup>
import Basic from './demo/GifPicker/Basic.vue';
</script>

# GIF Picker

This GIF Picker component is a component that enables users to search for GIFs using the Tenor API.

When users search a GIF, the component sends a request to the Tenor API with the provided search term

By default, the component displays categories to help users search GIFs

The component also handles loading with a skeleton glowing effect and an error message when it cannot contact the API

## How to get your Tenor API

To use this component, <strong> you will need to get an API key </strong> in order to get GIFs from the Tenor API :

- [developers.google.com/tenor](https://developers.google.com/tenor/guides/quickstart#setup)

## Example Usage

> Note: This example does not use an api-key <strong> which is required </strong>so it only shows some example
> categories

<DemoContainer>
<Basic/>
</DemoContainer>

```vue
<template>
  <GifPicker api-key="AIzaSyDVeSv0S9z1sKZUmY4BqFugXp1lasu9KeQ" @gifSent="handleGif"></GifPicker>
</template>

<script setup lang="ts">
  import {GifPicker} from "vue-gif-emoji-picker";
  import type {Gif} from "vue-gif-emoji-picker";
  import 'vue-gif-emoji-picker/style.css'; // not needed if imported globally

  function handleGif(gif: Gif) {
    console.log(gif);
  }
</script>
```

## Reference

Here are the properties that can be applied to the component

### Properties

| Name    | Type   | Default | Description   |
|---------|--------|---------|---------------|
| api-key | string | null    | Tenor API Key |

### Events

| Name    | Parameters         | Description               |
|---------|--------------------|---------------------------|
| gifSent | [Gif](#gif-object) | Gif returned when clicked |

### Gif Object

| Name                | Parameters | Description            |
|---------------------|------------|------------------------|
| content_description | string     | Description of the gif |
| url                 | string     | URL of the gif         |
