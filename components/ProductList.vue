<template>
  <ul class="product__list">
    <ProductItem v-for="product in products" :key="product.id" :product="product" />
  </ul>
</template>
<script>
import ProductItem from '@/components/ProductItem.vue'
export default {
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
  .product__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
  }
</style>
