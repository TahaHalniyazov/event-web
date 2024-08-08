<template>
    <div class="star-rating">
      <span v-for="star in totalStars" :key="star" class="star" @click="setRating(star)" @mouseover="hoverRating(star)" @mouseleave="hoverRating(0)">
        <svg height="20" width="20" class="star-svg" :class="{ 'active': star <= (hoverIndex || rating) }">
          <polygon points="9.9,0.5 3.3,16.9 17.6,6.3 2.2,6.3 16.5,16.9" />
        </svg>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StarRating',
    props: {
      initialRating: {
        type: Number,
        default: 0
      },
      totalStars: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        rating: this.initialRating,
        hoverIndex: 0
      };
    },
    methods: {
      setRating(index) {
        this.rating = index;
        this.$emit('rating-selected', index);
      },
      hoverRating(index) {
        this.hoverIndex = index;
      }
    }
  }
  </script>
  
  <style scoped>
  span {
    padding: 2px 4px 0 0;
    
    margin-top: 4px;
  }
  .star {
    
    cursor: pointer;
    display: inline-block;
  }
  .star-svg {    
    fill: lightgray;
  }
  .star-svg.active {
    fill: gold;
  }
.star-rating {
  align-self: center;
}

@media (max-width: 760px) {
  span {    
    
    margin-top: 0;
  }
  
}
 @media (max-width: 480px) { 
  svg {
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
  }


  </style>
  