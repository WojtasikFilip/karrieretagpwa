<template>
  <v-container fluid class="ma-0 pa-0">
    <v-app-bar v-if="selected.length" color="grey darken-4" dark app>
      <v-app-bar-nav-icon v-if="!selected.length"></v-app-bar-nav-icon>
      <v-btn v-else icon @click="(selected = []), $emit('hideBar', selected)">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-toolbar-title> {{ selected.length }} selected </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="(clicked = !clicked), addFavoriten(), (snackbar = true)">
        <v-icon color="grey lighten-1" v-if="!clicked" medium>mdi-book-plus-multiple </v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <v-snackbar v-model="snackbar" :timeout="3000" rounded="pill" elevation="24">
        <span style="font-size: 20px">Als Favorit markiert.</span>
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false" style="font-size: 16px">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-text-field
        v-model="searchFirma"
        single-line
        prepend-inner-icon="mdi-magnify"
        hide-details
        filled
        class="text-h6"
        rounded
      >
      </v-text-field>
    </v-container>
    <v-card class="elevation-0">
      <v-list-item-group
        v-model="selected"
        active-class="pink--text"
        multiple
        @change="$emit('hideBar', selected)"
      >
        <template v-for="f of searchCompany" class="pa-0">
          <v-list-item :key="f.firmen_id" @click="selectedFirma.push(f)">
            <v-list-item-content>
              <v-list-item-title v-text="f.firmen_name" class="text-h6 font-weight-bold"></v-list-item-title>
              <v-list-item-subtitle class="text-h6">{{
                f.fachrichtung.replaceAll(',', ' | ')
              }}</v-list-item-subtitle>

              <v-list-item-subtitle class="text-h6">{{ f.platz }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon :to="`/firma/${f.firmen_id}`"><v-icon> mdi-forwardburger </v-icon></v-btn>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-card>
  </v-container>
</template>

<script>
import { openDB } from 'idb';

export default {
  props: {
    firmen: {
      type: Array,
    },
  },
  data() {
    return {
      clicked: false,
      db: null,
      snackbar: false,
      selected: [],
      selectedFirma: [],
      searchFirma: '',
    };
  },
  computed: {
    searchCompany() {
      return this.firmen.filter((el) =>
        el.firmen_name.toLowerCase().includes(this.searchFirma.toLowerCase()),
      );
    },
  },
  async created() {
    this.db = await openDB('favoriteFirmaDB');
  },
  methods: {
    async addFavoriten() {
      this.selectedFirma.forEach(async (el) => await this.db.put('favorite', el));
      this.selected = [];
      this.$emit('hideBar', this.selected);
      this.selectedFirma = [];
      this.clicked = !this.clicked;
    },
  },
};
</script>

<style lang="scss" scoped></style>
