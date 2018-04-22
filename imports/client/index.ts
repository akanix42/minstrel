import Vue from 'vue';
import VueRouter from 'vue-router';
import './quasar.conf';

import Layout from './layout/Layout.vue';

const router = new VueRouter({
   // short for `routes: routes`
});

Vue.use(VueRouter);

Meteor.startup(() => {
  /* Start the router */
  new Vue({
    render: (h) => h(Layout),
    router,
  }).$mount('#app');
});
