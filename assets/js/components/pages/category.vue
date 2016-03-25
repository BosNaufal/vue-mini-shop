
<template lang="jade">

div
  p.result The Result of Category "{{ $route.params.category }}"
  product( v-for="product in products" v-bind:product="product" )
  h3.not-found.text-center( v-if="products.length == 0" ) Sorry... We can't found them :(

</template>


<script>

  import product from '../product/product.vue';

  export default {

    components: { product },

    computed: {
      products(){
        let category = this.$route.params.category.toLowerCase()
        if(category === undefined || category === null || category === '') return () => []

        let theProducts = []
        this.state.product.all.forEach((product) => {
          let included = false;
          product.categories.forEach((cat) => {
            cat = cat.toLowerCase()
            if(cat == category) included = true
          })
          if(included) theProducts.push(product)
        })
        return theProducts
      }
    }

  };

</script>
