<template>
  <div class="card-class">
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="red--text align-end"
        height="200px"
        src="https://cdn.pixabay.com/photo/2015/10/07/12/17/post-976115_1280.png"
      >
      </v-img>
      <v-card-subtitle class="pb-0">
        {{ post.title }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <v-textarea  v-model="bodyText" :readonly="flag"></v-textarea>
      </v-card-text>

      <v-card-title>Post id: {{ post.id }}</v-card-title>

      <v-card-actions>
        <v-btn
          color="orange"
          text
          v-on:click="editPost"
        >
          {{ editBtnValue }}
        </v-btn>

        <v-btn
          color="red"
          text
          v-on:click="deletePost"
        >
          Видалити
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object
  },
  data () {
    return {
      bodyText: this.post.body,
      postId: this.post.id,
      flag: true,
    }
  },
  computed: {
    editBtnValue () {
      if(this.flag){
        return 'Замінити'
      }else {
        return 'Зберегти'
      }
    }
  },
  methods: {
    editPost: function (){
      if(this.flag){
      this.flag = !this.flag;
      } else {
        this.flag = !this.flag;
        this.$emit('editPost',[this.bodyText, this.postId])
      }
    },
    deletePost: function () {
      this.$emit('deletePost', this.postId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
