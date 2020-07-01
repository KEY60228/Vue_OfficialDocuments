var app = new Vue({
  el: '#app',
  data: {
    msg: 'Hello World!',
  },
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    msg2: 'Hello again!',
  },
});

/**********/

var app3 = new Vue({
  el: '#app-3',
  data: {
    rawHtml: '<span style="color: red;">This should be red.</span>'
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    rawHtml: '<span style="color: red;">This should be red.</span>'
  }
});

/**********/

// var square = new Vue({
//   el: '#square',
//   methods: {
//     rotate: function() {
//       this.el.classList.add('rotate');
//     },
//   },
// });