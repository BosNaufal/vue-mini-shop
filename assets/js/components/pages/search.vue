
<template lang="jade">

div
  p.result The Result of Searching Query "{{ $route.query.q }}"
  product( v-for="product in products" v-bind:product="product" )
  h3.not-found.text-center( v-if="products.length == 0" ) Sorry... We can't found them :(

</template>


<script>

  import product from '../product/product.vue';

  export default {

    components: { product },

    computed: {
      products(){
        let query = this.$route.query.q.toLowerCase()
        if(query === undefined || query === null || query === '') return () => []
        let theProducts = []

        this.state.product.all.forEach((product) => {
          let included = product.name.search(new RegExp('('+query+')','ig'))
          if(included !== -1) theProducts.push(product)
        })

        return theProducts
      }
    }

  };

</script>
