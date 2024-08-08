<template>
  <div class="modal-overlay" v-if="selectedPhotoIndex !== null">
    <div class="modal-content">
      <div class="modal-navigation-left">
        <button @click="prevPhoto" :disabled="selectedPhotoIndex === 0" class="prev-button"><img src="@/assets/img/section-img/Vector (1).svg" alt=""></button>
      </div>
      <img :src="photos[selectedPhotoIndex]?.url" alt="Modal Photo" class="modal-image">
      <div class="modal-navigation-right">
        <button @click="nextPhoto" :disabled="selectedPhotoIndex === photos.length - 1" class="next-button"><img src="@/assets/img/section-img/Vector.svg" alt=""></button>
      </div>
      <button @click="closeModal" class="close-button">&#10006;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['photos', 'selectedPhotoIndex'],
  methods: {
    prevPhoto() {
      if (this.selectedPhotoIndex > 0) {
        this.$emit('update:selectedPhotoIndex', this.selectedPhotoIndex - 1);
      }
    },
    nextPhoto() {
      if (this.selectedPhotoIndex < this.photos.length - 1) {
        this.$emit('update:selectedPhotoIndex', this.selectedPhotoIndex + 1);
      }
    },
    closeModal(event) {
      if (event.target.classList.contains('close-button')) {
        document.documentElement.style.overflow = ''; // Восстанавливаем скролл страницы
        document.documentElement.style.width = ''; // Восстанавливаем ширину страницы
        document.body.style.overflow = ''; // Восстанавливаем скролл страницы для IE/Edge
        this.$emit('update:selectedPhotoIndex', null); // Сбрасываем выбранную фотографию
      }
    }
  },
  watch: {
    selectedPhotoIndex(newIndex) {
      if (newIndex !== null) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth; // Получаем ширину скроллбара
        document.documentElement.style.overflow = 'hidden'; // Скрываем скролл страницы при открытии модального окна
        document.documentElement.style.width = `calc(100% - ${scrollbarWidth}px)`; // Компенсируем ширину скроллбара
        document.body.style.overflow = 'hidden'; // Скрываем скролл страницы для IE/Edge
      }
    }
  }
};
</script>

<style scoped>
/* Стили для модального окна */
.modal-overlay {
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

.modal-content {
  background-color: transparent; /* Убираем фон модального окна */
  padding: 20px;
  position: relative;
  min-width: 600px; /* Минимальная ширина модального окна */
  min-height: 500px; /* Минимальная высота модального окна */
}

.modal-image {
  width: 100%;
  height: auto;
}

.modal-navigation-left,
.modal-navigation-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.modal-navigation-left {
  left: -20px;
  
}

.modal-navigation-right {
  right: -20px;
}

.prev-button,
.next-button,
.close-button {
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 24px;
  
  
}

.close-button {
  position: absolute;
  top: -10px;
  right: -10px;
}


@media (max-width: 1200px) {
  .modal-content {  
  padding: 20px;  
  min-width: 500px; 
  min-height: 400px; 
}
}

@media (max-width: 990px) {
  .modal-content {  
  
  min-width: 400px; 
  min-height: 400px; 
}
}

.next-button img,
.prev-button img { 
  width: 16px;
}

@media (max-width: 760px) {
  .modal-content {  
  
  min-width: 400px; 
  min-height: 300px; 
}
}


@media (max-width: 480px) {
  .modal-content {  
  
  min-width: 300px; 
  min-height: 200px; 
}
}

@media (max-width: 360px) {
  .modal-content {  
  
  max-width: 150px; 
  
}

.modal-navigation-left {
  left: -10px;
  
}

.modal-navigation-right {
  right: -10px;
}
}
</style>
