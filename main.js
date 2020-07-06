const compA = {
  props: ['url', 'user'],
  template: `
    <a v-bind:href="url" class="nav-link">
      <slot>Hi! from Vue.</slot>
    </a>
  `
};

const app = new Vue({
  el:'#app',
  data: {
    user: {
      name: 'GUCCI',
    },
  },
  components: {
    'navigation-link': compA,
  },
});

const compB = {
  props: [],
  template: `
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `,
};

const app2 = new Vue({
  el: '#app2',
  components: {
    'base-layout': compB,
  },
});

// const compC = {
//   props: [],
//   template: `
//     <span>
//       <slot v-bind:user="user">
//         {{ user.lastName }}
//       </slot>
//     </span>
//   `,
// };

// const app3 = new Vue({
//   el: '#app3',
//   data: {
//     user: {
//       firstName: 'Kenta',
//       lastName: 'Yamaguchi',
//     },
//   },
//   components: {
//     'current-user': compC,
//   },
// });