<template>
<div class="role-selection-button">
    <button @click="toggleRoleDropdown" :class="{ 'active': isRoleDropdownVisible }">
        {{ selectedRole }}
    <span class="arrow-down">&#9660;</span>
    </button>
    <transition name="fade">
    <div v-if="isRoleDropdownVisible" class="role-dropdown">
        <div v-for="role in roles" :key="role" class="role-option" @click="selectRole(role)">
        {{ role }}
        </div>
    </div>
    </transition>
</div>
</template>


<script>
export default {
data() {
    return {
    selectedRole: 'Выберите роль',
    roles: ['Участник', 'Организатор'],
    isRoleDropdownVisible: false,
    };
},
methods: {
    toggleRoleDropdown() {
    this.isRoleDropdownVisible = !this.isRoleDropdownVisible;
    },
    selectRole(role) {
    this.selectedRole = role;
    this.isRoleDropdownVisible = false;
    },
},
};
</script>



<style scoped>
.role-selection-button button {
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
}

.role-selection-button button:hover {
background-color: #FF0056;
}

.role-selection-button button.active {
background-color: #FF0040;
}

.role-selection-button .arrow-down {
margin-left: 40px;
color: black;
font-size: 16px;
}

.role-dropdown {
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
padding: 12px 0;
z-index: 100;
border-radius: 5px;
}

.role-option {
padding: 10px 20px;
cursor: pointer;
transition: background-color 0.3s;
}

.role-option:hover {
background-color: #f1f1f1;
}

.fade-enter-active, .fade-leave-active {
transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
opacity: 0;
}
</style>

