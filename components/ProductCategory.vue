<template>
    <li class="category__item">
      <label class="category__label">
        <input class="category__radio sr-only" type="radio" v-model="categoryCheck" :value="category.id"  checked="">
        <span class="check-list__category">
          {{category.name}}
        </span>
      </label>
    </li>
</template>
<script>

export default {
  props:{
    categoryId:{
      type:Number,
      default: 0
    },
    category: {
      type:Object,
      default: () =>{}
    }
  },
  computed: {
    categoryCheck: {
      get(){
        return this.categoryId
      },
      set(val){
        return this.$emit('update:categoryId', val)
      }
    }
  }
}
</script>





<style lang="scss" scoped>
  @import "@/assets/scss/style.scss";
  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
  }
  .category__item{
    margin-bottom: 16px;
    &:last-child{
      margin-bottom: 0;
    }
  }
  .check-list__category{
    cursor: pointer;
    color: $color-notactove;
    &:hover{
      color: $color-grey;
    }
  }
  .category__radio:checked+.check-list__category{
    color: $black-color;
    border-bottom: 1px solid  $black-color;
  }
</style>
