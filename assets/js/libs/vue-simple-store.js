/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Vue Simple Store - version@1.0.0
*
*/

(function () {

  var VueSimpleStore = {

    install: function(Vue, opt){

      var plugin = this;

      if(opt.debug) console.info('[Vue Simple Store]: In Debug Mode');

      var theStores = {}
      var theState = {}

      for (var i = 0; i < opt.stores.length; i++) {

        if(opt.stores[i].name === undefined) console.warn("[Vue Simple Store]: Please add a Store Name", opt.stores[i]);

        // Make a global Stores
        theStores[opt.stores[i].name] = opt.stores[i];

        // Make a global state
        if(opt.stores[i].state !== undefined) theState[opt.stores[i].name] = opt.stores[i].state;

        // Remove the name
        delete theStores[opt.stores[i].name].name;
      }

      plugin.mixin = {};

      plugin.mixin.init = function(){
        Vue.util.defineReactive(this,'state',theState);
        Vue.util.defineReactive(this,'$action', function(eventName,val){

          var theColon = eventName.search(':');
          var storeName = eventName.substr(0,theColon);
          var theEvent = eventName.substr(theColon+1,eventName.length)

          if(theStores[storeName] === undefined) return console.warn("[Vue Simple Store]: the "+storeName+" store doesn't exist");

          // Trigger the store
          theStores[storeName][theEvent](val);

          if(opt.debug){
            if(val === undefined) console.info(eventName);
            else console.info(eventName,val);
          }

        });
      };

      // Merge mixin to VM via vue options
      Vue.options = Vue.util.mergeOptions(Vue.options, plugin.mixin)
    }

  };

  // If support node / ES6 module
  if( typeof module === 'object' && module.exports ){
    module.exports = VueSimpleStore
  }
  // if using require js
  else if (typeof define === 'function' && define.amd) {
    define( function () { return VueSimpleStore })
  }
  // if script loaded by script tag in HTML file
  else if (typeof window !== undefined) {
    return window.VueSimpleStore = VueSimpleStore
  }

})()
