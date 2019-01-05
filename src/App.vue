<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list
      >
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.handle"
          :key="i"
          ripple
        >
          <v-list-tile-action :class="'text--'+item.color.replace(' ','-')">
            <v-icon >{{item.icon}}</v-icon>
          </v-list-tile-action>
            <v-list-tile-title >
              <div class="subheading">{{item.title}} </div>
            </v-list-tile-title>
        </v-list-tile>        
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      color="primary"
      class="white--text"
      dark
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-btn icon class="white--text" @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn> -->
      <!-- <v-btn class="white--text" icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn> -->
      <!-- <v-btn class="white--text" icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
      <router-link to="/">
          <v-toolbar-title class="white--text">   {{title}} </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
       <v-avatar
            :size=45
            color="blue lighten-1"
            @click.stop="rightDrawer = !rightDrawer"
          >
            <img src="@/assets/def-avatar.png" alt="avatar">
          </v-avatar>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      right
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
             <v-avatar
            :size=40
            color="blue lighten-1"
            @click.stop="rightDrawer = !rightDrawer"
          >
            <img src="@/assets/def-avatar.png" alt="avatar">
          </v-avatar>
          </v-list-tile-action>
          <v-list-tile-title class="px-2"> <h3> Hesabım </h3> </v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
      
      <v-list>
        <v-list-tile to="/hesap/" v-if="user">
          <v-list-tile-action>
            <v-icon> settings </v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="">  Hesabım  </v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-else="" to="/hesap/sign-in">
          <v-list-tile-action>
            <v-icon> person </v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="">  Giriş Yap/ Kayıt Ol </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="true" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    son10tarif () {
      return this.$store.getters.son_10_tarif
    }
  },
  data () {
    return {
      user: null,
      clipped: true,
      drawer: false,
      rightDrawer: false,
      items: [{
        icon: 'library_books',
        title: 'Tarif Defterim',
        color: 'orange lighten-1',
        handle: 'saved'
        }, { 
        icon: 'search',
        title: 'Tarif Ara',
        color: 'blue lighten-1',
        handle: 'search'
      }],
      title: 'Yemek Tarifleri'
    }
  },
  name: 'App'
}
</script>
