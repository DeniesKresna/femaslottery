<template>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

      <!-- Page header -->
      <div class="mb-8">
        <!-- Title -->
        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Tambah Undian ✨</h1>
      </div>

      <!-- Content --> 
      <div class="bg-white shadow-lg rounded-sm mb-8">
        <div class="flex flex-col md:flex-row md:-mr-px">
          <Data />
        </div>
      </div>

    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Data from './Data.vue'

  </script>