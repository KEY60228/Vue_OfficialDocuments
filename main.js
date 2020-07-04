exm1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0,
  },
});

exm2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js',
  },
  methods: {
    greet: function (event) {
      alert('Hello' + this.name + '!');
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
});

exm3 = new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message);
    }
  },
});

exm4 = new Vue({
  el: '#example-4',
  methods: {
    warn: function (message, event) {
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
});

exm5 = new Vue({
  el: '#example-5',
  methods: {
    submit: function () {
      alert('submit!');
    },
  },
});