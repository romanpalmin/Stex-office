/* eslint-disable semi */
import Vue from 'vue';
import Router from 'vue-router';
/* import HelloWorld from '@/components/HelloWorld'; */
import Main from '@/pages/Main';
import Contacts from '@/pages/Contacts';
import BuyCoins from '@/pages/BuyCoins';
import Faq from '@/pages/Faq';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/BuyCoins',
      name: 'BuyCoins',
      component: BuyCoins
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/Faq',
      name: 'Faq',
      component: Faq
    }
  ]
});
