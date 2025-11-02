<template>
  <div class="aboutus-main mycontainer">
    <div class="main-left">
      <h1>Bilim Manba — maqsad va qadriyatlar!</h1>
      <p>
        Bizning asosiy qadriyatimiz —
        <strong>bilimni hammaga ochiq qilish</strong>. Har bir sahifa, har bir
        maqola — bu siz bilan bo‘lishilayotgan kashfiyot.
        <br />
        🎯 Maqsadimiz: ilm-fan, tarix, tabiat, texnologiya va boshqa sohalarda
        ishonchli, qiziqarli va foydali ma’lumotlarni taqdim etish.
        <br />
        💡 Biz ishonamizki, bilim — bu kuch. Va bu kuch sizni o‘sishga,
        fikrlashga, dunyoni yangicha ko‘rishga undaydi.
        <br />
        🤝 Bilim Manba — bu faqat sayt emas. Bu — o‘rganishga, o‘sishga va
        ulashishga bag‘ishlangan hamjamiyat.
      </p>
    </div>
    <div class="main-right">
      <img src="/mainaboutus.jpg" alt="Biz haqimizda" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.aboutus-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  .main-left {
    flex: 1;
    padding-right: 2rem;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.6;
      color: #555;
    }
  }

  .main-right {
    flex: 1;
    text-align: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }

  // Responsive styles
  @media (max-width: 1024px) {
    .main-left {
      h1 {
        font-size: 2rem;
      }
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem 0;

    .main-left {
      padding-right: 0;
      text-align: center;

      h1 {
        font-size: 1.75rem;
      }
    }

    .main-right {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 0;

    .main-left {
      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.95rem;
        br {
          display: none;
        }
      }
    }
  }

  @media (max-width: 300px) {
    .main-left {
      h1 {
        font-size: 1.25rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
