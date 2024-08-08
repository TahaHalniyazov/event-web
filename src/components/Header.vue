<template>
    <div class="bg">
        <Navbar/>
        <div class="header">
            <div class="headerItem-1">
                <h1>Игры в твоём городе</h1>
                <p> Начнём?</p>
                <button>Забронировать участие</button>
        </div>
        <div class="headerItem-2">
            <img src="../assets/img/header-img/first-cube.svg" alt="" class="first-cube">
            <img src="../assets/img/header-img/second-cube.svg" alt="" class="second-cube">
            <img src="../assets/img/header-img/third-cube.svg" alt="" class="third-cube">
            <img src="../assets/img/header-img/fourth-cube.svg" alt="" class="fourth-cube">
        
        </div>
    </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
    export default {
    name: 'Header',
    props: {
        msg: String
    },
    components: {
    Navbar
    } 
    }
    
</script>

<style>

.bg{
    background: url("../assets/img/header-img/bg-img.jpg") center center/cover no-repeat;
    width: 100%;
    height: 100%;
}
.header {
position: relative; 
margin: 0 auto;
display: flex;
justify-content: space-around;
align-items: center;
padding-bottom: 104px;
}

.headerItem-1 {
margin-top: 150px;
margin-left: -200px;


}

.headerItem-1 h1{
    font-size: 50px;
    color: white;
}
.headerItem-1 p {
    font-family: "Press Start 2P", system-ui;
    color: white;
    font-size: 50px;
    margin-top: 20px;
    margin-left: 6px;
}

.headerItem-1 button {
    background: rgba(189, 255, 0, 1);
    border: none;
    padding: 10px 40px;
    border-radius: 30px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin-top: 80px;
    cursor: pointer;
    transition: all 0.25s;
}

.headerItem-1 button:hover {
    background: white;
}

.first-cube{
    position: absolute;
    top: -46px;
    left: 60%;
}
.second-cube{
    position: absolute;
    top: -20px;
    left: 52%;  
}

.third-cube{
    position: absolute;
    top: 20px;
    left: 48%;
}
.fourth-cube{
    position: absolute;
    top: 52%;
    left: 55%;
}

@media (max-width: 1200px) {
.header {
    padding-bottom: 220px;
}
.headerItem-1 {
    margin-left: -180px;
}
.first-cube{    
    top: 60px;
    left: 70%;
}
.second-cube {
    top: 136px;
    left: 58%;  
}
.third-cube {
    top: 180px;
    left: 51%;
}
.fourth-cube {
    top: 61%;
    left: 65%;
}
}

@media (max-width: 990px) {
.header {
    padding-bottom: 160px;
}
.headerItem-1 {
margin-top: 150px;
margin-left: -140px;
}
.headerItem-1 h1{
    font-size: 44px;
    
}
.headerItem-1 p {  
    font-size: 44px;
    
}
.fourth-cube {
    top: 56%;
    left: 65%;
}


@media (max-width: 760px) {
.header {
    padding-bottom: 110px;
}
.headerItem-1 {
margin-top: 150px;
margin-left: -90px;
}
.headerItem-1 h1{
    font-size: 38px;
    
}
.headerItem-1 p {  
    font-size: 38px;
    
}
.fourth-cube {
    top: 59%;
    left: 65%;
    width: 300px;
}
.first-cube {
    width: 200px;
}
.second-cube {
    width: 140px;
}
.third-cube {
    width: 300px;
}
}


 @media (max-width: 480px) {
.header {
    padding-bottom: 178px;
}
.headerItem-1 {
margin-top: 150px;
margin-left: -46px;
}
.headerItem-1 h1{
    font-size: 26px;
    
}
.headerItem-1 p {  
    font-size: 26px;
    margin-left: 2px;
    
}
.fourth-cube {
    top: 72%;
    left: 65%;
    width: 200px;
}
.first-cube {
    width: 130px;
    top: 180px;
    left: 76%;
}
.second-cube {
    width: 80px;
    top: 200px;
    left: 62%; 
}
.third-cube {
    width: 200px;
    top: 220px;
    left: 52%;
}
.headerItem-1 button {
    padding: 10px 20px;
    margin-top: 30px;
   
}
}


@media (max-width: 360px) {
.header {
    padding-bottom: 238px;
}
.headerItem-1 {
margin-top: 80px;
margin-left: -10px;
}
.headerItem-1 h1{
    font-size: 24px;
    
}
.headerItem-1 p {  
    font-size: 24px;
    margin-left: 2px;
    
}
.fourth-cube {
    top: 72%;
    left: 55%;
    width: 190px;
}
.first-cube {
    width: 120px;
    top: 140px;
    left: 60%;
    z-index: 1;
}
.second-cube {
    width: 70px;
    top: 120px;
    left: 62%; 
    z-index: 0;
}
.third-cube {
    width: 190px;
    top: 210px;
    left: 30%;
    z-index: 0;
}
.headerItem-1 button {
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 14px;
    z-index: 999;
   
}
}
}
</style>
