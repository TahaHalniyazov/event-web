<template>
  <div >
    <Navbar/>
    
    <div class="moments-page">
      <router-link to="/" class="back">&#10094; Вернуться</router-link>
      <div class="moments-page-items">      
        <h2><span>Отчет</span> о мероприятиях</h2>
        <div class="photo-gallery">
          <div class="row" v-for="(row, index) in rows" :key="index">
            <div v-for="photo in row" :key="photo.id" class="photo" @click="openModal(photo.id)">
              <img :src="photo.url" alt="Photo">
            </div>
          </div>
        </div>
        <button class="moments-btn" v-if="visiblePhotos.length < photos.length" @click="loadMorePhotos">Показать еще</button>
        <photo-modal 
          :photos="photos" 
          :selectedPhotoIndex="selectedPhotoIndex" 
          :isVisible="modalVisible" 
          @update:selectedPhotoIndex="selectedPhotoIndex = $event" 
          @closeModal="modalVisible = false" 
        />
      </div>
    
    </div>
  <Footer/>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import PhotoModal from '@/components/Moments/PhotoModal.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    PhotoModal, Navbar, Footer
  },
  data() {
    return {
//       photos: [
// { id: 1, url: require('@/assets/img/1.jpg') },
// { id: 2, url: require('@/assets/img/2.png') },
// { id: 3, url: require('@/assets/img/3.png') },
// { id: 4, url: require('@/assets/img/4.png') },
// { id: 5, url: require('@/assets/img/1.jpg') },
// { id: 6, url: require('@/assets/img/2.png') },
// { id: 7, url: require('@/assets/img/3.png') },
// { id: 8, url: require('@/assets/img/4.png') },
// { id: 9, url: require('@/assets/img/1.jpg') },
// { id: 10, url: require('@/assets/img/2.png') },
// { id: 11, url: require('@/assets/img/3.png') },
// { id: 12, url: require('@/assets/img/4.png') },
// { id: 13, url: require('@/assets/img/1.jpg') },
// { id: 14, url: require('@/assets/img/2.png') },
// { id: 15, url: require('@/assets/img/3.png') },
// { id: 16, url: require('@/assets/img/4.png') },
//   // Добавьте остальные пути к вашим фотографиям здесь
// ],
      visiblePhotos: [], // Фотографии, отображаемые в данный момент
      modalVisible: false, // Переменная для управления видимостью модального окна
      selectedPhotoIndex: null // Индекс выбранной фотографии
    };
  },
  computed: {
    ...mapGetters(['photos']),
    rows() {
      const rows = [];
      for (let i = 0; i < this.visiblePhotos.length; i += 4) {
        rows.push(this.visiblePhotos.slice(i, i + 4));
      }
      return rows;
    }
  },
  mounted() {
    // При загрузке компонента отображаем первые 8 фотографий
    this.visiblePhotos = this.photos.slice(0, 8);
    console.log("allPhotos", this.photos);    
  },
  methods: {
    loadMorePhotos() {
      // Загружаем следующие 8 фотографий
      const startIndex = this.visiblePhotos.length;
      const endIndex = Math.min(startIndex + 8, this.photos.length);
      this.visiblePhotos = this.visiblePhotos.concat(this.photos.slice(startIndex, endIndex));
    },
    openModal(photoId) {
      // Открываем модальное окно и устанавливаем индекс выбранной фотографии
      this.selectedPhotoIndex = this.photos.findIndex(photo => photo.id === photoId);
      this.modalVisible = true;
    }
  }
};
</script>

<style>
.back{
  text-align: left;
  text-decoration: none;
  color: #666666;
  margin-left: 40px;
  margin-top: 40px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;  
}
.moments-page {
  margin: 0 auto;
  max-width: 1400px;
  margin-top: 50px;
  padding: 10px;
}
.moments-page-items {  
  text-align: center;
  
}
/* Стили для галереи фотографий и кнопки "Показать еще" */
.photo-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}

.row {
  display: flex;
  justify-content: space-between;
}

.photo {
  width: calc(25% - 20px); /* 25% ширины родительского контейнера минус отступы */
  height: auto; /* Автоматическая высота, чтобы сохранить пропорции */
  margin: 10px;
  
}


h2 {
  text-align: center;
  font-size: 32px;
  font-family: "Montserrat", sans-serif;  
  font-weight: 600; 
  margin-top: 50px;
  margin-bottom: 50px;
}

h2 span {
  background: linear-gradient(to right,rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
  background-clip: text;
  color: transparent;
}

.moments-btn {
  margin-top: 10px;
  width: 95%;
  padding: 10px;
  border-radius: 30px;
  background: #BDFF00;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  border: none;
  margin-bottom: 100px; 
  transition: 0.25s all; 
}

.moments-btn:hover {
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7)
  }


  @media (max-width: 1200px) {
  .photo {
  margin: 4px;
  
}
  .photo img {
    width: 98%;
  }
  .row {
    justify-content: center;
  }
}


@media (max-width: 760px) {
 h2 {
  font-size: 26px;
  margin: 30px 0;
 }
 .photo img {
    width: 100%;
  } 
  
}

@media (max-width: 360px) { 
  h2 {
  font-size: 24px;
  
 }
 .moments-page {
  margin-top: 20px;
 
}

.back{

  margin-left: 0;
  
  

}
 }
</style>
