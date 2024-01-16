<script setup>
import Basic from './demo/GifPicker/Basic.vue';
</script>

# GIF Picker

This GIF Picker component is a component that enables users to search for GIFs using the Tenor API. 

It includes a search field where users can input search terms and a search button. 

When users click the button, the component sends a request to the Tenor API with the provided search term

It also fetch categories that you can choose from.


## Example Usage

<DemoContainer>
<Basic/>
</DemoContainer>

>Note: This example does not use the api-key <strong> which is required </strong>so it only shows some categories to display the component


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

Here are the properties that can be applied to the component

### Properties

| Name    | Type   | Default | Description   |
|---------|--------|---------|---------------|
| api-key | string | null    | Tenor API Key |
