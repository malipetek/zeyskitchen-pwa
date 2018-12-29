<template>
  <div>
    {{ user }}
    <v-container v-if="!user" fluid>
      <v-layout>
        <v-flex>
          <h1 style="text-transform: capitalize;"> Hesabım {{$route.params.action}} </h1>
        </v-flex>
      </v-layout>
        <v-divider></v-divider>
      <v-layout>

        <v-flex>
          <v-btn color="primary"> Giriş Yap </v-btn>
          <v-btn color="secondary"> Hesap Oluştur </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-if="user">

    </v-container>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<script>
// $route.params.action
export default {
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>
