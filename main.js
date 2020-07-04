const ComponentA = {
  props: ['title'],
  template: `
    <h1>{{ title }}</h1>
  `, 
};

const app1 = new Vue({
  el: '#app',
  data: {
    title: 'Hello, World!',
  },
  components: {
    'component-a': ComponentA,
  },
});
