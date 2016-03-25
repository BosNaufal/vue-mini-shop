
export default {
  '/': {
    component: require('../components/pages/home.vue'),
  },

  '/product/:productName': {
    component: require('../components/pages/detil.vue'),
  },

  '/category/:category': {
    component: require('../components/pages/category.vue'),
  },

  '/search': {
    component: require('../components/pages/search.vue'),
  },

  '/cart/': {
    component: require('../components/pages/cart.vue'),
  },

}
