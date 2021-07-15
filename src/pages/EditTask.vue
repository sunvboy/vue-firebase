<template>
  <div class="main-content">
    <div class="page-title">
      <span>Create New Backlog Item</span>
    </div>
    <div class="create-board">
      <div class="row">
        <div class="col-xs-12 input-group">
          <label>Tiêu đề</label>
          <input type="text" class="form-control" v-model="task.title" />
        </div>
        <div class="col-xs-12 input-group">
          <label>Mô tả tác vụ</label>
          <textarea
            type="text"
            class="form-control"
            v-model="task.description"
          ></textarea>
        </div>
        <div class="col-xs-12 input-group">
          <label>Tên Project</label>
          <input type="text" class="form-control" v-model="task.name" />
        </div>
        <div class="col-xs-6 input-group">
          <label>Ngày giờ bắt đầu</label>
          <datetime
            type="datetime"
            v-model="task.start_at"
            use12-hour
          ></datetime>
        </div>
        <div class="col-xs-6 input-group">
          <label>Deadline</label>
          <datetime type="datetime" v-model="task.end_at" use12-hour></datetime>
        </div>
        <div class="col-xs-6 input-group">
          <label>Trang thái</label>
          <select class="input-group input-select" v-model="task.status">
            <option
              v-for="el in STATUS_CONFIG"
              :key="el.value + el.text"
              :value="el.value"
              >{{ el.text }}</option
            >
          </select>
        </div>
        <div class="col-xs-6 input-group">
          <label>Độ ưu tiên</label>
          <select class="input-group input-select" v-model="task.priority">
            <option
              v-for="el in PRIORITY_CONFIG"
              :key="el.value + el.text"
              :value="el.value"
              >{{ el.text }}</option
            >
          </select>
        </div>
        <div class="col-xs-6 input-group">
          <label>Giai đoạn</label>
          <select class="input-group input-select" v-model="task.team">
            <option
              v-for="el in TEAM_CONFIG"
              :key="el.value + el.text"
              :value="el.value"
              >{{ el.text }}</option
            >
          </select>
        </div>
        <div class="col-xs-6 input-group">
          <label>Thành viên đảm nhận</label>
          <select class="input-group input-select" v-model="task.author">
            <option value="" disabled>Thành viên</option>
            <option
              :value="v.email"
              v-for="(v, key) in getListUsers.arrUserGetter"
              :key="key"
              >@{{ v.email.split("@")[0] }}</option
            >
          </select>
        </div>
        <div class="col-xs-12 btn-submit-create">
          <button
            class="btn btn-success"
            type="submit"
            @click.prevent="handleUpdate"
          >
            Tạo mới một BackLog
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { taskRef } from "../config/firebase";

import { STATUS_CONFIG, PRIORITY_CONFIG, TEAM_CONFIG } from "../config/const";
export default {
  name: "app-editTask",
  data() {
    return {
      task: {
        title: "",
        description: "",
        name: "",
        start_at: null,
        end_at: null,
        status: 1,
        priority: 1,
        team: 1,
        author: ""
      },
      STATUS_CONFIG,
      PRIORITY_CONFIG,
      TEAM_CONFIG,
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapGetters(["getListUsers"])
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
      this.fetchTasks();
    }
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    ...mapActions(["detailTask", "showLoading"]),
    fetchTasks() {
      this.detailTask(this.id).then(res => {
        if (res.ok) {
          this.task = res.task;
        } else {
        }
      });
    },
    async handleUpdate() {
      this.showLoading(true);
      let result = await taskRef.child(this.id).update(this.task);
      this.showLoading(false);
      alert("Cap nhat thanh cong");
    }
  }
};
</script>

<style>
.vdatetime .vdatetime-input {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
</style>
