<template>
  <div class="filter-buttons-container">
  
    <div class="filter-button" v-for="(filter, index) in filters" :key="index">
      <button @click="toggleFilterDropdown(index)" :class="{ 'active': filter.isDropdownVisible }">
        <span>{{ selectedFilterText(filter) }}</span>
        <span class="arrow-down">&#9660;</span>
      </button>
      
    
      <transition name="fade">
        <div v-if="filter.isDropdownVisible" class="filter-dropdown">
          <div v-for="(option, optionIndex) in filter.options" :key="optionIndex" class="filter-option" @click="applyFilter(filter.name, option)">{{ option }}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFilters: {}, // объект для хранения выбранных опций фильтров
      filters: [
        { name: 'Город', isDropdownVisible: false, options: ['Option 1', 'Option 2', 'Option 3'] },
        { name: 'Вид события', isDropdownVisible: false, options: ['Мафия', 'Монополия', 'Кешфлоу'] },
        { name: 'Время', isDropdownVisible: false, options: ['Сегодня', 'Завтра', 'В ближайшие дни'] },
      ],
    };
  },
  methods: {
    toggleFilterDropdown(index) {

      this.filters.forEach((filter, i) => {
        if (i !== index) {
          filter.isDropdownVisible = false;
        }
      });
      
    
      this.filters[index].isDropdownVisible = !this.filters[index].isDropdownVisible;
    },
    applyFilter(filterName, option) {
      console.log("Применен фильтр:", filterName, "с опцией:", option);
  
      this.selectedFilters[filterName] = option;
    
      const index = this.filters.findIndex(filter => filter.name === filterName);
      if (index !== -1) {
        this.filters[index].isDropdownVisible = false;
      }
    
    },
    selectedFilterText(filter) {
      if (this.selectedFilters[filter.name]) {
        return this.selectedFilters[filter.name];
      } else {
        return filter.name;
      }
    },
  },
};
</script>

<style>
.filter-buttons-container {
  display: flex;
  margin-left: 10px;
  
}

.filter-button {
  margin-right: 10px;
}

.filter-button button {
  background-color: #FF006B;
  border: none;
  color: white;
  cursor: pointer;
  padding: 6px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  border-radius: 20px;
  transition: background-color 0.3s ease; /* анимация */
}

.filter-button button:hover {
  background-color: #FF0056;
}

.filter-button button.active {
  background-color: #FF0040;
}

.filter-button .arrow-down {
  margin-left: 40px;
  color: black;
  font-size: 16px;

}

.filter-dropdown {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  border-radius: 5px;
  
}

.filter-option {
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.filter-option:hover {
  background-color: #f1f1f1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 1200px) { 
  .filter-buttons-container {  
  margin-left: 10px;
  }
}

@media (max-width: 990px) { 
  .filter-buttons-container {  
  margin-left: 10px;
  justify-content: space-around;
  }
}

@media (max-width: 480px) { 
  .filter-buttons-container {  
  margin-left: 0;
  flex-direction: column;
  }
  .filter-button button {
  width: 100%;
  text-align: left;
  justify-content: space-between;
  display: flex;
  
}
}

</style>
