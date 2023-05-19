<template>
    <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header class="px-5 py-4">
        <h2 class="font-semibold text-slate-800">Semua Undian <span class="text-slate-400 font-medium">442</span></h2>
      </header>
      <div>
  
        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="table-auto w-full divide-y divide-slate-200">
            <!-- Table header -->
            <thead class="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
              <tr>
                <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">#</div>
                </th>
                <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">Nama</div>
                </th>
                <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">Mulai</div>
                </th>
                <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">Selesai</div>
                </th>
                <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">Status</div>
                </th>
                <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span class="sr-only">Menu</span>
                </th>
              </tr>
            </thead>
            <!-- Table body -->
            <Data
              v-for="(data, index) in datas"
              :key="data.id"
              :data="data"
              :index="index"
            />
          </table>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Data from './Data.vue'
  
  const datas = ref([
    {
      id: 1,
      name: "Undian Super Berhadiah 1",
      image_url: "https://www.serbakuis.com/wp-content/uploads/2023/02/Promo-Kejutan-THR-Prochiz-Hadiah-Langsung-Total-Milyaran-Rupiah.jpg",
      start_date: '2023-05-02 14:00:22',
      end_date: '2023-05-03 14:00:22',
      status: 'Sudah Selesai',
      description: "asdfasdfasdfasdfasdf"
    },
    {
      id: 2,
      name: "Undian Super Berhadiah 2",
      image_url: "https://www.serbakuis.com/wp-content/uploads/2022/03/Promo-Undian-Deka-Mini-Bites-Kejutan-Bahagia-Berlimpah-Hadiah.jpeg",
      start_date: '2023-05-02 14:00:22',
      end_date: '2023-05-03 14:00:22',
      status: 'Sudah Selesai',
      description: "lkjlkjlkjkjlklkljlk"
    }
  ])
  </script>