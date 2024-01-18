<template>
  <EmojiPicker tooltip="true" @emojiSent="handleEmoji"/>
</template>
<script setup lang="ts">
import {EmojiPicker} from "vue-gif-emoji-picker";
import type {Emoji} from "vue-gif-emoji-picker";
import 'vue-gif-emoji-picker/style.css';

function handleEmoji(emoji: Emoji) {
  console.log(emoji);
}
</script>
