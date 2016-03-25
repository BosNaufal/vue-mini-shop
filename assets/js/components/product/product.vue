
<template lang="jade">
.product( v-bind:class="{ 'detil-page': detilPage }" )
  .img
    a( href="#!/product/{{ product.kebabName }}" )
      img( :src="product.img" )

  .content
    a.name( href="#!/product/{{ product.kebabName }}" ) {{ product.name }}

    p.price
      b Rp. {{ product.price | readable-number }}

    p.stock.text-right
      b Stocks:
      span &nbsp; {{ totalStock }} pcs

  .detil( v-if="detilPage" ) {{{ product.detail }}}

  colors(
    v-if="showColor"
    v-bind:product="product"
    v-bind:selected-callback="colorSelected" )

  actions(
    v-bind:product="product"
    v-bind:add-to-cart-callback="addToCartCallback"
    v-bind:color-selected="showColor" )

  comment(
    v-if="detilPage"
    v-bind:product="product" )

  comment-editor(
    v-if="detilPage"
    v-bind:product="product" )

</template>

<script>

  import colors from './colors.vue';
  import actions from './actions.vue';
  import comment from './comment.vue';
  import commentEditor from './comment-editor.vue';

  export default {

    props: {
      product: {
        type: Object,
        default: {}
      }
    },

    data(){
      return{
        showColor: false,
      }
    },

    components: {
      colors,
      actions,
      comment,
      commentEditor,
    },

    computed: {
      totalStock(){
        let total = 0
        this.product.stocks.forEach((item) => {
          total += item.stock
        });
        return total
      },

      detilPage(){
        if(this.$route.path.search(/\/product\//ig) === 0) return true
        return false
      }
    },

    methods:{
      addToCartCallback(){
        this.showColor = ! this.showColor
      },
      colorSelected(color){
        this.showColor = false;
      }
    },

  };

</script>
