<template>
  <div class="calendar-page">
    <h2 class="calendar-text"><span>Календарь</span> событий</h2>
    <div class="calendar" :data-target="target">
      <div class="calendar-wrapper">
        <div :id="target" class="calendar-slice">
          <div v-for="(date, index) in fullCalendar" :key="index" class="calendar-item">
            <h2 @click="clickDate(date)" :class="{ selected: selectedDate === date }">{{ date.day }}</h2>
            <p @click="clickDate(date)" :class="{ selected: selectedDate === date }">{{ date.name }}</p>
          </div>
        </div>
        <div class="calendar-controls">
          <div class="calendar-pagination prev" data-direction="back" @click="scroll('back')">
            <img src="@/assets/img/section-img/button (1).svg" alt="Назад" class="prev-img">
          </div>
          <div class="calendar-pagination next" data-direction="next" @click="scroll('next')">
            <img src="@/assets/img/section-img/button.svg" alt="Вперёд" class="next-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      itemsWidth: 0,
      currentPage: 0,
      isScrolling: false,
      selectedDate: null
    };
  },
  props: {
    target: {
      type: String,
      default: 'popularSlice'
    },
    fullCalendar: {
      type: Array,
      default: []
    }
  },
  mounted() {
    this.initializeCarousel();
  },
  methods: {
    clickDate(date) {
      this.selectedDate = date;
      const dateObj = {
        id: date.id,
        day: date.day,
        month: date.name
      };
      this.$emit('date-selected', dateObj);
    },
    initializeCarousel() {
      const slice = this.$el.querySelector(`#${this.target}`);
      const items = slice.querySelectorAll('.calendar-item');
      this.itemsWidth = slice.offsetWidth / 14;

      items.forEach(item => {
        item.style.width = `${this.itemsWidth}px`;
      });
    },
    scroll(direction) {
      if (this.isScrolling) return;

      const slice = this.$el.querySelector(`#${this.target}`);
      const totalSlides = slice.querySelectorAll('.calendar-item').length;

      if (direction === 'next' && this.currentPage < totalSlides - 14) {
        slice.scrollLeft += this.itemsWidth;
        this.currentPage++;
      } else if (direction === 'back' && this.currentPage > 0) {
        slice.scrollLeft -= this.itemsWidth;
        this.currentPage--;
      }

      this.isScrolling = true;

      setTimeout(() => {
        this.isScrolling = false;
      }, 100);
    }
  }
};
</script>

<style scoped>
.calendar-page {
  margin-top: 150px;
  font-family: "Montserrat", sans-serif;
  
}

.calendar-text {
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
}

.calendar-text span {
  background: linear-gradient(to right, rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
  background-clip: text;
  color: transparent;
}

.calendar-wrapper {
  position: relative;
  
}

.calendar-slice {
  display: flex;
  transition: transform 0.5s ease;
  overflow-x: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
}

.calendar-item {
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.calendar-item h2,
.calendar-item p {
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.calendar-item h2 {
  font-size: 32px;
  font-weight: 400;
}

.calendar-item p {
  font-size: 14px;
}

.calendar-item .selected {
  background: linear-gradient(to right,rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
  background-clip: text;
  color: transparent;
}

.calendar-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.calendar-pagination {
  padding: 5px;
  cursor: pointer;
  background-color: #f0f0f0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.calendar-pagination img {
  width: 35px;
  height: 35px;
  vertical-align: middle;
}

.prev {
  left: -50px;
  background: white;
}


.next {
  right: -50px;
  background: white;
}

.calendar-pagination.active {
  background-color: #ccc;
}
@media (max-width: 1200px) {
  .calendar-slice {
    width: 90%;
    margin: 0 auto; /* Чтобы календарь был по центру */
  }
  .prev {
  left: -16px;
  
}

.next {
  right: -16px;
  
}
}

@media (max-width: 760px) {
  .calendar-page {
    margin-top: 100px;
  }
  .calendar-slice {
    width: 90%;
    margin: 0 auto; /* Чтобы календарь был по центру */
  }
  .prev {
  left: -10px;
  
}

.next {
  right: -10px;
  
}
.calendar-item h2 {
  font-size: 30px;
  
}
.calendar-text {
  
  font-size: 28px;
  margin-bottom: 30px;
}
}

@media (max-width: 480px) {
  .calendar-page {
    margin-top: 70px;
  }
  .calendar-slice {
    width: 100%;
    margin: 0 auto; /* Чтобы календарь был по центру */
  }
  .prev {
  left: -20px;
  
}

.next {
  right: -20px;  
}


.next img, .prev img {
  width: 20px;  
}
.calendar-item h2 {
  font-size: 26px;
  
}
.calendar-text {
  
  font-size: 28px;
  margin-bottom: 20px;
}
.calendar-item p {
  font-size: 12px;
}
.calendar-pagination {
  padding: 2px;
}

}

@media (max-width: 360px) {
  .calendar-page {
    margin-top: 50px;
  }
  .calendar-item h2 {
  font-size: 26px;
  
}
.calendar-text {  
  font-size: 24px;
  margin-bottom: 20px;
}

}
</style>
