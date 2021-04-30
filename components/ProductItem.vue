<template>
   <li class="product__item">
     <div class="product__wrapper">
      <div class="product__raiting raiting">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C10.2379 3.125 10.4552 3.26005 10.5605 3.47336L12.3464 7.09154L16.3404 7.67532C16.5758 7.70972 16.7712 7.87473 16.8445 8.10098C16.9179 8.32723 16.8565 8.57552 16.6861 8.74147L13.7966 11.5559L14.4785 15.5318C14.5187 15.7663 14.4223 16.0033 14.2299 16.1432C14.0374 16.283 13.7822 16.3014 13.5716 16.1907L10 14.3124L6.42843 16.1907C6.21785 16.3014 5.96267 16.283 5.77018 16.1432C5.5777 16.0033 5.48129 15.7663 5.52151 15.5318L6.20344 11.5559L3.31394 8.74147C3.14355 8.57552 3.08213 8.32723 3.15549 8.10098C3.22885 7.87473 3.42428 7.70972 3.65963 7.67532L7.6536 7.09154L9.43958 3.47336C9.54487 3.26005 9.76213 3.125 10 3.125ZM10 5.16203L8.62921 7.93914C8.53825 8.12342 8.36251 8.25121 8.15916 8.28093L5.09278 8.72913L7.3111 10.8898C7.45852 11.0334 7.52581 11.2403 7.49102 11.4432L6.96763 14.4948L9.70911 13.0531C9.89122 12.9573 10.1088 12.9573 10.2909 13.0531L13.0324 14.4948L12.509 11.4432C12.4742 11.2403 12.5415 11.0334 12.6889 10.8898L14.9073 8.72913L11.8409 8.28093C11.6375 8.25121 11.4618 8.12342 11.3708 7.93914L10 5.16203Z" fill="#F2C94C"/>
          <path  d="M6.5 11L4 8H10H16L13.5 11V14.5L13 15.5L10 14L9 14.5L6.5 15.5V14.5V11Z " fill="#F2C94C"/>
        </svg>
        <span class="raiting__title raiting-status">{{product.rating}}</span>
      </div>
      <button class="product__btn" type="button" @click.prevent="addToCard()">
        <svg width="12" height="13" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="product__btn--img" fill-rule="evenodd" clip-rule="evenodd" d="M3.84 0.48C4.06663 0.177833 4.42229 0 4.8 0H19.2C19.5777 0 19.9334 0.177833 20.16 0.48L23.76 5.28C23.9158 5.48772 24 5.74036 24 6V22.8C24 23.7548 23.6207 24.6705 22.9456 25.3456C22.2705 26.0207 21.3548 26.4 20.4 26.4H3.6C2.64522 26.4 1.72955 26.0207 1.05442 25.3456C0.379285 24.6705 0 23.7548 0 22.8V6C0 5.74036 0.0842134 5.48772 0.24 5.28L3.84 0.48ZM5.4 2.4L2.4 6.4V22.8C2.4 23.1183 2.52643 23.4235 2.75147 23.6485C2.97652 23.8736 3.28174 24 3.6 24H20.4C20.7183 24 21.0235 23.8736 21.2485 23.6485C21.4736 23.4235 21.6 23.1183 21.6 22.8V6.4L18.6 2.4H5.4Z" />
          <path class="product__btn--img" fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 5.33726 0.537258 4.8 1.2 4.8H22.8C23.4627 4.8 24 5.33726 24 6C24 6.66274 23.4627 7.2 22.8 7.2H1.2C0.537258 7.2 0 6.66274 0 6Z"/>
          <path class="product__btn--img" fill-rule="evenodd" clip-rule="evenodd" d="M7.2 9.6C7.86274 9.6 8.4 10.1373 8.4 10.8C8.4 11.7548 8.77928 12.6705 9.45442 13.3456C10.1295 14.0207 11.0452 14.4 12 14.4C12.9548 14.4 13.8705 14.0207 14.5456 13.3456C15.2207 12.6705 15.6 11.7548 15.6 10.8C15.6 10.1373 16.1373 9.6 16.8 9.6C17.4627 9.6 18 10.1373 18 10.8C18 12.3913 17.3679 13.9174 16.2426 15.0426C15.1174 16.1679 13.5913 16.8 12 16.8C10.4087 16.8 8.88258 16.1679 7.75736 15.0426C6.63214 13.9174 6 12.3913 6 10.8C6 10.1373 6.53726 9.6 7.2 9.6Z"/>
        </svg>

      </button>
     </div>
      <img class="product__img" src="@/assets/image/product.png"/>
      <p class="product__title">{{product.name}}</p>
      <span class="product__price">{{product.price}}₽</span>
    </li>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  methods:{
    ...mapMutations({updatProductsCard: 'cart/updateProductsCard'}),
    addToCard(){
      this.updatProductsCard(this.product)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/scss/style.scss";

  .product__item{
    background: #fff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 15px;
    width: 264px;
    margin-bottom: 16px;
    position: relative;
  }
  .product__title{
    font-size: $size-text-m;
    line-height: $line-height-m;
    color:$color-grey;
    margin:16px 0 8px 0;
  }
  .product__price{
    font-weight: bold;
    font-size: $size-text-m;
    line-height: $line-height-m;
    color:$black-color;
  }
  .product__img{
    display: block;
    margin: 0 auto;
  }
  .product__wrapper{
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    width: 90%;
    margin: 0 auto;
  }
  .product__btn{
    background: transparent;
    border: none;
    cursor: pointer;
    &:hover{
      .product__btn--img{
        fill: $black-color;
      }
    }
    &--img{
      fill: $color-grey;
    }
  }
</style>
