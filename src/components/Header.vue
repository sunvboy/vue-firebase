<template>
    <header>
        <div class="container">
            <ul>
                <li><router-link to="/">Trang Chủ</router-link></li>
                <li><router-link to="/create">Tạo Task</router-link></li>
            </ul>
            <ul class="right">
                <li><router-link to="login">{{currentUser.email}}</router-link></li>
                <li><a href="/" v-on:click.prevent="handleLogout">Đăng xuất</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
import {mapState} from 'vuex'
import {auth} from '../config/firebase'
export default {
    name: 'app-header',
    data() {
        return {
        }
    },
    computed:{
        ...mapState(['currentUser']),
       
    },
    methods: {
        handleLogout() {
            if(window.confirm('Ban co chac chan muon dang xuat?')) {
                auth.signOut();

            }
        }
    }
    
}
</script>