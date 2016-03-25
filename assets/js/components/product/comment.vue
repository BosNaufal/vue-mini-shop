
<template lang="jade">

.comment-wrapper( v-if="product.comments.length !== 0" )
  h4 {{ product.comments.length }} Comments

  .comment( v-for="comment in product.comments" )
    .row
      grid( xs="2" )
        .avatar
      grid( xs="10" classes="pl-small" )
        h5.name You
        p.content
          button.delete( @click="delete_comment( comment )" ): i.ion-android-close
          | {{ comment.content }}

</template>

<script>

  export default {

    props: {
      product: {
        type: Object,
        default: {}
      }
    },

    methods: {
      delete_comment(comment){
        let me = this
        this.$action('product:delete_comment',{
          product: me.product,
          comment: comment
        })
      }
    }

  };

</script>
