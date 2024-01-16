<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PickerHeader",
  props:{
    search: String
  },
  data() {
    return {
      search: this.search
    }
  },
})
</script>

<template>
  <header class="flex flex-row bg-white dark:bg-gray-800 shadow-lg z-1 rounded-lg px-1 py-2 dark:text-gray-300">
    <div v-show="search" class="flex items-center px-2 cursor-pointer" @click="$emit('clearSearch')">
      <span class="material-symbols-outlined">arrow_back</span>
    </div>
    <div class="flex items-center justify-between w-full  ">
      <div
          class="flex items-center justify-between w-full rounded-lg border border-gray-500 gap-2 relative transition ease-in-out delay-150 ">
        <input type="text"
               v-on:keyup.enter="$emit('onSearch', search)"
               v-model="search"
               class="w-[80%] flex border-none rounded-lg bg-transparent  px-4 py-3 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
               placeholder="Search for gifs...">
        <div class="absolute right-2 flex items-center h-full cursor-pointer p-2" @click="$emit('onSearch', search)">
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>