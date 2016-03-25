
<template lang="jade">

div
  product( v-bind:product="product" )
</template>


<script>

  import product from '../product/product.vue';

  export default {

    components: { product },

    computed: {
      product(){
        let productName = this.$route.params.productName
        let theProduct = this.state.product.all.find((product) => product.kebabName == productName)
        return theProduct
      }
    },

  };

</script>
