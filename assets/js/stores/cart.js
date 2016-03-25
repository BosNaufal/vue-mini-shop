
import services from './services.js';
import productStore from './product.js';


export default {

  name: 'cart',

  state: {
    all: [],
    totalItem: 0
  },


  /**
    Set the state
    @param {Object} val
  */
  set(val){
    let me = this

    let keys = Object.keys(val)
    keys.forEach((key) => {
      me.state[key] = val[key]
    })

    me.total_item()

    services.backup_to_local_storage()
  },


  // /**
  //   Find Item
  //   @param {Object} cart_item
  // */
  // find_item(cartItem){
  //   let me = this
  //
  //   // Find The Product
  //   let allItem = me.state.all
  //   let findItem = allItem.find(item => item.name == cartItem.name)
  //
  //   return findItem
  // },



  /**
    Add item to cart
    @param {Object} val
  */
  add_item(val){
    let me = this

    // remove Vue watcher
    val = cleanUp(val)

    // Destructuring the val
    let { product: product, color: color } = val

    productStore.decrease_stock({
      product: product,
      color: color
    })

    // Prepare the format of the cart Item
    let cartItem = {
      name: product.name,
      color: color,
      price: product.price,
      amount: 1
    }

    // Prepare to Add item to the cart
    let allCartItem = me.state.all
    let duplicated = allCartItem.find(item => item.name == cartItem.name && item.color == cartItem.color)

    // if duplicate item, add the amount
    if ( duplicated !== undefined ){
      let indexOfDuplicatedItem = allCartItem.indexOf(duplicated)
      allCartItem[indexOfDuplicatedItem].amount = duplicated.amount + 1
    } else {
      allCartItem.push(cartItem)
    }

    me.total_item()

    services.backup_to_local_storage()
  },


  /**
    Calculate the total of the cart items
  */
  total_item(){
    let total = 0
    this.state.all.forEach((item) => {
      total += item.amount
    })
    this.state.totalItem = total
  },


  /**
    Check out
  */
  checkout(){
    this.state.all = []
    this.state.totalItem = 0
    services.backup_to_local_storage()
  }

};
