const compA = {
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise,
  },
  template: '<h3>{{ title }}</h3>'
};

const app = new Vue({
  el:'#app',
  data: {
    post: { 
      id: 1, 
      title: 'Hello', 
      likes: 39, 
      isPublished: true, 
      commentIds: ['GUCCI', 'PORI'], 
      author: {
        name: 'GUCCI'
      }, 
      callback: function() {
        alert('Hi!')
      },
    },
  },
  components: {
    'blog-post': compA,
  }
});