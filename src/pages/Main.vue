<template>
  <v-container text-xs-center>
    <!-- <iframe
       width="560"
       height="315"
       src="https://www.youtube.com/embed/j8w6iWV6H7U?rel=0"
       frameborder="0"
       allow="autoplay; encrypted-media"
       allowfullscreen
       class="video-wrapper"></iframe>
 <v-carousel hide-controls hide-delimiters>
   <v-carousel-item
     v-for="(item, i) in items"
     :src="item.src"
     :key="i"
     transition="fade">

     <v-card-text>
       <p class="headline">УНИКАЛЬНОЕ ПРЕДЛОЖЕНИЕ ДЛЯ ВСЕХ ЦЕНИТЕЛЕЙ КРИПТОВАЛЮТЫ!</p>
       <p class="title orange--text">ПОЛУЧАЙТЕ ЕЖЕМЕСЯЧНО РАСТУЩУЮ ПРИБЫЛЬ, ДАЖЕ КОГДА ЦЕНА НА МОНЕТУ НЕ РАСТЕТ!</p>

     </v-card-text>

   </v-carousel-item>

 </v-carousel>
 <!-- <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <v-parallax src="/static/images/2.jpg" height="200">

 </v-parallax>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
--!>
<!-- <v-layout row wrap>
   123
 </v-layout>
 <v-layout row wrap>
   <v-flex xs12>
     <v-card dark color="primary">
       <v-card-text class="px-0">12 простая проверка основной строки</v-card-text>
     </v-card>
   </v-flex>
   <v-flex xs6 v-for="i in 2" :key="`6${i}`">
     <v-card dark color="secondary">
       <v-card-text class="px-0">1111111111111111111111111111111111111111111111111111111111111111</v-card-text>
     </v-card>
   </v-flex>
   <v-flex xs4 v-for="i in 3" :key="`4${i}`">
     <v-card dark color="primary">
       <v-card-text class="px-0">12 простая проверка основной строки</v-card-text>
     </v-card>
   </v-flex>
 </v-layout>
 ​
 <v-layout row wrap>
   <v-flex xs12 sm6 md6 order-md1 order-sm1>
     <v-card dark tile flat color="red darken-2">
       <v-card-text>#1</v-card-text>
     </v-card>
   </v-flex>
   <v-flex xs12 sm6 md6 order-md2 order-sm2>
     <v-card dark tile flat color="deep-orange lighten-1">
       <v-card-text>#2</v-card-text>
     </v-card>
   </v-flex>
 </v-layout>-->
    <v-card dark class="js-carousel css-carousel" :style="getStyle">
      <animated-tada>
        <div v-if="showWithDelay">
          <h1>See my awesome animation</h1>
        </div>
      </animated-tada>
      <animated-flip>
        <div v-if="showWithDelay">
          <h1>!!!!!!!!!!See my awesome animation</h1>
        </div>
      </animated-flip>
      <animated-bounce-in>
        <div v-if="showWithDelay">
          <h1>%%%%%%%%%%%%%%%%See my awesome animation</h1>
        </div>
      </animated-bounce-in>
      <transition enter-active-class="bounceIn">
        <v-card-text v-if="showWithDelay">
          <p class="headline">
            УТП (УНИКАЛЬНОЕ ТОРГОВОЕ ПРЕДЛОЖЕНИЕ) ДЛЯ КРИПТОЭНТУЗИАСТОВ И ГРАМОТНЫХ ИНВЕСТОРОВ!</p>

          <p class="title orange--text">
            СТАНЬТЕ СОУЧРЕДИТЕЛЕМ БИРЖИ! ПОЛУЧАЙТЕ ЕЖЕМЕСЯЧНО СВОЙ ПРОЦЕНТ ОТ КАЖДОЙ ТОРГОВОЙ ОПЕРАЦИИ! ЛЮБАЯ КУПЛЯ И ПРОДАЖА ПРИНОСЯТ ВАМ ПРИБЫЛЬ!</p>

        </v-card-text>

      </transition>
      <!--<v-card-text v-else>
        <p class="headline">
          !!!УТП (УНИКАЛЬНОЕ ТОРГОВОЕ ПРЕДЛОЖЕНИЕ) ДЛЯ КРИПТОЭНТУЗИАСТОВ И ГРАМОТНЫХ ИНВЕСТОРОВ!</p>

        <p class="title orange&#45;&#45;text">
          @@@СТАНЬТЕ СОУЧРЕДИТЕЛЕМ БИРЖИ! ПОЛУЧАЙТЕ ЕЖЕМЕСЯЧНО СВОЙ ПРОЦЕНТ ОТ КАЖДОЙ ТОРГОВОЙ ОПЕРАЦИИ! ЛЮБАЯ КУПЛЯ И ПРОДАЖА ПРИНОСЯТ ВАМ ПРИБЫЛЬ!</p>

      </v-card-text>-->
      <v-card-text>
        <div class="wrapper">
          <div :class="logoClass" @click="showLogoAnimation = !showLogoAnimation"/>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/j8w6iWV6H7U?rel=0&controls=1&showinfo=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>

          </iframe>
        </div>
      </v-card-text>
      <v-card-text> TEST<br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </v-card-text>
      <hr/>
      <v-card-text data-aos="fade-zoom-out" data-aos-duration="600"> TEST2<br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </v-card-text>
      <hr/>
      <v-card-text data-aos="slide-up" data-aos-duration="600"> TEST3<br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <div data-aos="zoom-in-up" >
            <h1>See my awesome animatio@@@@@@@@@@@@@@@@n</h1>
          </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div data-aos="fade-down">
          <h1>See my awesome animation!!!</h1>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </v-card-text>
      <h1>просто тексмт</h1>
    </v-card>
  </v-container>

