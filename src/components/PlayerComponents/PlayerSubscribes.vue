<template>
    <div class="subscribe-pages">
        <h2><span>Мои</span> подписки</h2>
        <div class="subscriber-info">            
            <div class="subscriber-details">
                <img src="@/assets/img/section-img/user-circle-2.png" alt="" width="90px" height="90px">
                <div class="subscriber-details-flex">
                <p>Имя Фамилия</p>
                <StarRating class="star"/>
                </div>
                <!-- Добавьте здесь динамическое отображение имени и фамилии подписчика -->
            </div>
            <button class="unsubscribe-button">Отписаться от рассылки</button>
        </div>
        
    </div>
  </template>
  

<script>
import StarRating from '@/components/StarRating.vue';
    export default {
        components: {
        StarRating
    },
        
    }
</script>

<style scoped>

.subscribe-pages {
    margin-top: 150px;
}   
h2 {
    font-size: 32px;
    text-align: center;
}
h2 span {
    background: linear-gradient(to right,rgba(254, 83, 60, 1), rgba(255, 0, 107, 1), rgba(119, 64, 220, 1));
    background-clip: text;
    color: transparent;
}
.subscriber-info {
    display: flex;
    justify-content: space-between;
    max-width: 58%;
    align-items: center;
    margin-top: 100px;
}
.subscriber-details {
    display: flex;
    align-items: center;
        
}
.subscriber-details p {
    font-size: 16px;
    font-weight: 500;
    margin-left: 20px;
}
.star {
    margin-left: 18px;
    margin-top: 6px;
}

.unsubscribe-button {
    height: auto;
    padding: 10px 30px;
    font-family: "Montserrat", sans-serif;
    background: #FF006B;
    border: none;
    color: white;
    border-radius: 30px;
    cursor: pointer;
}

@media (max-width: 1200px) { 
  .subscriber-info {

    max-width: 59.5%;    
    margin-top: 70px;
}
}

@media (max-width: 990px) {
  .subscriber-info {
    max-width: 100%;    
    margin-top: 60px;
  }
}

@media (max-width: 760px) {
h2 {
    font-size: 26px;
    text-align: center;
}
.subscribe-pages {
    margin-top: 80px;
} 
}

@media (max-width: 480px) {
  .subscriber-info {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 40px;
  }
  .unsubscribe-button {
    margin-left: 110px;
    margin-top: -14px;
    height: auto;
    padding: 0;    
    background: white;
    border-bottom: 1px solid rgba(140, 140, 140, 1) ;
    color: rgba(140, 140, 140, 1);
    border-radius: 0;
    
  } 
  .support-button {
    width: 100%;
  }
}
</style>




<!-- <template>
    <div class="subscribe-pages">
      <h2><span>Мои</span> подписки</h2>
      <div class="subscriber-info" v-if="subscriber">
        <img :src="subscriber.photo" :alt="subscriber.name">
        <div class="subscriber-details">
          <p>{{ subscriber.name }} {{ subscriber.surname }}</p>
        </div>
      </div>
      <button class="unsubscribe-button">Отписаться от рассылки</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        subscriber: null // Данные о подписчике будут получены с сервера
      };
    },
    // Здесь нужно будет добавить логику получения данных о подписчике с сервера
    // Можете использовать, например, метод created() для этой цели
    // Примерно так:
    created() {
      this.fetchSubscriberData(); // Вызов метода для получения данных о подписчике с сервера
    },
    methods: {
      fetchSubscriberData() {
        // Логика для запроса данных о подписчике с сервера
        // Примерно так:
        // axios.get('/api/subscriber')
        //   .then(response => {
        //     this.subscriber = response.data;
        //   })
        //   .catch(error => {
        //     console.error('Ошибка при получении данных о подписчике:', error);
        //   });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ваши стили для компонента */
  </style>
   -->