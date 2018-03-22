<template>
  <v-container text-xs-center>
    <v-parallax src="/static/images/back2.jpg" height="250">
      <v-layout column align-center justify-center>
        <h1 class="white--text">Контакты</h1>
        <h2 class="white--text">Вы можете связаться со мной любым из перечисленных способов</h2>
      </v-layout>

    </v-parallax>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3 text-xs-left>
        <v-list>
          <v-list-tile v-for="(contact, i) in contacts" :key="i">
            <a class="list__tile list__tile--link" :href="contact.url">
              <v-list-tile-action>
                <v-icon>{{contact.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>{{contact.name}}</v-list-tile-content>
            </a>
          </v-list-tile>
        </v-list>
      </v-flex>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Contacts',
    data () {
      return {
        msg: 'Contacts'
      }
    },
    computed: {
      contacts: function () {
        return this.$store.getters.getContacts
      }
    }
  }
</script>

<style scoped>
  .list__tile__content {
    padding-top: 5px;
  }

  .list__tile__action, .list__tile__action .input-group--selection-controls {
    min-width: 45px;
  }

  .list__tile {
    width: 100%;
  }
</style>
