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