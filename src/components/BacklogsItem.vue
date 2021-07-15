<template>
  <div class="backlogs-item">
    <div class="project"><router-link :to="{name: 'edit-task-page',params: {id: item.id}}">{{ item.name }}</router-link></div>
    <div class="title">{{ item.title }}</div>
    <div class="due-date">
      Deadline: <span>{{ dateFormat }}</span>
    </div>
    <div class="phase">Giai đoạn: <span>{{getTeam}}</span></div>
    <div class="assign">@{{ item.author.split('@')[0] }}</div>
  </div>
</template>

<script>
import {TEAM_CONFIG} from '../config/const'
export default {
  name: "app-listTasks",
  props: {
    item: { type: Object, default: null }
  },
  data() {
    return {};
  },
  computed:{
      dateFormat(){
          if(this.item) return new Date(this.item.end_at).toLocaleString()
          return '';
      },
      getTeam(){
          if(this.item.team === TEAM_CONFIG.FRONT_END.value) return TEAM_CONFIG.FRONT_END.text
          else if(this.item.team === TEAM_CONFIG.BACK_END.value) return TEAM_CONFIG.BACK_END.text
          else if  (this.item.team === TEAM_CONFIG.DESIGNER.value) return TEAM_CONFIG.DESIGNER.text



      }
  }
};
</script>

<style></style>
