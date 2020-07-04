Vue.component('button-counter', {
  data: function() {
    return {
      count: 0,
    };
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

let app1 = new Vue({
  el: '#app',
});

Vue.component('blog-post', {
  props: ['title', 'id'],
  template: '<h3>{{ title }}</h3>',
});

let app2 = new Vue({
  el: '#app2',
  data: {
    posts: [
      { id: 1, title: 'My journer with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun?' },
    ],
  },
});

Vue.component('blog-post-2', {
  props: ['post'],
  template: `
    <div class="blog-post-2">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
});

let app3 = new Vue({
  el: '#app3',
  data: {
    posts: [
      { id: 1, title: 'My journer with Vue', content: 'How far from here' },
      { id: 2, title: 'Blogging with Vue', content: 'What a long journey' },
      { id: 3, title: 'Why Vue is so fun?', content: 'but why Vue is so difficult?' },
    ],
    postFontSize: 1,
  },
  methods: {
    onEnlargeText: function(enlargeAmout) {
      this.postFontSize += enlargeAmout
    },
  },
});

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
  `,
});

let app4 = new Vue({
  el: '#app4',
  data: {
    searchText: '',
  },
});

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
});

let app5 = new Vue({
  el: '#app5',
})