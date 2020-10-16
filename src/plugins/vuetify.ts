import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey.darken1,
        secondary: colors.blueGrey.lighten4, 
        accent: colors.pink.base, 
      },
    },
  },
});
