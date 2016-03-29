
// Import Vue Router
import Vue from 'vue';
import VueRouter from '../libs/vue-router.min.js';

// import components
import app from '../components/app.vue';

// import map
import map from './map.js';

// Import services
import services from '../stores/services.js';



/**
  VUE ROUTER CONFIGURATION
*/

(function () {

  // Make new VueRouter Instance
  Vue.use(VueRouter)
  let router = new VueRouter()

  // Make it global
  global.router = router

  // Register Routes
  router.map(map)

  // Handle not found routes
  router.redirect({ '*' : '/' })

  // Before Routing Events
  router.beforeEach(function() {

    // Fake Loading Bar
    var curTime = 0;
    function animate() {
      var cur = parseFloat(services.state.progress);
      cur = isNaN(cur) ? 0 : cur;

      var to = 100; // The Last Unit Should Be

      var duration = 750;

      var startTime = new Date().getSeconds() + ',' + new Date().getMilliseconds();
      var start =+ new Date();
      check();

      function check() {
        if (cur != to) {

          (cur + (to / 60)) > to ? cur = to : cur += (to / 60);

          services.progress_to(cur)

          // curTime += duration/60;
          var time =+ new Date() - start;

          setTimeout(function() {
            check();
          }, duration / 60); // 60 FPS - Harunya 1000/60 -_-

        }
      }// check()

    }

    animate()
    document.body.scrollTop = 0

  })


  /**
    MOUNT THE VUE
  */

  // Make a new components
  let App = Vue.extend(app)

  // Mount The App
  router.start(App,'#app')

})()
