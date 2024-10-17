<template>
  <div class="max-w-lg mx-auto h-screen flex items-center justify-center gap-x-2">
    <UInput v-model.trim="link" class="w-full" />
    <UButton :disabled="!link" @click="parseWebPage">Send</UButton>


  </div>
</template>

<script setup lang="ts">
import * as cheerio from 'cheerio'
import { ref, reactive, computed } from 'vue'

const initialState = {
  title: '',
  price: '',
  address: '',
  squareMeters: '',
  numberOfRooms: '',
  floor: ''
};

const link = ref('https://www.idealista.it/immobile/30321065/')
const state = reactive({ ...initialState })

const isIdealistaUrl = computed(() => {
  try {
    const parsedUrl = new URL(link.value)
    return parsedUrl.hostname === 'www.idealista.it'
  } catch(error) {
    console.error('Invalid URL:', error)
    return false
  }
})

const resetState = () => {
  Object.assign(state, { ...initialState });
};

async function parseWebPage() {
  const proxyUrl = `/api/proxy?url=${encodeURIComponent(link.value)}`

  try {
    resetState()

    const res = await $fetch(proxyUrl)
    const $ = cheerio.load(res)

    if (isIdealistaUrl.value) {
      state.title = $('.main-info__title-main').text().trim()
      state.price = $('.info-data-price').text().trim()
      state.address = $('.main-info__title-minor').text().trim()

      const spans = $('.info-features span')

      spans.each((_index, element) => {
        const text = $(element).text().trim()

        if (text.match(/\d+\s*m2/)) {
          state.squareMeters = text.match(/\d+/)?.[0] || ''
        } else if (text.match(/\d+\s*locali?/)) {
          state.numberOfRooms = text.match(/\d+/)?.[0] || ''
        } else if (text.match(/\d+º?\s*piano/)) {
          state.floor = text.trim()
        }
      })
    }
  } catch (error) {
    console.error('Error fetching the webpage:', error)
  }
}
</script>

