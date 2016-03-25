
import services from './services.js';


export default {

  name: 'product',

  state: {
    all: []
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

    me.organize(me.state.all)
    services.backup_to_local_storage()
  },


  /**
    Organize the products
    @param {Object} products
  */
  organize(products){
    let me = this
    products.forEach((product) => {
      // Convert the product name to kebab-case
      product.kebabName = product.name.toLowerCase().replace(/\s/ig,'-')
    })
  },


  /**
    Find The Product
    @param {Object} product
  */
  find_product(product){
    let me = this

    // Find The Product
    let allProduct = me.state.all
    let findProduct = allProduct.find(item => item.name == product.name)
    return findProduct
  },


  /**
    Decrease the amount of the stock
    @param {Object} val
  */
  decrease_stock(val){
    let me = this

    // remove Vue watcher
    val = cleanUp(val)

    // Destructuring the val
    let { product: product, color: color } = val

    // decrease the stock of the product
    let theProduct = me.find_product(product)

    // Find the color then reduce the stock amount
    let allStock = theProduct.stocks
    let findColor = allStock.find(stock => stock.color == color)
    let indexOfColor = allStock.indexOf(findColor)
    allStock[indexOfColor].stock = findColor.stock - 1 // Finally -_-

    services.backup_to_local_storage()
  },



  /**
    Toggle Like the Product
    @param {Object} val
  */
  toggle_like(val){
    let me = this

    // remove Vue watcher
    val = cleanUp(val)

    // Destructuring the val
    let { product: product } = val

    let theProduct = me.find_product(product)

    theProduct.liked = !product.liked

    services.backup_to_local_storage()
  },


  /**
    add a comment to the Product
    @param {Object} val
  */
  add_comment(val){
    let me = this

    // remove Vue watcher
    val = cleanUp(val)

    // Destructuring the val
    let { product: product, content: content } = val

    let theProduct = me.find_product(product)

    theProduct.comments.push({ content: content })

    services.backup_to_local_storage()
  },


  /**
    delete a comment to the Product
    @param {Object} val
  */
  delete_comment(val){
    let me = this

    // remove Vue watcher
    val = cleanUp(val)

    // Destructuring the val
    let { product: product, comment: comment } = val

    let theProduct = me.find_product(product)

    let indexOfComment = theProduct.comments.indexOf(comment)
    theProduct.comments.splice(indexOfComment,1)

    services.backup_to_local_storage()
  },

};
