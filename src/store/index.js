import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false,
    feed: [
      {
        id: 0,
        user_id: 0,
        display_name: 'John Cena',
        desc: 'Look at my car...',
        image: 'https://www.pwmania.com/wp-content/uploads/2018/12/john-cena2-696x392.jpg',
        timestamp: 1551052800
      },
      {
        id: 1,
        user_id: 1,
        display_name: 'Scooby Doo',
        desc: 'asdf',
        image: 'placeholder',
        timestamp: 1551052800
      },
      {
        id: 2,
        user_id: 2,
        display_name: 'John Cena',
        desc: 'wrestler',
        image: 'placeholder',
        timestamp: 1551052800
      },
    ]
  },
  mutations: {
    isAuthenticated (state) {
      if (localStorage.getItem('jwt') != null) {
        state.isAuthenticated = true
      } else {
        state.isAuthenticated = false
      }
    },
    login (state, token) {
      state.isAuthenticated = true;
      this.$store.commit('login', token)
      this.$router.push('/')
    },
    logout (state) {
      state.isAuthenticated = false;
      localStorage.removeItem('jwt');
      this.$router.push('/login');
    }
  }
})
