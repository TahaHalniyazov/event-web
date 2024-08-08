<template>
    <div>
        <div class="footer">
            <div class="footerItem-1">                
                <p>E-vent</p>
                <a href="">Политика конфиденциальности</a>
                <a href="">Пользовательское соглашение</a>                
            </div>
            <div class="footerItem-2">
                <a href="" class="website">event.afisha@ya.ru</a>
                <div class="footerItem-2-img">
                    <a href=""><img src="../assets/img/footer-img/VK.svg" alt="VK" class="vk"></a>
                    <a href=""><img src="../assets/img/footer-img/TL.svg" alt="Telegram" class="telegram"></a>                  
                </div>           
            </div>
            <div class="footerItem-3">
                <a href="tel:+7 978 987 65 43">+7 978 987 65 43</a>                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Footer',
    props: {
        msg: String
    }
    }
</script>

<style scoped>
.footer {
    font-family: "Montserrat", sans-serif;
    margin-top: auto;
    display: flex;
    justify-content: space-around;    
    padding: 30px;
    background: linear-gradient(to right, rgba(252, 214, 116, 1), rgba(254, 83, 60, 1), rgba(254, 83, 60, 1), rgba(252, 92, 94, 1), rgba(244, 121, 208, 1), rgba(228, 182, 252, 1));
}
.footerItem-1{
    display: flex;
    flex-direction: column;
}
.footerItem-1 p {
    font-size: 24px;
    color: white;
    margin-bottom: 14px;
}
.footerItem-1 a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    margin-top: 4px;
    font-weight: 300;
} 


.footerItem-2{
    display: flex;
    flex-direction: column;
    
}

.footerItem-2-img{
    display: flex;
    justify-content: space-around;
    
    
    
}

.website{
    margin-bottom: 20px;
}
.footerItem-2 a{
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    color: white;
    
        
}
.footerItem-3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
}
.footerItem-3 a {
    text-decoration: none;
    color: white;
    font-size: 24px;
    
}
.footerItem-3 a:first-child{
    margin-bottom: 30px;
}


@media (max-width: 990px) {
.footerItem-2{
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex: 40%;
    margin-top: 16px;
    
}
.footerItem-2-img {
    
    flex: 60%;
}
.website{
    flex: 60%;
    margin-bottom: 10px;
}
.footer {
    justify-content: space-between;
    padding: 20px;
}
.footerItem-1 {
    flex: 20%;
}
.footerItem-3 {
    flex: 20%;
    align-items: center;
    flex-direction: row;
    
}
.footerItem-3 a:first-child{
    margin-bottom: 0;
    
}

.footerItem-1 p {
    margin-bottom: 4px;
}
.footerItem-1 a {
    margin-top: 2px;
}
}


@media (max-width: 760px) {
    .footerItem-1 p {
    font-size: 20px;
}
.footerItem-1 a {
    font-size: 10px;
}
.footerItem-2 a {
    font-size: 20px;
}
.vk, .telegram {
    width: 36px;
    height: 36px;
}
.footerItem-3 a {
    font-size: 20px;
    margin-top: 6px;
}
.footerItem-2 {
    margin-top: 18px;
}
}

@media (max-width: 480px) {
    .footer {
        flex-direction: column;
        padding: 10px;
        
    }
    .footerItem-2 {
        order: 1;
        flex: 100%;
        flex-direction: column;        
        align-items: center;
        margin-top: 0;
    }
    .footerItem-3 {
        order: 2;
        flex: 100%;        
    }
    .footerItem-1 {
        order: 3;
        flex: 100%;        
        justify-content: center;
        align-items: center;
        
    }
    .footerItem-2-img, .website, .footerItem-3 a {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .vk, .telegram {
        width: 36px;
        height: 36px;
    }
    .footerItem-2-img {
        justify-content: space-between;
    }
    .vk {
        margin-right: 40px;
    }
}
</style>