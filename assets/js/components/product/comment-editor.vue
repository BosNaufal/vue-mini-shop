
<template lang="jade">

.comment-editor
  h4.mb-15 Leave a Comment
  form( @submit.prevent="submit" )
    textarea(
      v-model="comment"
      placeholder="Write a comment here..." )
    button.btn( type="submit" ) Submit

</template>


<script>

  export default {

    props: {
      product: {
        type: Object,
        default: {}
      }
    },

    data(){
      return{
        comment: ""
      }
    },

    methods: {
      submit(){
        let me = this
        this.$action('product:add_comment',{
          product: me.product,
          content: me.comment
        })
        me.comment = ""
      } //submit()
    }
  };

</script>
