app = new Vue({
  el: '#app',
  data: {
    classObject: {
      active: true,
      'text-danger': false,
    }
  },
});

app2 = new Vue({
  el: '#app-2',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger',
  },
});

app3 = new Vue({
  el: '#app-3',
  data: {
    styleObject: {
      color: 'blue',
      fontSize: '24px',
    },
    otherStyles: {
      fontWeight: 800,
      letterSpacing: '24px',
    }
  },
});