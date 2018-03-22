<template>
  <v-container text-xs-center>
    <v-parallax src="/static/images/back2.jpg" height="250">
      <v-layout column align-center justify-center>
        <h1 class="white--text">Часто задаваемые вопросы:</h1>
        <h2 class="white--text">как это работает</h2>
      </v-layout>
    </v-parallax>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text class="px-0">Test faq</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card >
          <v-card-text class="px-0">
            <v-expansion-panel>
              <v-expansion-panel-content v-for="(item,i) in faqs" :key="i">
                <div slot="header" class="subheading orange--text"><strong >{{item.question}}</strong></div>
                <v-card>
                  <v-card-text v-html="item.answer">
                   <!-- {{item.answer}}-->
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'FAQ',
    data () {
      return {
        msg: 'Faq'
      }
    },
    computed: {
      faqs: function () {
        return this.$store.getters.getFaqs
      }
    }
  }
</script>

<style scoped>
  .container {
    /*background-color: green;*/
    /*padding: 10px;*/
  }
</style>
