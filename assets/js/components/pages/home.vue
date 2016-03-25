<template lang="jade">

div
  product(
    :product="product"
    v-for="product in state.product.all" )

</template>

<script>

  import product from '../product/product.vue';

  export default {
    components: { product }
  };

</script>
