
<template lang="jade">

nav
  .container-mini
    .row
      grid( xs="8" )
        a( href="#!/" )
          img( src="./assets/img/logo.png" )
      grid( xs="4" classes="text-right" )
        button( @click="toggleSearchBar" )
          i( class="{{ searching ? 'ion-android-close color-red' : 'ion-ios-search-strong' }}" )
        button
          a( href="#!/cart" ): i.ion-bag
            span.badge.animated( v-if="state.cart.totalItem" v-bind:class="{ bounceIn: newItem }" ) {{ state.cart.totalItem }}
        button( @click="toggleCategoryList" )
          i( class="{{ choosingCategory ? 'ion-android-close color-red' : 'ion-pricetags' }}" )

    search( v-if="searching" v-bind:has-searched="toggleSearchBar" )

    categories( v-if="choosingCategory" v-bind:has-choosen="toggleCategoryList" )

</template>

<script>

  import search from './search.vue';
  import categories from './categories.vue';

  export default {

    data(){
      return{
        searching: false,
        choosingCategory: false,
        newItem: false,
      };
    },

    components: {
      search,
      categories
    },

    watch: {
      'state.cart.totalItem'(val,old){
        let me = this
        if(val > old) {
          me.newItem = true
          setTimeout(() => {
            me.newItem = false
          },750)
        }
      }
    },

    methods: {
      toggleSearchBar(){
        this.choosingCategory = false
        this.searching = !this.searching
      },

      toggleCategoryList(){
        this.searching = false
        this.choosingCategory = !this.choosingCategory
      }
    },

    ready(){
      let me = this
      me.newItem = true
      setTimeout(() => {
        me.newItem = false
      },750)
    }

  };

</script>
