<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile v-for="item in menu" :to="item.route" :key="item.name" class="menu-title">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="text-orange">{{item.title}}</v-list-tile-title color>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title @click.stop="drawer = !drawer">
        <v-btn v-if="!drawer" flat class="open-menu"><img src="/static/images/menu-symbol.svg" alt="logo">Меню</v-btn>
        <v-btn v-if="drawer" flat class="close-menu"><img src="/static/images/menu-close-symbol.svg" alt="logo">Меню
        </v-btn>
      </v-toolbar-title>
      <v-flex class="text-xs-center logo-top">
        <a href="/" v-if="drawer"><img src="/static/images/stex-4.png"></a>
        <a href="/" v-if="!drawer"><img src="/static/images/stex-3.png"></a>
      </v-flex>
      <v-toolbar-items>
        <!--<v-btn flat>Перейти на официальный сайт</v-btn>-->
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex shrink>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
      <!--
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <v-btn
                icon
                large
                :href="source"
                target="_blank"
                slot="activator"
              >
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn icon large href="https://codepen.io/johnjleider/pen/qxQWda" target="_blank" slot="activator">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>-->
    </v-content>
    <v-footer app fixed>
      <span>2018 &copy; PalmiraTeam</span>
    </v-footer>
  </v-app>
</template>

<style>
  .open-menu img, .close-menu img {
    border-radius: 0;
    height: 40%;
    padding-right: 10px;
  }

  .logo-top img {
    height: 45px;
  }

  .list__tile--active {
    color: #F2A311;
  }

  .primary--text {
    color: #F2A311;
    font-size: 18px;
  }

  .navigation-drawer > .list:not(.list--dense) .list__tile {
    font-size: 17px;
  }

  .list__tile {
    color: white;
    text-transform: uppercase;
  }

  @media (max-width: 920px) {
    .navigation-drawer > .list:not(.list--dense) .list__tile {
      font-size: 11px;
    }
  }

  .container {
    padding: 0;
    /*background-color: #94dcc3;*/
  }

  @media only screen and (min-width: 960px) {
    .container {
      max-width: 100%;
    }
  }

  .shrink {
    width: 100%;
  }
</style>

<script>
  export default {
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    },
    computed: {
      menu: function () {
        return this.$store.getters.getMenu
      }
    }
  }
</script>
