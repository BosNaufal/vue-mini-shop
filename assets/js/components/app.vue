
<template lang="jade">

div
  .container-mini
    loading-bar( v-bind:progress.sync="state.services.progress" )

  navigation

  .main-wrapper
    .container-mini
      router-view

  a.back-to-top( @click.prevent="backToTop" ): i.ion-chevron-up

  footer
    .container-mini
      p.copyright Copyright (c) By
        a( href="https://github.com/BosNaufal" )  Bos Naufal

</template>

<script>

  // Import the library
  import Vue from 'vue'

  // Import Plugin
  import readableNumber from '../libs/vue-readable-number.js';
  import clickOutside from '../libs/vue-click-outside.js';

  // Import Component
  import loadingBar from './other/vue-loading-bar.vue';
  import Grid from './other/grid.vue';
  import navigation from './nav/navigation.vue';


  // Debug mode
  Vue.config.debug = true
  Vue.config.devtools = true

  // Global Function
  global.cleanUp = (data) => {
    return JSON.parse(JSON.stringify(data))
  }

  // Global Filter
  Vue.filter('readable-number', readableNumber)

  // Global Directive
  Vue.directive('click-outside', clickOutside)

  // Global Component
  Vue.component('grid', Grid);



  export default {

    replace: false,

    components: { navigation, loadingBar },

    methods: {
      backToTop(){
        document.body.scrollTop = 0
      }
    },

    created(){
      this.$action('services:initial_state')
    }
  };

</script>
