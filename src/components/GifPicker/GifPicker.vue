<script lang="ts">

import type {CategoryObject} from "./types/CategoryObject";
import type {ResponseObject} from "./types/ResponseObject";
import {StateEnum} from "./StateEnum";
import {EXAMPLE_CATEGORIES} from "./categories.ts";

const tenorApiUrl = "https://tenor.googleapis.com/v2";

export default {
  computed: {
    StateEnum() {
      return StateEnum
    }
  },
  props: {
    apiKey: {
      type: String,
      required: true
    },

  },
  data() {
    return {
      search: '',
      results: [] as ResponseObject[],
      tags: [] as CategoryObject[],
      state: StateEnum.Loading,
    }
  },
  mounted() {
    if(this.apiKey === ''){
      this.tags = EXAMPLE_CATEGORIES;
      this.state = StateEnum.Loaded;
    }else {
      this.getCategoriesGifs();
    }
  },
  methods: {
    getGifsFromSearch() {
      if (!this.search) {
        this.results = [];
        return;
      }
      this.state = StateEnum.Loading;
      fetch(tenorApiUrl + `/search?q=${this.search}}&limit=32&media_filter=gif,tinygif&key=${this.apiKey}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Something went wrong');
          })
          .then(({results}) => {
            this.results = results as ResponseObject[];
            this.state = StateEnum.Loaded;
          })
          .catch((error) => {
            this.state = StateEnum.Error;
            console.log(error)
          })
    },
    getCategoriesGifs() {
      this.state = StateEnum.Loading;
      fetch(tenorApiUrl + `/categories?key=${this.apiKey}`)
          .then(response => {
            console.log(response);
            if (response.ok) {
              return response.json();
            }
            throw new Error('Something went wrong');
          })
          .then(({tags}) => {
            console.log(tags);
            this.tags = tags as CategoryObject[];
            this.state = StateEnum.Loaded;
          })
          .catch((error) => {
            this.state = StateEnum.Error;
            console.log(error)
          })
    }
  }
}
</script>

<template>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>

  <div
      class="w-[16rem] h-[20rem] flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-[0_-1px_5px_rgba(0,0,0,0.4)] p-1">
    <header class="flex flex-row bg-white dark:bg-gray-800 shadow-lg z-1 rounded-lg px-1 py-2 dark:text-gray-300">
      <div v-show="search" class="flex items-center px-2 cursor-pointer" @click="search=''">
        <span class="material-symbols-outlined">arrow_back</span>
      </div>
      <div class="flex items-center justify-between w-full  ">
        <div
            class="flex items-center justify-between w-full rounded-lg border border-gray-500 gap-2 relative transition ease-in-out delay-150 ">
          <input type="text"
                 v-on:keyup.enter="getGifsFromSearch"
                 v-model="search"
                 class="w-[80%] flex border-none rounded-lg bg-transparent  px-4 py-3 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                 placeholder="Search for gifs...">
          <div class="absolute right-2 flex items-center h-full cursor-pointer p-2" @click="getGifsFromSearch">
            <span class="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
    </header>

    <div v-if="state === StateEnum.Loading" class="h-full w-full flex overflow-hidden pt-2 ">
      <div class="p-4- w-full">
        <div class="grid grid-cols-2 grid-flow-row auto-rows-auto gap-1">
          <div
              v-for="i in 6"
              :key="i"
              class="square h-20 rounded-lg bg-gray-200 text-white flex items-center justify-center font-semibold font-xl border-2 border-transparent hover:border-blue transition duration-300 cursor-pointer group z-1 overflow-hidden"
          />
        </div>
      </div>
    </div>

    <div v-else-if="state === StateEnum.Error" class="flex flex-col justify-center items-center h-full dark:text-white">
      <div class="">
        <span class="material-symbols-outlined">error</span>
      </div>
      <p>Error loading gifs :(</p>
    </div>

    <div v-else-if="state === StateEnum.Loaded" class="h-full w-full flex overflow-hidden pt-2 ">
      <div class="overflow-auto p-4- w-full">
        <div v-if="search && results && results.length"
             class="grid grid-cols-2 grid-flow-row auto-rows-auto gap-1">
          <div
              v-for="(result, r) in results"
              :key="r"
              class="h-20 rounded-lg bg-cover text-white flex items-center justify-center font-semibold font-xl border-2 border-transparent hover:border-blue transition duration-300 cursor-pointer group z-1 overflow-hidden"
              :style="`background-image: url(${result.media_formats['tinygif'].url})`"
              @click="$emit('gifSent', result)"
          />
        </div>
        <div v-else-if="tags && tags.length" class="grid grid-cols-2 grid-flow-row auto-rows-auto gap-1">
          <div
              v-for="(tag, t) in tags"
              :key="t"
              class="h-20 rounded-lg bg-cover text-white flex items-center justify-center font-semibold font-xl border-2 border-transparent hover:border-blue transition duration-300 cursor-pointer group z-1 overflow-hidden "
              :style="`background-image: url(${tag.image})`"
              @click.stop="search = tag.searchterm; getGifsFromSearch()"
          >
            {{ tag.searchterm }}
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
