<template>
  <header class="header">
    <div class="mycontainer main">
      <div class="logo">
        <NuxtLink to="/">
          <img src="/logo.png" alt="Logo" />
        </NuxtLink>
      </div>
      <UInput
        icon="i-lucide-search"
        size="lg"
        variant="outline"
        placeholder="Qidiruv..."
        class="w-128"
        :ui="{
          color: {
            outline: {
              background: 'white',
              border: '#e8a87c',
              activeBorder: '#e8a87c',
              ring: '#e8a87c',
              placeholder: '#e8a87c',
              icon: '#e8a87c',
              text: '#e8a87c',
            },
          },
        }"
      />
      <nav class="nav">
        <NuxtLink to="/about">Biz haqimizda</NuxtLink>
        <NuxtLink to="/contact">Aloqa</NuxtLink>
        <NuxtLink to="/courses">Kirish</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
.header {
  background-color: #fdf1e6;
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}

.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  img {
    height: 60px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    padding: 0.5rem 0;
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #e8a87c;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #e8a87c;

      &::after {
        width: 100%;
      }
    }

    &.router-link-active {
      color: #e8a87c;
      &::after {
        width: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  .main {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .nav {
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }

  :deep(.w-128) {
    width: 100% !important;
    max-width: 400px;
  }
}
</style>
