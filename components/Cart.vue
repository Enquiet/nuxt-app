<template>
  <div class="cart">
    <div class="cart__container">
      <div class="cart__wrapper">
        <h1 class="cart__title title">Корзина</h1>
        <button class="cart__close" @click.prevent="setCartActive">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="black"/>
          </svg>
        </button>
      </div>
      <div class="cart__empty empty" v-if="!productsCard.length && !order">
        <p class="empty__text">Пока что вы ничего не добавили в корзину.</p>
        <button class="empty__btn btn" @click.prevent="setCartActive">Перейти к выбору</button>
      </div>
      <div class="cart__inner" v-else-if="productsCard.length">
        <p class="cart__sub">Товары в корзине</p>
        <ul class="cart__list product-cart" :class="{'scrol-bar': productsCard.length > 3 }">
          <CartItem
            v-for="item in productsCard"
            :key="item.id"
            :product="item"
          />
        </ul>
        <p class="cart__sub">Оформить заказ</p>
        <form class="cart__form form" @submit.prevent="addOrder">
          <FormField v-model="name" type="text" placeholder="Ваше имя"/>
          <FormField v-model="phone" v-mask="'+7 (###) ###-##-##'" type="tel" placeholder="Телефон"/>
          <FormField v-model="adress" type="text" placeholder="Адрес"/>
          <button class="form__btn btn" >Отправить</button>
          <p class="form__error"
          v-if="
            $v.name.$dirty &&!$v.name.required ||
            ($v.phone.$dirty &&!$v.phone.required || !$v.phone.minLength) ||
            $v.adress.$dirty &&!$v.adress.required"
          >
            Все поля обязательные. <br>После удачной отправки формы содержимое корзины очищается
          </p>
        </form>
      </div>
      <div class="cart__order order" v-if="order">
        <img class="order__img" src="@/assets/icon/order-ok.svg">
        <h2 class="order__title">Заявка успешно отправлена</h2>
        <p class="order__text">Вскоре наш менеджер свяжется с Вами</p>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from '@/components/CartItem'
import FormField from '@/components/FormField'
import { mapState, mapMutations } from 'vuex'
import {  required, minLength } from 'vuelidate/lib/validators'
export default {
  data(){
    return{
      name:'',
      phone: '',
      adress:'',
      order: false
    }
  },
  validations:{
    name:{required},
    phone: { required, minLength: minLength(11)},
    adress:{required},
  },
  components:{
    CartItem, FormField
  },
  computed:{
    ...mapState('cart', ['productsCard'])
  },
  methods:{
    ...mapMutations({setStatusCatrActive: 'cart/setStatusCatrActive'}),
    ...mapMutations({clearProductCart: 'cart/clearProductCart'}),
    setCartActive(){
      this.setStatusCatrActive(false)
    },
    addOrder(){
      if(this.$v.$invalid){
        this.$v.$touch()
        return
      }
      this.clearProductCart()
      this.order = true
    }
  },
  created (){
    this.order = false
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/style.scss";
  .cart{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    transition: opacity 0.3s ease;
    &__container{
      background-color: #fff;
      margin-left: auto;
      max-width: 460px;
      min-height: 100%;
      padding: 52px 48px;
      box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
      border-radius: 8px 0px 0px 8px;
      position: relative;
    }
    &__empty{
      margin-top: 25px;
    }
    &__sub{
      color: $color-grey;
      font-size: $size-text-l;
      line-height: $line-height-l;
    }
    &__close{
      background: transparent;
      border:none;
    }
    &__wrapper{
      display: flex;
      justify-content: space-between;
    }
    &__title{
      margin-bottom: 24px;
    }
    &__list{
      margin-bottom: 32px;
    }
    &__form {
      margin-top: 16px;
    }
  }
  .empty{
    &__text{
      font-size: 22px;
      line-height: 28px;
    }
    &__btn{
      margin-top: 24px;
    }
  }
  .product-cart{
    margin-top: 16px;
    max-height: 390px;
  }
  .form{
    &__btn{
      margin-top: 24px;
      margin-bottom: 32px
    }
    &__error{
      line-height: $line-height-m;
      color: #000000;
      background: url('@/assets/image/error-form.svg') no-repeat 0% 10%;
      padding-left: 30px;
    }
  }
  .order{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    &__img{
    display: block;
    margin: 0 auto;
    margin-bottom: 24px;
    }
    &__title{
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    color: #000000;
    margin: 0;
    }
    &__text{
      font-size: 16px;
      line-height:$line-height-m;
      text-align: center;
      color: $color-grey;
    }
  }
</style>
