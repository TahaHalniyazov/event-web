<template>
    <div class="popup-page">
      <!-- Кнопка для открытия поп-апа -->
      <button @click="openPopup"><img src="@/assets/img/section-img/forward.svg" alt="" class="share-img"></button>
  
      <!-- Поп-ап -->
      <div v-if="visible" class="popup-overlay" @click="closePopup">
        <div class="popup" @click.stop>
          <!-- Кнопка закрытия поп-апа -->
          <button class="close-btn" @click="closePopup">&times;</button>
  
          <!-- Контент поп-апа -->
          <h3>Поделиться событием</h3>
          <div class="social-links">
            <a href="https://vk.com"><img src="../assets/img/footer-img/VK.svg" alt="VK"></a>
            <a href="https://whatsapp.com"><img src="../assets/img/footer-img/whatsapp.svg" alt="Whatsapp"></a>
            <a href="https://telegram.com"><img src="../assets/img/footer-img/TL.svg" alt="Telegram"></a>
          </div>
          <button @click="copyLink" class="copyLink"><p>Скопировать ссылку</p> <img src="../assets/img/Group 13.svg" alt=""></button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: false,
        link: window.location.href // Используем текущий URL страницы
      };
    },
    methods: {
      openPopup() {
        this.visible = true;
        // Отключаем прокрутку при открытии поп-апа
        document.body.style.overflow = 'hidden';
      },
      closePopup() {
        this.visible = false;
        // Восстанавливаем прокрутку при закрытии поп-апа
        document.body.style.overflow = 'auto';
      },
      copyLink() {
        navigator.clipboard.writeText(this.link).then(() => {
          alert('Ссылка скопирована!');
        }, (err) => {
          console.error('Ошибка при копировании:', err);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .popup-page {
    z-index: 999;
  }
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup {
    background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(252, 92, 94, 1), rgba(244, 121, 208, 1), rgba(228, 182, 252, 1));
    padding: 40px;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }
  
  h3 {
    font-size: 22px;
    color: white;
    font-weight: 500;
  }
  
  .close-btn {
    position: absolute;
    top: -70px;
    right: -46px;
    border: none;
    background: none;
    font-size: 44px;
    cursor: pointer;
    color: white; /* Цвет крестика */
  }
  
  .social-links a img {
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }
  
  .social-links {
    display: flex;
    justify-content: space-around;
    margin-top: 24px;
  }
  
  button {
    
    
    background-color: transparent;
    
    border: none;
    
    cursor: pointer;
  }
  
  .copyLink {
    display: flex;
    justify-content: space-between;
    background-color: white;
    color: #666666;
    width: 100%;
    padding: 10px 14px;
    border-radius: 30px;
    font-size: 16px;
  }
  
  </style>
  