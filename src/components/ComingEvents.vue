<template>
    <section class="coming-events">
        <h2 class="coming-events-item-1"><span>Ближайшие</span><br class="responsive-br"> мероприятия</h2>
        <div class="flex coming-events-item-2" ref="slider" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
            <div class="slider-wrapper" ref="wrapper">
                <div v-for="(event, index) in events" :key="index" class="slider-slide" :style="{ width: slideWidth + 'px' }">
                    <div class="event-card">
                        <div class="event-card-text">
                            <h3>{{ event.title }}</h3>
                            <p>{{ event.date }}</p>
                            <p>{{ event.location }}</p>
                            <BookingButton />
                            
                        </div>
                        <div class="event-card-img">
                            <img src="@/assets/img/section-img/user-circle-2.png" width="40px" height="40px">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-button-next" @click="scroll('next')">
            <img src="@/assets/img/section-img/button.svg" alt="Next">
        </div>
    </section>
</template>

<script>
import BookingButton from '@/components/Buttons/BookingButton.vue';


export default {
    components: {
        BookingButton
    },
    data() {
        return {
            events: [
                { title: 'Мероприятие 1', date: '10 июня 2024', location: 'Место проведения 1' },
                { title: 'Мероприятие 2', date: '15 июня 2024', location: 'Место проведения 2' },
                { title: 'Мероприятие 3', date: '20 июня 2024', location: 'Место проведения 3' },
                { title: 'Мероприятие 4', date: '25 июня 2024', location: 'Место проведения 4' },
                { title: 'Мероприятие 5', date: '20 июня 2024', location: 'Место проведения 5' },
                { title: 'Мероприятие 6', date: '25 июня 2024', location: 'Место проведения 6' },
                // Добавьте другие мероприятия по аналогии
            ],
            currentSlide: 0,
            totalSlides: 0,
            slideWidth: 0,
            visibleSlides: 3,
            slideMargin: 16, // отступ между карточками
            startX: 0,
            endX: 0,
            isDragging: false,
            extraMargin: 0
        };
    },
    mounted() {
        this.totalSlides = this.events.length;
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
    if (window.innerWidth <= 360) {
        this.visibleSlides = 1;
        this.extraMargin = 40; // задаем значение для частично видимых слайдов
    } else if (window.innerWidth <= 480) {
        this.visibleSlides = 1;
        this.extraMargin = 40; // задаем значение для частично видимых слайдов
    } else if (window.innerWidth <= 760) {
        this.visibleSlides = 2;
        this.extraMargin = 0;
    } else if (window.innerWidth <= 990) {
        this.visibleSlides = 3;
        this.extraMargin = 0;
    } else {
        this.visibleSlides = 3;
        this.extraMargin = 0;
    }
    this.slideWidth = (sliderWidth - this.extraMargin - (this.slideMargin * (this.visibleSlides - 1))) / this.visibleSlides;
},
        updateSliderPosition() {
            this.$refs.wrapper.style.transform = `translateX(-${this.currentSlide * (this.slideWidth + this.slideMargin)}px)`;
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
            } else if (deltaX < -50 && this.currentSlide < this.totalSlides - this.visibleSlides) {
                this.currentSlide++;
            }
            this.updateSliderPosition();
        }
    }
};
</script>

<style scoped>
.coming-events {
    margin-top: 50px;
    display: flex;
    align-items: center;
    padding: 10px;
}

.coming-events-item-1,
.events-map-title {
    font-size: 32px;
}

.coming-events-item-1 span,
.events-map-title span {
    background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
    background-clip: text;
    color: transparent;
}

.coming-events-item-2 {
    width: calc(100% - 40px); 
    overflow: hidden;
    position: relative;
    display: flex;
}

.flex {
    display: flex;
    align-items: center;
}

.slider-wrapper {
    display: flex;
    transition: transform 0.5s ease;
}

.slider-slide {
    padding: 16px;
    border-radius: 10px;
    height: auto;
    flex: 0 0 auto;
    margin-right: 16px; /* Отступ между карточками */
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

.event-card {
    background: #7740dc;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    border-radius: 20px;
}

.event-card h3,
.event-card p {
    color: white;
    margin-bottom: 10px;
}


@media (max-width: 990px) {
  .coming-events {
    margin-bottom: 60px;
    flex-direction: column; /* изменяем направление flex-контейнера на вертикальное и меняем порядок элементов */
    align-items: center; /* выравниваем элементы по левому краю */
  }
  .responsive-br{
    display: none;
  }
  .coming-events-item-1 {
    margin-bottom: 30px;
  }.slider-button-next {
   display: none
}



}

@media (max-width: 480px) { 
    .coming-events-item-1,
    .events-map-title {
        font-size: 26px;
        text-align: center;
}
    .coming-events-item-2 {
        width: calc(100% - 40px); /* уменьшаем ширину для видимости соседних слайдов */
        margin: 0 20px; /* добавляем отступ для видимости соседних слайдов */
  }
  .slider-slide {
    padding: 8px;
  }
  .coming-events {
 
    padding: 4px;
}
}

@media (max-width: 360px) {
  .coming-events-item-2 {
    width: calc(100% - 40px); /* уменьшаем ширину для видимости соседних слайдов */
    margin: 0 20px; /* добавляем отступ для видимости соседних слайдов */
  }
}
</style>
