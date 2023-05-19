<template>
    <tbody class="text-sm">
      <!-- Row -->
      <tr>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div class="font-medium text-slate-800">{{index + 1}}</div>
        </td>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div class="flex items-center text-slate-800">
            <div class="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 rounded-full mr-2 sm:mr-3">
              <img class="ml-1" :src="data.image_url" width="20" height="20" :alt="data.name" />
            </div>
            <div class="font-medium text-sky-500">{{data.name}}</div>
          </div>
        </td>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div class="font-medium text-slate-800">{{data.start_date}}</div>
        </td>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div class="font-medium text-slate-800">{{data.end_date}}</div>
        </td>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div class="inline-flex font-medium rounded-full text-center px-2.5 py-0.5" :class="statusColor(data.status)">{{data.status}}</div>
        </td>
        <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
          <div class="flex items-center">
            <button
              class="text-slate-400 hover:text-slate-500 transform"
              :class="descriptionOpen && 'rotate-180'"
              :aria-expanded="descriptionOpen"
              @click.prevent="descriptionOpen = !descriptionOpen"
              :aria-controls="`description-${data.id}`"
            >
              <span class="sr-only">Menu</span>
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
              </svg>
            </button>
          </div>
        </td>
      </tr>
      <tr :id="`description-${data.id}`" role="region" :class="!descriptionOpen && 'hidden'">
        <td colspan="10" class="px-2 first:pl-5 last:pr-5 py-3">
          <div class="flex items-center bg-slate-50 p-3 -mt-3">
            <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2">
              <path d="M1 16h3c.3 0 .5-.1.7-.3l11-11c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-11 11c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1zm1-3.6l10-10L13.6 4l-10 10H2v-1.6z" />
            </svg>
            <div class="italic">{{data.description}}</div>
          </div>
        </td>
      </tr>
    </tbody>
  </template>
  
<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    data: Object,
    value: Number,
    index: Number,
});

const descriptionOpen = ref(false)

const statusColor = (status) => {
    switch (status) {
        case 'Sudah Selesai':
        return 'bg-emerald-100 text-emerald-600'
        case 'Refunded':
        return 'bg-amber-100 text-amber-600'
        default:
        return 'bg-slate-100 text-slate-500'
    }
}
</script>