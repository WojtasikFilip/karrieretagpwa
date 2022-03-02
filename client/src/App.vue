<template>
  <v-app>
    <div>
      <v-app-bar app color="#8d1717" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <h2 class="ml-5 font-weight-light">Karrieretag</h2>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
    </div>

    <v-main>
      <router-view :firmen="firmen" />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',

  data: () => ({
    firmen: [],
    serverAddress: process.env.VUE_APP_SERVER,
  }),
  async created() {
    await this.getFirmen();
    console.log(this.firmen);
  },
  methods: {
    async getFirmen() {
      const { data } = await axios({
        url: this.serverAddress + '/firmen',
        method: 'GET',
      });
      this.firmen = data;
    },
  },
};
</script>
