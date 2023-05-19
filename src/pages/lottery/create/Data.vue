<template>
    <div class="grow">
      <div class="grid grid-cols-12 gap-6">
        <!-- Panel body -->
        <div class="p-6 space-y-6 col-span-full xl:col-span-6 overflow-hidden">
          <h2 class="text-2xl text-slate-800 font-bold mb-5">Undian</h2>
          <!-- Picture -->
          <section>
            <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <div class="sm:w-2/3">
                <label class="block text-sm font-medium mb-1" for="name">Nama</label>
                <input class="form-input w-full" type="text" />
              </div>
            </div>
            <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <div class="sm:w-2/3">
                <label class="block text-sm font-medium mb-1" for="name">Deskripsi</label>
                <textarea class="form-input w-full" rows="3"></textarea>
              </div>
            </div>
            <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <div class="sm:w-2/3">
                <label class="block text-sm font-medium mb-1" for="name">URL Gambar</label>
                <input class="form-input w-full" type="text" />
              </div>
            </div>
            <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <div class="sm:w-2/3">
                <label class="block text-sm font-medium mb-1" for="name">Tanggal Mulai</label>
                <input class="form-input w-full" type="date" />
              </div>
            </div>
            <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <div class="sm:w-2/3">
                <label class="block text-sm font-medium mb-1" for="name">Tanggal Selesai</label>
                <input class="form-input w-full" type="date" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- Panel footer -->
      <footer>
        <div class="flex flex-col px-6 py-5 border-t border-slate-200">
          <div class="flex">
            <button class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancel</button>
            <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'

  </script>