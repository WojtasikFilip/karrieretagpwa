<template>
  <v-app>
    <v-app-bar
      dark
      app
      height="66"
      color="red darken-4"
      v-if="
        (!items.length || items.length == 0) && this.$route.name != 'Firma' && this.$route.name != 'Favoriten'
      "
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-h5"> Karrieretag </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app hide-overlay disable-resize-watcher>
      <v-list nav dense>
        <v-list-item-group active-class="red darken-4 white--text">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/favoriten">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favoriten</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div
        class="red darken-4 white--text text-center"
        style="width: 100%"
        role="alert"
        v-if="this.offline == true"
      >
        Sie surfen offline...
      </div>
      <router-view :firmen="firmen" :vortraege="vortraege" @hideBar="setSelected" />
    </v-main>
  </v-app>
</template>

<script>
import { openDB } from 'idb';

import axios from 'axios';
export default {
  name: 'App',
  data: () => ({
    items: false,
    drawer: false,
    offline: false,
    db: null,
    firmen: [],
    vortraege: [],
    serverAddress: process.env.VUE_APP_SERVER,
  }),

  async created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
    window.addEventListener('online', () => (this.offline = false));
    window.addEventListener('offline', () => (this.offline = true));
    this.db = await openDB('favoriteFirmaDB', 1, {
      upgrade(db) {
        db.createObjectStore('favorite', { keyPath: 'firmen_id' });
      },
    });
    await this.getFirmen();
    await this.getVorträge();
  },
  methods: {
    updateAvailable() {
      if (confirm(`New content is available!. Click OK to refresh`)) {
        window.location.reload();
      }
    },
    async getFirmen() {
      const { data } = await axios({
        url: '/firmen',
        method: 'GET',
      });
      this.firmen = data;
    },

    async getVorträge() {
      const { data } = await axios({
        url: '/vortrag',
        method: 'GET',
      });
      this.vortraege = data;
    },

    setSelected(items) {
      this.items = items;
    },
  },
};
</script>