</template>

<script>
  export default {
    name: 'Main',
    data () {
      return {
        msg: 'component name',
        currentBg: 0,
        showWithDelay: false,
        intevals: {
          changeBackGround: 0
        },
        timers: {
          changeBackground: 600
        },
        showLogoAnimation: false,
        items: [
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg'
          },
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
          },
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg'
          },
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
          }
        ]
      }
    },
    mounted () {
      this.intevals.changeBackGround = setInterval(() => {
        let arrCount = this.items.length
        if (this.currentBg < arrCount - 1) {
          this.currentBg++
        } else {
          this.currentBg = 0
        }
      }, this.timers.changeBackground)
      setTimeout(() => {
        this.showLogoAnimation = true
      }, 0)
      setTimeout(() => {
        this.showWithDelay = true
      }, 0)
    },
    computed: {
      getStyle: function () {
        let currentBgUrl = this.items[this.currentBg].src
        let style = `background-image: url('${currentBgUrl}')`
        return style
      },
      logoClass: function () {
        return this.showLogoAnimation ? 'logo logo-animate' : 'logo'
      }
    },
    destroyed () {
      console.log('Подчищаем за собой')
      clearInterval(this.intevals.changeBackGround)
    }
  }
</script>

<style scoped="">
  .fade-enter-active, .fade-leave-active {
    transition: opacity 4.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  {
    opacity: 0;
  }

  .logo-animate {
    transition: all 1s ease;
    transform: rotate(720deg) scale(9);
  }

  .wrapper {
    position: relative;
    margin: 0 auto;
    max-width: 360px;
  }

  .logo {
    width: 20px;
    height: 20px;
    position: absolute;
    left: -5px;
    top: 150px;
    background-image: url(/static/images/ste-coin.png);
    background-size: cover;
  }

  .css-carousel {
    transition: background-image 0.4s ease-in-out;
  }

  .jumbotron__wrapper {
    opacity: 0.1;
  }

  .video-wrapper {
    position: absolute;
    top: 180px;
    z-index: 1;
  }
</style>
