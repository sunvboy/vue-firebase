<template>
<div class="app">
      
        <AppHeader></AppHeader>

        <!-- Content -->
        
        <main class="container">
            <div class="row">
                <div class="col-md-9">
                   <router-view></router-view>
                </div>
                <div class="col-md-3">
                    <div class="side-bar">
                        <div class="page-title">
                            <span>Thành viên</span>
                        </div>
                        <ul class="list-members">
                            <li v-for="(v,key) in getListUsers.arrUserGetter" :key="key">@{{v.email.split('@')[0]}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from '../components/Header.vue'
export default {
  name: 'app-KanBanBoard',
  components:{
      AppHeader
  },
  data () {
    return {
    }
  },
  computed:{
      ...mapGetters(['getListUsers'])
  }

}
</script>

<style>

</style>
