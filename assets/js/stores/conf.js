
// Import the library
import Vue from 'vue'
import VueSimpleStore from '../libs/vue-simple-store.js'

// Import All Store Once
import services from './services.js';
import productStore from './product.js';
import cartStore from './cart.js';

(function () {
  // Install Vue Simple Store
  Vue.use( VueSimpleStore,{ stores: [ services, productStore, cartStore ], debug: true } )
})()
