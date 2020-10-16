<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Kota Fukui's Homepage!
        </h1>

        <p class="subheading font-weight-regular">
          これは実験場です。色々な機能を試します。
        </p>
      </v-col>
    </v-row>

    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>お品書き</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical>
        <v-tab>
          <v-icon left> mdi-access-point </v-icon>
          音楽再生
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              music player
            </v-card-text>
            <v-text-field placeholder="ここにフォーカスして遊んでください。" v-on:keydown.space="playSound('kick')" v-on:keydown.enter="playSound('snare')" v-on:keydown.17="playSound('crash')"></v-text-field>
            <v-btn
              @click="playSound('kick');"
              elevation="3"
            >kick</v-btn>
             <v-btn
              elevation="3"
              @click="playSound('snare');"
            >snare</v-btn>
            <v-btn
              elevation="3"
              @click="playSound('crash');"
            >crash</v-btn>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  
  data: () => ({}),
  methods:{
    playSound: function(name:string) {
      if(name==='kick'){
        const audio = new Audio(require('@/assets/sounds/edm-kick-01.wav'))
        audio.play();
      }else if(name==='snare'){
        const audio = new Audio(require('@/assets/sounds/edm-snare-01.wav'))
        audio.play();
      }else if(name==='crash'){
        const audio = new Audio(require('@/assets/sounds/edm-crash-04.wav'))
        audio.play();
      }
    },
  }
});
</script>
