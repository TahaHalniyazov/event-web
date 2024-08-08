<template>
<div>
    <div class="container">
        <nav class="navBar">
            <div class="navItem-1">
                E-vent
            </div>
            <div class="navItem-2">
                <a href="" class="navItem-2-link">Карта событий</a>
                <router-link to="/moments" class="navItem-2-link">Моменты</router-link>
                <a href="tel:+7 978 987 65 43" class="navItem-2-phone">+7 978 987 65 43</a>
                <img src="../assets/img/header-img/search.svg" alt="">
                <img src="../assets/img/header-img/message-circle.svg" alt="">
                <router-link to="/login" class="navItem-2-link-login"><img src="../assets/img/header-img/user-circle-2.svg" alt=""></router-link>
            </div>
            <div class="burger-menu" :class="{ open: isMenuOpen }" @click="toggleMenu">
                <a href="tel:+7 978 987 65 43" class="navItem-2-phone burger-phone">+7 978 987 65 43</a>
                <div class="bar"></div>
            </div>
        </nav>
    </div>
    <div class="burger-dropdown" :class="{ open: isMenuOpen }">
        <a href="" class="navItem-2-link">Карта событий</a>
        <router-link to="/moments" class="navItem-2-link">Моменты</router-link>
        <img src="../assets/img/header-img/search.svg" alt="">
        <img src="../assets/img/header-img/message-circle.svg" alt="">
        <router-link to="/login" class="navItem-2-link-login"><img src="../assets/img/header-img/user-circle-2.svg" alt=""></router-link>
    </div>
</div>
</template>

<script>
export default {
name: 'Navbar',
data() {
    return {
    isMenuOpen: false
    };
},
methods: {
    toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    }
}
};
</script>

<style scoped>
.container {
margin: 0 auto;
max-width: 100%; 
background: linear-gradient(to right, rgba(252, 214, 116, 1), rgba(254, 83, 60, 1), rgba(254, 83, 60, 1), rgba(252, 92, 94, 1), rgba(244, 121, 208, 1), rgba(228, 182, 252, 1));
display: flex; 
justify-content: space-between; 
align-items: center;
padding: 30px 20px; 
}
.navBar {
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
font-family: "Montserrat", sans-serif;      
}
.navItem-1 {
padding-left: 130px;
color: white;
font-size: 24px;
}
.navItem-2 {
display: flex;
align-items: center;
padding-right: 180px;
}
.navItem-2 img {
padding-right: 30px;
}
.navItem-2-link {
text-decoration: none;
color: white;
font-size: 16px;
padding-right: 30px;
}
.navItem-2-link-login {
text-decoration: none;
margin-top: 8px;
}
.navItem-2-phone {
text-decoration: none;
color: white;
font-size: 16px;
padding-right: 30px;
}

.burger-menu .bar,
.burger-menu::before,
.burger-menu::after {
content: '';
display: block;
width: 100%;
height: 3px;
background: white;
position: absolute;
transition: all 0.3s ease-in-out;
}
.burger-menu::before {
top: 10px;
}
.burger-menu::after {
bottom: 6px;
}
.burger-menu.open .bar {
    top: 12px;
transform: rotate(45deg);

}
.burger-menu.open::before {
display: none;
transform: rotate(120deg);
}
.burger-menu.open::after {
    top: 12px;
    transform: rotate(135deg);
}
.burger-dropdown {
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
background-color: rgba(0, 0, 0, 0.8);
position: absolute;
top: 94px;
left: 0;
width: 100%;
transition: transform 0.3s ease-in-out; /* Добавляем плавность */
transform: translateX(-100%); 
z-index: 1;
}
.burger-dropdown.open {

transform: translateX(0);
}
.burger-dropdown .navItem-2-link,
.burger-dropdown .navItem-2-link-login,
.burger-dropdown img {
margin: 10px 0;

}

.burger-phone {
    display: none;
    padding-right: 10px;
    color: white;
    text-decoration: none;
    margin-right: 10px;
}


.burger-menu {
    display: none;
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: relative;
    margin-top: 6px;   
}



@media (max-width: 1200px) {
.navItem-1 {
    padding-left: 30px;
    font-size: 22px;
}
.navItem-2 {
    padding-right: 30px;
}
.navItem-2-link {
    padding-right: 20px;
}
.navItem-2-phone {
    padding-right: 16px;
}
}
@media (max-width: 990px) {
.navItem-2-link {
    padding-right: 14px;
}
.navItem-2 {
    padding-right: 10px;
}
}
@media (max-width: 760px) {
    .navItem-1 {
    padding-left: 10px;    
    font-size: 20px;
}

.navItem-2 {
    padding-right: 4px;
}

.navItem-2-link {
    font-size: 15px;
    padding-right: 8px;
    
}



}

@media (max-width: 480px) { 
    .burger-menu {
    display: block;
    align-items: center;
}
.navItem-2 {
    display: none;
}

 }
</style>
