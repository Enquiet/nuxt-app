<template>
  <div>
    <TheHead />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TheHead from '@/components/TheHead.vue'

export default {
  components:{
    TheHead
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/style.scss";
.container{
  max-width: $lg;
  padding: 0 80px;
  margin: 0 auto;
}
</style>

