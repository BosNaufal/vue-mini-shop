<template lang="jade">

form.search-bar.animated.fadeInDown(
  v-bind:class="{ focus: focus }"
  @submit.prevent="submit" )

  .row
    grid( xs="10" )
      input(
        type="text"
        placeholder="Cari Produk..."
        @focus="$set('focus',true)"
        @blur="blur"
        v-model="search" )

    grid(
      xs="2"
      classes="text-right animated bounceIn"
      v-if="focus")
      button( type="submit" ): i.ion-arrow-right-c

</template>

<script>

  export default {

    props: {
      hasSearched:{
        type: Function,
        default: () => {}
      }
    },

    data(){
      return {
        focus: false,
        search: ""
      };
    },

    methods: {
      blur(){
        this.focus = false
        this.search = ""
      },

      submit(){
        router.go('/search?q='+encodeURI(this.search))
        this.hasSearched()
      }
    }

  }

</script>
