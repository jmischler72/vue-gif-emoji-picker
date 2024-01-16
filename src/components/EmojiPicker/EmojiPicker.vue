<script lang="ts">

import PickerHeader from "../PickerHeader.vue";
import emojis from './emoji.json'
import {Emoji} from "./Emoji.ts";

export default {
  components: {PickerHeader},

  data() {
    return {
      search: '',
      results: [],
      emojisByCategory: {} as Record<string, Emoji[]>,
      categorySelected: "",
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
    // console.log(this.emojisByCategory);
    // console.log(Object.keys(this.emojisByCategory));

    // Affiche les listes d'emojis triées par catégorie
    // for (const category in emojisByCategory) {
    //   if (emojisByCategory.hasOwnProperty(category)) {
    //     console.log(`Catégorie: ${category}`);
    //     console.log(emojisByCategory[category]);
    //   }
    // }
  },
  methods: {
    getEmojisFromSearch(search: string) {
      if (!search) {
        return;
      }

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
    <PickerHeader :search="search" @onSearch="getEmojisFromSearch" @clearSearch="search = ''"/>
    <div class="h-full w-full flex overflow-hidden pt-2 flex flex-row">
      <div class="flex flex-col">
        <span v-for="(category, c) in Object.keys(emojisByCategory)"
              @click="selectCategory(category)">{{ emojisByCategory[category][0].emoji }}</span>
      </div>
      <div id="emojis" class="overflow-auto p-4- w-full">
        <div
            class="grid grid-cols-8 grid-flow-row auto-rows-auto">
          <div
              v-for="(result, r) in emojisByCategory[categorySelected]"
              :key="r"
              class="my-[1px] rounded-lg text-white flex items-center justify-center cursor-pointer z-1 overflow-hidden"
              @click="$emit('emojiSent', result)"
          >
            <span>{{ result.emoji }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.square {
  background: rgba(130, 130, 130, 0.2);
  background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
  background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
  background-size: 800px 100px;
  animation: wave-squares 1.5s infinite ease-out;
}

@keyframes wave-squares {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
