# Getting Started

Here is a set of instructions to help you install this component library

## Setup

First make sure that this library is compatible with your version of Vue

In your `package.json`, you shall have the dependencies compatible with the following:

```json
"dependencies": {
  "vue": "^3.2.25"
}
```


In your `main.ts`, you shall import the CSS stylesheet:

```ts
import 'vue-picker-library/dist/style.css'
```
>You can also import this stylesheet wherever your component is used.


Import components from this library in your own component:

```html
<script setup lang="ts">
  import { GifPicker } from 'vue-picker-library';
</script>
```
