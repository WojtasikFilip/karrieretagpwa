<template>
  <div>
    <v-card v-for="f of firma" :key="f.firmen_id" class="rounded-0 elevation-0" app>
      <v-card-title class="black">
        <v-btn @click="$router.go(-1)" icon> <v-icon color="white">mdi-arrow-left</v-icon> </v-btn>
        <span class="text-h5 white--text ml-2">{{ f.firmen_name }}</span>

        <v-spacer></v-spacer>
        <v-btn icon @click="clicked = !clicked">
          <v-icon color="grey lighten-1" v-if="!clicked" @click="addFavorit()"> mdi-star-outline </v-icon>
          <v-icon color="yellow darken-3" v-if="clicked" @click="removeFavorit()"> mdi-star </v-icon>
        </v-btn>
      </v-card-title>

      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-email-plus-outline</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="text-h6">{{ f.firmen_mail }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-lan</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="text-h6">{{ f.fachrichtung.replaceAll(',', ' | ') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="text-h6">{{ f.platz }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-web</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <a
              class="text-h6"
              target="_blank"
              :href="f.url.includes('https://') || f.url.includes('http://') ? f.url : `http://${f.url}`"
              >{{ f.url }}</a
            >
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item v-if="thisVortrag.length == 0">
          <v-list-item-action>
            <v-icon>mdi-human-male-board</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="text-h6">Hält keinen Vortrag</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="thisVortrag.length != 0">
          <v-list-item-action>
            <v-icon>mdi-human-male-board</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="text-h6">Hält einen Vortrag</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="thisVortrag.length != 0">
          <v-list-item-action>
            <v-icon>mdi-calendar-clock</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="text-h6"
              >{{ thisVortrag.map((el) => el.anfangvortrag.substr(0, 5)).toString() }} -
              {{ thisVortrag.map((el) => el.endevortrag.substr(0, 5)).toString() }} Uhr <br />
              Im Bereich
              {{ thisVortrag.map((el) => el.fachrichtung).toString() }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-pencil-box-multiple</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="text-h6 font-weight-normal">Notizen zur Firma: </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-container>
        <v-textarea
          v-model="firmenNotiz"
          color="red darken-4"
          label="Notizen"
          maxlength="150"
          class="pa-3 text-h6"
          @change="changed = true"
        ></v-textarea>
      </v-container>
      <v-btn :disabled="firmenNotiz == 0" outlined @click="addFavorit()" class="mr-5" style="float: right"
        >Speichern</v-btn
      >
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="3000" rounded="pill" elevation="24">
      <span style="font-size: 20px">Als Favorit markiert.</span>
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false" style="font-size: 16px">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { openDB } from 'idb';

export default {
  data() {
    return {
      clicked: false,
      firmenNotiz: '',
      db: null,
      showButton: false,
      snackbar: false,
      count: 0,
      indexFirma: {},
      changed: false,
    };
  },
  props: {
    firmen: {
      type: Array,
    },
    vortraege: {
      type: Array,
    },
    id: {
      type: String,
    },
  },
  methods: {
    async addFavorit() {
      this.firma[0].notiz = this.firmenNotiz;
      await this.db.put('favorite', this.firma[0]);
      this.setData();
      navigator.vibrate(400);
      if (this.changed) {
        this.snackbar = true;
      }
      this.changed = false;
    },
    async removeFavorit() {
      await this.db.delete('favorite', this.firma[0].firmen_id);
      this.setData();
    },
    async updateFirma() {
      const tx = this.db.transaction('favorite', 'readwrite');
      const obj = await this.db.get('favorite', Number(this.id));
      obj.notiz = this.firmenNotiz;
      await this.db.put('favorite', obj);
      await tx.done;
      this.setData();
    },
    async setData() {
      const firma = await this.db.get('favorite', Number(this.id));
      firma
        ? ((this.clicked = true), (this.firmenNotiz = firma.notiz), (this.showButton = true))
        : ((this.clicked = false), (this.showButton = false));
    },
  },
  computed: {
    firma() {
      return this.firmen.filter((el) => el.firmen_id == this.id);
    },
    thisVortrag() {
      return this.vortraege.filter((el) => el.firmen_id == this.firma.map((el) => el.firmen_id));
    },
  },
  async created() {
    this.db = await openDB('favoriteFirmaDB');
    this.setData();
  },
};
</script>

<style lang="scss" scoped></style>
