const app = new Vue({
  data: {
    foo: 1,
  },
  computed: {
    bar: function() {
      alert('Hi!');
    },
  },
  methods: {
    baz: function() {
      alert('Hello!');
    },
  },
});