<template>
  <input class="form__field" type="type" :placeholder="placeholder" v-model="inputValue" />
</template>
<script>


export default {
  props:{
    type: {
      default: 'text'
    },
    placeholder:{
      type: String,
      default: ''
    }
  },
  computed: {
    inputValue:{
      get(){
        return this.value
      },
      set(val){
        this.$emit('input', val)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
 @import "@/assets/scss/style.scss";
  .form{
    &__field{
      width: 100%;
      border: hidden;
      background: $bg-main;
      padding: 14px;
      margin-bottom: 16px;
      border-radius: 8px;
      &:last-child{
         margin-bottom: 0;
      }
      &::placeholder{
        line-height: $line-height-m;
        color: $color-notactove;
      }
    }
  }
</style>
