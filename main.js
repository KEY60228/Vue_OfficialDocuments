const compA = {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
  },
  template: `
    <input type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)">
  `
};

const app = new Vue({
  el:'#app',
  components: {
    'base-checkbox': compA,
  },
  methods: {
    lovingVue: function() {
      alert("I Love Vue!");
    },
  },
});