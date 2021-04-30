<template>
  <div class="container">
    <div class="main__sorting sorting main__wrapper">
      <h1 class="main__title title">Каталог</h1>
      <div class="sorting__filter">
        <legend class="sorting__legend">Сортировать по:</legend>
        <label class="sorting__label">
          <select class="sorting__select" type="text"  v-model.number="currentSortId">
            <option class="sorting__option"
              :value="sort.id" v-for="sort in sortList"
              :key="sort.id">
              {{sort.titleName}}
            </option>
          </select>
        </label>
      </div>
    </div>
    <div class="main__wrapper">
      <aside class="main__category category">
        <ul class="category__list">
          <ProductCategory
            :category-id.sync="categoryId"
            v-for="category in categoiesData"
            :key="category.id"
            :category="category"
          />
        </ul>
      </aside>
      <div class="main__product product">
        <ProductList :products="products"/>
      </div>
    </div>
    <Cart v-if="cartActive"/>
  </div>
</template>

<script>
import ProductCategory from '@/components/ProductCategory.vue'
import Cart from '@/components/Cart.vue'
import sortingProduct from '@/assets/helper/sorting-product.js'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data(){
    return{
      categoryId: null,
      sortList: sortingProduct,
      currentSortId: null,
      numberProduct: 12
    }
  },
  components:{
    ProductCategory, Cart
  },
  computed: {
    ...mapState('category', ['categoiesData']),
    ...mapState('products', ['productsData']),
    ...mapState('cart', ['cartActive']),
    products(){
      return this.productsData.slice(0, this.numberProduct)
    }

  },
  methods:{
    ...mapActions({getLoadCategory: 'category/getLoadCategory'}),
    ...mapActions({getLoadProducts: 'products/getLoadProducts'}),
    ...mapMutations({sortProduct: 'products/sortProduct'}),
    ...mapMutations({updateProductsCard: 'cart/updateProductsCard'})
  },
  async fetch(){
    await this.getLoadCategory()
    this.categoryId = this.categoiesData[0].id
    await this.getLoadProducts(this.categoryId)
    this.currentSortId = sortingProduct[0].id
  },
  mounted(){
    const saveProduct = localStorage.getItem('product')
    console.log(saveProduct)
    if(saveProduct){
      JSON.parse(saveProduct).forEach(i => {
       this.updateProductsCard(i)
      });
    }
  },
  watch:{
    categoryId:{
      async handler(){
        await this.getLoadProducts(this.categoryId)
        this.sortProduct(this.currentSortId)
      }
    },
    currentSortId:{
      handler(){
        this.sortProduct(this.currentSortId)
      }
    }
  }
}
</script>
<style lang="scss">
  @import "@/assets/scss/style.scss";
  .main{
    background: $bg-main;
    padding-top:32px ;
    &__title{
      margin-bottom: 24px;
    }
  }
  .container.main-wrapper{
    padding-top: 32px;
  }
  .main__wrapper{
    display: flex;
    justify-content: space-between;
  }
  .category__list{
    list-style: none;
  }
  .sorting{
    align-items: center;
    &__filter{
      display: flex;
      line-height: $line-height-m;
      color: $black-color;
    }
    &__select{
      background: transparent;
      border: none;
      line-height: $line-height-m;
      color: $color-grey;
    }
    &__option{
      background: #fff;
      color: $color-notactove;
      font-size: $size-text-m;
      line-height: $line-height-s;
      padding: 4px 12px;
      &:first-child{
        border-radius: 0px 8px 0px 8px;
      }
      &:hover,
      &:focus{
        color:$black-color;
        background: $bg-main;
      }
    }
  }
  .product{
    width: 87%;
  }
</style>
