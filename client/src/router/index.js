import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Firma from '../views/Firma.vue';
import Favoriten from '../views/Favoriten.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/firma/:id',
    name: 'Firma',
    component: Firma,
    props: true,
  },
  {
    path: '/favoriten',
    name: 'Favoriten',
    component: Favoriten,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
