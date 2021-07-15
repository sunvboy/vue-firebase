<template>
  <div class="main-content">
    <div class="page-title">
      <span>Kangban Board</span>
      <router-link to="/create" class="create-new-item">Create New Item</router-link>
    </div>
    <div class="wrapper-board">
      <div class="row">
        <div class="item">
          <div class="col-title">Todo</div>

          <backlogsItem
            v-for="item in getFilterTask.todo"
            :key="item.id"
            :item="item"
          ></backlogsItem>
        </div>

        <div class="item">
          <div class="col-title">In Process</div>
          <backlogsItem
            v-for="item in getFilterTask.inProgress"
            :key="item.id"
            :item="item"
          ></backlogsItem>
        </div>

        <div class="item">
          <div class="col-title">Bugs</div>
          <backlogsItem
            v-for="item in getFilterTask.toVerify"
            :key="item.id"
            :item="item"
          ></backlogsItem>
        </div>

        <div class="item">
          <div class="col-title">Done</div>
           <backlogsItem
            v-for="item in getFilterTask.done"
            :key="item.id"
            :item="item"
          ></backlogsItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backlogsItem from "../components/BacklogsItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "app-listTasks",
  components: { backlogsItem },
  computed: {
    ...mapGetters(["getFilterTask"])
  },
  data() {
    return {};
  }
};
</script>

<style></style>
