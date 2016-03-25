
import productStore from './product.js';
import cartStore from './cart.js';

export default {

  name: "services",

  state: {
    progress: 0
  },

  /**
    Set the Initial State
  */
  initial_state(){
    let fromLocalStorage = window.localStorage.getItem('vue-mini-shop')

    // If localStorage data is length
    if (fromLocalStorage !== null) {

      fromLocalStorage = JSON.parse(fromLocalStorage)

      // Destructuring First
      let { product: product, cart: cart } = fromLocalStorage

      productStore.set({ all: product.all })
      cartStore.set({ all: cart.all })
    }
    // When data in the local Storage is null
    else {
      productStore.set({
        all: [
          {
            name: "Iphone 5 S",
            img: './assets/img/mobile.jpg',
            price: 9000000,
            stocks: [
              { color: "black", stock: 30 },
              { color: "silver", stock: 20 },
              { color: "gold", stock: 10 },
              { color: "rose gold", stock: 5 },
            ],
            liked: false,
            detail: "<p>This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            categories: [ 'phone' ],
            comments: [
              { content: "Waaah.. keren bingit Hpnya!" },
              { content: "Barangnya Sampai dengan Selamat Gan, Makasih. Packaging-nya juga bagus! Recommended banget deh pokoknya" },
            ]
          },
          {
            name: "Smart Phone Apple",
            img: './assets/img/hi-tech-toys.jpg',
            price: 10500000,
            stocks: [
              { color: "white", stock: 50 },
            ],
            liked: false,
            detail: "<p>This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            categories: [ 'phone' ],
            comments: [
              { content: "Pinter bingit Hpnya!" },
            ]
          },
          {
            name: "Flatty Phone With Earphone",
            img: './assets/img/mobile-2.jpg',
            price: 7500000,
            stocks: [
              { color: "white", stock: 20 },
              { color: "black", stock: 10 },
            ],
            liked: false,
            detail: "<p>This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            categories: [ 'phone' ],
            comments: [
              { content: "Earphonenya Mantabs Gan!" },
            ]
          },
          {
            name: "Book And Pen",
            img: './assets/img/hi-tech-toys-2.jpg',
            price: 150000,
            stocks: [
              { color: "brown", stock: 150 },
              { color: "silver", stock: 15 },
            ],
            liked: false,
            detail: "<p>This is the details of the Iphone, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            categories: [ 'accessories' ],
            comments: [
              { content: "Bukunya Elegan! Saya suka dengan Warnanya" },
            ]
          },
          {
            name: "An Ipad",
            img: './assets/img/ipad.jpg',
            price: 10000000,
            stocks: [
              { color: "black", stock: 10 },
              { color: "silver", stock: 10 }
            ],
            liked: false,
            detail: "<p>This is the details of the Ipad, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            categories: [ 'pad' ],
            comments: [
              { content: "Sukak banget sama yang warna Merah" },
              { content: "Barangnya Sampai dengan Selamat Gan, Makasih. Packaging-nya juga bagus! Recommended banget deh pokoknya" },
            ]
          },


          {
            name: "Mobile IOS",
            img: './assets/img/ios.jpg',
            price: 13000000,
            stocks: [
              { color: "gold", stock: 10 },
              { color: "black", stock: 10 },
              { color: "silver", stock: 10 }
            ],
            liked: false,
            detail: "<p>This is the details of the Mobile IOS, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
            categories: [ 'phone' ],
            comments: []
          },
        ],
      })
    } // else
  }, // initial_state()



  /**
    get All state of the App
  */
  get_all(){
    let product = productStore.state
    let cart = cartStore.state
    let state = { product, cart }
    return state
  },


  /**
    Backup All state to the Local Storage
  */
  backup_to_local_storage(){
    window.localStorage.setItem('vue-mini-shop', JSON.stringify(this.get_all()))
  },


  /**
    Closing the Action
    @param {String} action_name
    @param {Object} val
  */
  close_the_action(action_name, val){
    this.backup_to_local_storage()
    console.log(action_name,val);
  },

  /**
    Set the value of the progress bar
    @param {Int} num
  */
  progress_to(num){
    this.state.progress = num
  }

};
