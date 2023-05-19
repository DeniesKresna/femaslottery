<template>
    <div class="flex h-screen overflow-hidden">
      <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" v-show="session.first_name"/>
      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header :sidebarOpen="sidebarOpen" :session="session" @open-burger-sidebar="sidebarOpen = true" />
        <main>
          <Suspense>
            <template #default><router-view /></template>
            <template #fallback>Loading...</template>
          </Suspense>
        </main>
      </div> 
    </div>
  </template>
<script setup>
    import { ref, computed } from 'vue'
    import { useLayoutStore } from './store'
    import Sidebar from '../../partials/Sidebar.vue'
    import Header from '../../partials/Header.vue'

    console.log("aduh")

    const sidebarOpen = ref(false)

    const layoutStore = useLayoutStore()

    const session = computed(() => layoutStore.session)
    layoutStore.getSession()
</script>