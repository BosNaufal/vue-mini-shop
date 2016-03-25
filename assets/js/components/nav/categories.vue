<template lang="jade">

.categories.animated.fadeInDown
  h3 Choose a category:
  a( v-for="category in categories" href="#!/category/{{ category }}" @click="hasChoosen()" ) {{ category | capitalize }}

</template>

<script>

  export default {

    props: {
      hasChoosen:{
        type: Function,
        default: () => {}
      }
    },

    computed: {
      categories(){
        let category = this.$route.params.category
        let categories = []
        this.state.product.all.forEach((product) => {
          product.categories.forEach((category) => {
            category = category.toLowerCase()

            let duplicated = false

            categories.forEach((duplicate) => {
              if(category === duplicate) duplicated = true
            })
            if(!duplicated) categories.push(category)

          })
        })
        return categories
      }
    }

  }

</script>
