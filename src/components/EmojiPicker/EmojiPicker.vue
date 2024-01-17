<script lang="ts">

import emojis from './emoji.json'
import {Emoji} from "./Emoji.ts";

export default {

  data() {
    return {
      search: '',
      results: [],
      emojisByCategory: {} as Record<string, Emoji[]>,
      categorySelected: "",
    }
  },
  watch: {
    search() {
      this.getEmojisFromSearch();
    }
  },
  mounted() {
    emojis.forEach(emoji => {
      const {category} = emoji;
      if (!this.emojisByCategory[category]) {
        this.emojisByCategory[category] = [];
      }
      this.emojisByCategory[category].push(emoji);
    });
    this.categorySelected = Object.keys(this.emojisByCategory)[0];
  },
  methods: {
    getEmojisFromSearch() {
      if (!this.search) {
        return;
      }
      console.log(this.search);

    },
    selectCategory(category: string) {
      this.categorySelected = category;
      this.scrollOnTop();
    },
    scrollOnTop() {
      const element: HTMLElement | null = document.getElementById("emojis");
      if (element) element.scrollTop = 0;
    }
  }
}
</script>

<template>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>

  <div
      class="w-[16rem] h-[20rem] flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-[0_-1px_5px_rgba(0,0,0,0.4)] p-1">
    <header class="flex flex-row bg-white dark:bg-gray-800 shadow-lg z-1 rounded-lg px-1 py-1 dark:text-gray-300">
      <div v-show="search" class="flex items-center px-2 cursor-pointer" @click="search = ''">
        <span class="material-symbols-outlined">arrow_back</span>
      </div>
      <div class="flex items-center justify-between w-full">
        <div
            class="flex items-center justify-between w-full rounded-lg border border-gray-500 gap-2 relative transition ease-in-out delay-150 ">
          <input type="text"
                 v-model="search"
                 class="w-[80%] flex border-none rounded-lg bg-transparent px-4 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                 placeholder="Search for gifs...">
          <div class="absolute right-2 flex items-center h-full p-2">
            <span class="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
    </header>
    <div class="h-full w-full flex overflow-hidden pt-2 flex flex-row">
      <div
          class="ml-1 border border-gray-500 shadow-xl rounded-lg px-1 py-1 text-xl h-full flex flex-col justify-between bg-white dark:bg-gray-800">
        <span v-for="(category, c) in Object.keys(emojisByCategory)"
              :key="c"
              class="cursor-pointer rounded-lg"
              :class="{ [`bg-gray-300 dark:bg-gray-600`]: category === categorySelected }"
              @click="selectCategory(category)">{{ emojisByCategory[category][0].emoji }}</span>
      </div>
      <div id="emojis" class="overflow-auto px-2 w-full">
        <div
            class="grid grid-cols-6 grid-flow-row auto-rows-auto">
          <div
              v-for="(result, r) in emojisByCategory[categorySelected]"
              :key="r"
              class=" text-xl rounded-lg text-white flex items-center justify-center cursor-pointer z-1 overflow-hidden"
              @click="$emit('emojiSent', result)"
          >
            <span>{{ result.emoji }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>