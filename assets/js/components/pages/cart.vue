
<template lang="jade">

.cart

  div( v-if="state.cart.totalItem !== 0" )
    h2 Your Cart Items
    table.table.table-hover.checkout
      tr
        th.text-center No.
        th.text-center Name
        th.text-center Qty.
        th.text-right Price
        th.text-right Total
      tr( v-for="item in state.cart.all" )
        td.text-center {{ $index + 1 }}
        td.text-center {{ item.name }} - {{ item.color }}
        td.text-center {{ item.amount }}
        td.text-right {{ item.price | readable-number }}
        td.text-right {{ item.price * item.amount | readable-number }}
      tr
        th( colspan="2" ) Total
        th.text-center {{ state.cart.totalItem }}
        th
        th.text-right Rp. {{ total | readable-number }}

    button.btn( @click="checkOut" ) Checkout

  h2( v-else="" ) You haven't bought something yet...


</template>

<script>

  export default {
    computed: {
      total(){
        let total = 0
        this.state.cart.all.forEach((item) => {
          let totalPrice = item.price * item.amount
          total += totalPrice
        })
        return total
      }
    },

    methods: {
      checkOut(){
        this.$action('cart:checkout')
      }
    }

  };

</script>
