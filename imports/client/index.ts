import Vue from 'vue';
import Layout from './layout/Layout';

Meteor.startup(() => {
  /* Start the router */
  new Vue({
    render: (h) => h(Layout),
  }).$mount('#app');
});
