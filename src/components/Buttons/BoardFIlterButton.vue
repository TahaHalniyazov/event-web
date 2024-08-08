<template>
    <div class="time-filter-button">
        <button @click="toggleDropdown" :class="{ 'active': isDropdownVisible }">
            {{ selectedOption }}
            <span class="arrow-down">&#9660;</span>
        </button>
        <transition name="fade">
            <div v-if="isDropdownVisible" class="filter-dropdown">
            <div v-for="option in options" :key="option" class="filter-option" @click="selectOption(option)">
                {{ option }}
            </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
    return {
        selectedOption: 'Выберите время',
        options: ['Ближайшие', 'Через неделю', 'Через месяц'],
        isDropdownVisible: false,
    };
    },
    methods: {
    toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
    },
    selectOption(option) {
        this.selectedOption = option;
        this.isDropdownVisible = false;
    },
    },
};
</script>

<style scoped>
.time-filter-button button {
    background-color: #FF006B;
    border: none;
    color: white;
    cursor: pointer;
    padding: 6px 20px;
    border-radius: 20px;
    transition: background-color 0.3s;
    position: relative;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    z-index: 0;
}

.time-filter-button button:hover {
    background-color: #FF0056;
}

.time-filter-button button.active {
    background-color: #FF0040;
}

.time-filter-button .arrow-down {
    margin-left: 40px;
    color: black;
    font-size: 16px;
}

.filter-dropdown {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 0;
    
    border-radius: 5px;
}

.filter-option {
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
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

@media (max-width: 480px) {
.time-filter-button button {
  width: 100%;
  text-align: left;
  justify-content: space-between;
  display: flex;
  
}
}
</style>
