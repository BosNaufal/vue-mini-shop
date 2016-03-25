
<template lang="jade">
.colors
  button.btn( v-for="stock in product.stocks" @click="colorSelected(stock)" v-if="stock.stock !== 0" ) {{ stock.color }}
    span {{ stock.stock }}
</template>

<script>

  export default {
    props:{
      selectedCallback: {
        type: Function,
        default: () => { }
      },
      product: {
        type: Object,
        default: {}
      }
    },

    methods: {
      colorSelected(stock){
        let me = this

        me.selectedCallback()

        this.$action('cart:add_item',{
          product: me.product,
          color: stock.color
        })


      }
    }
  };

</script>
