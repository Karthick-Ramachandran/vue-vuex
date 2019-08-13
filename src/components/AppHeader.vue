<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Home</router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="hori">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <a v-else @click="login" class="ui item">login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"])
};
</script>

<style scoped>
.hori {
  display: flex;
}
</style>