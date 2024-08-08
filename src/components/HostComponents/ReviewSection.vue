<template>
  <div class="reviews-container">
    <h3>Отзывы:</h3>
    <div class="flex reviews-slider" ref="slider" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
      <div class="slider-wrapper" ref="wrapper">
        <div v-for="(review, index) in reviews" :key="index" class="slider-slide" :style="{ width: slideWidth + 'px' }">
          <div class="review">
            <div class="review-header">
              <h4>{{ review.name }}</h4>
              <star-rating :initialRating="review.rating" :totalStars="5"></star-rating>
            </div>
            <p>{{ review.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-button-next" @click="scroll('next')">
      <img src="@/assets/img/section-img/button.svg" alt="Next">
    </div>
  </div>
</template>


<script>
import StarRating from '@/components/StarRating.vue';

export default {
  components: {
    StarRating
  },
  data() {
    return {
      reviews: [
        { name: 'Иван Иванов', rating: 4, text: 'Отличный ведущий, всем рекомендую! Очень интересное и занимательное мероприятие! Очень интересное и занимательное мероприятие!' },
        { name: 'Петр Петров', rating: 5, text: 'Очень интересное и занимательное мероприятие!' },
        { name: 'Анна Сидорова', rating: 3, text: 'Мне понравилось, но было несколько замечаний.' },
        { name: 'Алексей Козлов', rating: 5, text: 'Прекрасное мероприятие! Большое спасибо!' },
        { name: 'Мария Васильева', rating: 4, text: 'Хорошо провели время, все понравилось.' },
        { name: 'Дмитрий Николаев', rating: 5, text: 'Отличная атмосфера и веселые игры!' },
      ],
      currentSlide: 0,
      totalSlides: 0,
      slideWidth: 0,
      visibleSlides: 3,
      slideMargin: 16, // добавлен отступ между слайдами
      startX: 0,
      endX: 0,
      isDragging: false,
    };
  },
  mounted() {
    this.totalSlides = this.reviews.length;
    this.calculateSlideWidth();
    window.addEventListener('resize', this.calculateSlideWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateSlideWidth);
  },
  methods: {
    scroll(direction) {
      if (direction === 'next') {
        if (this.currentSlide === this.totalSlides - this.visibleSlides) {
          this.currentSlide = 0;
        } else {
          this.currentSlide++;
        }
      }
      this.updateSliderPosition();
    },
    calculateSlideWidth() {
      const sliderWidth = this.$refs.slider.offsetWidth;
      if (window.innerWidth <= 480) {
        this.visibleSlides = 1;
      } else if (window.innerWidth <= 760) {
        this.visibleSlides = 2;
      } else {
        this.visibleSlides = 3;
      }
      this.slideWidth = (sliderWidth - (this.slideMargin * (this.visibleSlides - 1))) / this.visibleSlides;
    },
    updateSliderPosition() {
      const maxTranslateX = (this.totalSlides - this.visibleSlides) * (this.slideWidth + this.slideMargin);
      let translateX = -this.currentSlide * (this.slideWidth + this.slideMargin);
      translateX = Math.max(Math.min(translateX, 0), -maxTranslateX);
      this.$refs.wrapper.style.transform = `translateX(${translateX}px)`;
    },
    onTouchStart(event) {
      this.startX = event.touches[0].clientX;
      this.isDragging = true;
    },
    onTouchMove(event) {
      if (this.isDragging) {
        this.endX = event.touches[0].clientX;
        const deltaX = this.endX - this.startX;
        this.$refs.wrapper.style.transform = `translateX(calc(-${this.currentSlide * (this.slideWidth + this.slideMargin)}px + ${deltaX}px))`;
      }
    },
    onTouchEnd() {
      this.isDragging = false;
      const deltaX = this.endX - this.startX;
      if (deltaX > 50 && this.currentSlide > 0) {
        this.currentSlide--;
      } else if (deltaX < -50) {
        if (this.currentSlide === this.totalSlides - this.visibleSlides) {
          this.currentSlide = 0;
        } else if (this.currentSlide < this.totalSlides - this.visibleSlides) {
          this.currentSlide++;
        }
      }
      this.updateSliderPosition();
    }
  }
};
</script>

<style scoped>
.reviews-container {
  margin-top: 100px;
  display: flex;
  align-items: center;
  
}

.flex {
  display: flex;
  align-items: center;
}

h3 {
  background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
  background-clip: text;
  color: transparent;
  font-size: 32px;
  margin-right: 50px;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.review p {
  color: white;
  font-size: 16px;
  margin-top: 30px;
}

.reviews-slider {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
}

.slider-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}

.slider-slide {
  background: #7740dc;
  padding: 16px;
  border-radius: 10px;
  height: auto;
  flex: 0 0 auto;
  margin-right: 16px; /* Добавлен отступ */
}

.slider-button-next {
  cursor: pointer;
  user-select: none;
  margin-top: 40px;
  margin-left: 20px;  
  transform: translateY(-50%);  
  z-index: 10;
}

.slider-button-next img {
  width: 35px;
  height: 35px;
}




@media (max-width: 990px) {
  .reviews-container {
    
    flex-direction: column; /* изменяем направление flex-контейнера на вертикальное и меняем порядок элементов */
    align-items: center; /* выравниваем элементы по левому краю */
  }

  h3 {
    margin-right: 0; /* убираем отступ справа */
    margin-bottom: 20px; /* добавляем отступ снизу */
    
  }

  .reviews-slider {
    width: 100%;
    margin-top: 20px; /* добавляем отступ сверху */
  }

  .slider-button-next {
  display: none;
  
  }
  .slider-slide {  
  padding: 12px;
  border-radius: 10px;
 
}
}

@media (max-width: 760px) {


.slider-slide {  
  padding: 8px;
  border-radius: 10px; 
}
.review-header {
  flex-direction: column;
 
}
.review-header h4 {
 margin-bottom: 10px; 
}
.review p {
  margin-top: 10px;
}
}



@media (max-width: 480px) {
  .review-header {
  flex-direction: row;
 }
 .review-header h4 {
  margin-bottom: 0;
 }
.slider-slide {  
  padding: 16px;
   
}


}
@media (max-width: 360px) {

} 

</style>