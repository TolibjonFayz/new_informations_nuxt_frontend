<template>
  <div class="mycontainer categories">
    <h2 class="categories-title">Kategoriyalar</h2>
    <div class="categories-list">
      <div
        class="category-item"
        v-for="category in categories"
        :key="category.id"
      >
        <img
          class="category-item-img"
          :src="`/${category.img}.png`"
          :alt="category.name"
          loading="lazy"
        />
        <p class="category-item-name">{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { id: 1, name: "Fan", img: "category1" },
  { id: 2, name: "Tarix", img: "category2" },
  { id: 3, name: "Hayvonlar", img: "category3" },
  { id: 4, name: "Tabiat", img: "category4" },
  { id: 5, name: "Texnologiyalar", img: "category5" },
  { id: 6, name: "Boshqalar", img: "category6" },
];
</script>

<style lang="scss" scoped>
.categories {
  margin-top: 25px;
  .categories-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 22px;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  .categories-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;

    @media (max-width: 991px) {
      justify-content: center;
      gap: 20px;
    }

    .category-item {
      background: #fdf1e6;
      border: 1px solid #eee;
      border-radius: 8px;
      padding: 12px;
      text-align: center;
      width: calc(16% - 12px);
      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-5px);
      }

      @media (max-width: 991px) {
        width: calc(33.33% - 20px);
      }

      @media (max-width: 768px) {
        width: calc(50% - 20px);
      }

      @media (max-width: 480px) {
        width: calc(100% - 20px);
        max-width: 250px;
      }

      @media (max-width: 350px) {
        width: calc(100% - 10px);
        padding: 8px;
      }

      &-img {
        max-width: 100%;
        border-radius: 4px;

        @media (max-width: 480px) {
          width: 80%;
          margin: 0 auto;
          display: block;
        }
      }

      &-name {
        margin-top: 8px;
        font-weight: bold;

        @media (max-width: 768px) {
          font-size: 14px;
        }

        @media (max-width: 350px) {
          font-size: 13px;
          margin-top: 6px;
        }
      }
    }
  }
}
</style>
