<template>
  <div>
    <v-app-bar dark color="red darken-4" height="66">
      <v-btn to="/" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="text-h5">Favoriten</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card color="blue-grey lighten-5 " v-for="a of allFavorites" :key="a.firmen_id" class="mt-5">
            <v-card-title class="text-h5 black--text font-weight-black pb-0">
              <span class="mr-2">{{ a.firmen_name }}</span>
              <v-chip
                class="ma-1 font-weight-medium"
                color="red darken-4"
                text-color="white"
                v-for="c of a.fachrichtung.split(',')"
                :key="c"
              >
                {{ c }}
              </v-chip>
            </v-card-title>
            <v-card-text style="font-size: large">
              {{ a.notiz }}
            </v-card-text>
            <v-card-actions class="mt-0 pl-0 pt-0">
              <v-card-text class="text-h6 black--text"
                ><v-icon large class="mr-2 mb-1">mdi-store-marker</v-icon>{{ a.platz }}</v-card-text
              >

              <v-btn icon :to="`/firma/${a.firmen_id}`" class="mr-2">
                <v-icon large>mdi-eye</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { openDB } from 'idb';
import axios from 'axios';
export default {
  data() {
    return {
      db: null,
      allFavorites: [],
      gefilterteFavorites: [],
      firmen: [],
    };
  },

  async created() {
    this.db = await openDB('favoriteFirmaDB');
    const { data } = await axios({
      url: '/firmen',
      method: 'GET',
    });
    this.firmen = data;
    this.allFavorites = await this.db.getAll('favorite');
    this.allFavorites = this.allFavorites.filter((el) =>
      this.firmen.some((element) => el.firmen_id === element.firmen_id),
    );
  },
};
</script>

<style lang="scss" scoped></style>
