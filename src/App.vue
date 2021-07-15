<template>
  <div id="app">
    <router-view></router-view>
    <AppLoading v-if="isLoading" :class="{ show: isLoading }" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import AppLoading from "./components/Loading.vue";
export default {
  name: "app",
  components: {
    AppLoading
  },
  computed: {
    ...mapState(["isLoading"]),
    ...mapGetters(["isLogin"])
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("onListTask");
    this.$store.dispatch("onListUsers");

  }
};
</script>

<style></style>
