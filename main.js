var data = { a: 1, };
var vm = new Vue({
  el: '#example',
  data: data,
});
console.log(vm.a == data.a);
console.log(vm.a === data.a);

vm.a = 2;
console.log(vm.a);
console.log(data.a);

data.a = 3;
console.log(vm.a);
console.log(data.a);

vm.b = 'Hi!';
console.log(vm.b);
console.log(data.b);

/****************/

var obj = {
  foo: 'bar',
};
// Object.freeze(obj);
new Vue({
  el: '#app',
  data: obj,
});

/****************/

new Vue({
  data: {
    a: 1,
  },
  created: function() {
    console.log('a is: ' + this.a);
  },
});


