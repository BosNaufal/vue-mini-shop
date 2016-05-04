
<template lang="jade">
.actions
  .row

    grid( xs="7" )

      button.btn.love(
        class="{{ product.liked ? 'loved' : '' }}"
        @click="likeIt" )
        i.ion-ios-heart
        span.ml-small {{ product.liked ? 'Unlike' : 'Like' }}

      .psr.dib
        button.btn.share.ml-small( @click="toggleShare" )
          i.ion-android-share-alt
          span.ml-small Share
        .share-list.animated.bounceIn( v-if="showShareList" v-click-outside:delay="toggleShare" )
          a.twitter( href="http://twitter.com/home?status=Check the Vue Mini Shop Out! It's either example App, built with Vue js https://bosnaufal.github.io/vue-mini-shop #vuejs #javascript #github" )
            i.ion-social-twitter
            span Twitter
          a( href="http://www.facebook.com/share.php?u=https://bosnaufal.github.io/vue-mini-shop" )
            i.ion-social-facebook
            span Facebook

    grid(
      xs="5"
      classes="text-right" )
      button.psr.btn.buy( @click="addToCart" ) {{ addToCartClicked ? 'Choose The Color' : 'Add To Cart' }}
</template>

<script>

  import productStore from '../../stores/product.js';

  export default {
    props: {
      product: {
        type: Object,
        default: {}
      },
      addToCartCallback: {
        type: Function,
        default: () => {}
      },
      colorSelected: {
        type: Boolean,
        default: false
      }
    },

    data(){
      return{
        showShareList: false,
        addToCartClicked: false
      }
    },

    watch: {
      colorSelected(val,old){
        if(val === false) this.addToCartClicked = false
      }
    },

    methods: {

      likeIt(){
        let me = this;
        this.$action('product:toggle_like',{ product: me.product })
      },

      toggleShare(){
        this.showShareList = !this.showShareList
      },


      addToCart(){
        this.addToCartCallback()
        this.addToCartClicked =! this.addToCartClicked
      }

    },

  };

</script>
