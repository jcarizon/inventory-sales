<template>
  <div class="min-h-screen flex flex-col bg-gray-100 text-gray-900">
    <header class="bg-white shadow p-4">
      <div class="container mx-auto">
        <h1 class="text-xl font-bold">My Nuxt App</h1>
      </div>
    </header>

    <main class="flex-1 container mx-auto p-4">
      <slot />
    </main>

    <footer class="bg-white border-t p-4 text-center text-sm text-gray-600">
      © 2025 My Nuxt App. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// Layouts in Nuxt 3 use `<slot />` to render the page content.
</script>

<style scoped>
/* Optional scoped styles here */
</style>
