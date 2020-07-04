let exm1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
    ],
  },
});

let exm2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
    ],
  },
});

let exm3 = new Vue({
  el: '#example-3',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10',
    },
  },
});

let exm4 = new Vue({
  el: '#example-4',
  data: {
    numbers: [1, 2, 3, 4, 5]
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
  },
});

let exm5 = new Vue({
  el: '#example-5',
});