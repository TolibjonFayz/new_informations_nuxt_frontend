<template>
  <header class="header">
    <div class="mycontainer">
      <div class="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav class="nav">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/courses">Courses</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
// No logic needed yet — purely presentational
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fdf1e6;
}

.logo img {
  height: 40px;
  margin-right: 0.5rem;
}

.logo a {
  font-weight: bold;
  font-size: 1.5rem;
  color: #007bff;
  text-decoration: none;
}

.nav a {
  margin-left: 1.5rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
}

.nav a:hover {
  color: #007bff;
}
</style>
