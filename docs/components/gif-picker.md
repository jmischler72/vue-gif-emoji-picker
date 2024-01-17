<script setup>
import Basic from './demo/GifPicker/Basic.vue';
</script>

# GIF Picker

This GIF Picker component is a component that enables users to search for GIFs using the Tenor API.

It includes a search field where users can input search terms and a search button

When users search a GIF, the component sends a request to the Tenor API with the provided search term

By default, the component displays categories to help users search GIFs

The component also handles loading with a skeleton glowing effect and an error message when it cannot contact the API

## How to get your Tenor API

To use this component, <strong> you will need to get an API key </strong> in order to get GIFs from the Tenor API :

## Example Usage

> Note: This example does not use an api-key <strong> which is required </strong>so it only shows some example
> categories

<DemoContainer>
<Basic/>
</DemoContainer>

```vue
<template>
  <GifPicker api-key="<your-api-key>"/>
</template>
<script setup lang="ts">
  import GifPicker from "vue-picker-library";
  import 'vue-picker-library/style.css'; // not needed if imported globally
</script>
```

## Reference

Here are the properties that can be applied to the component

### Properties

| Name    | Type   | Default | Description   |
|---------|--------|---------|---------------|
| api-key | string | null    | Tenor API Key |
