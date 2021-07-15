import Vue from 'vue';

export  default{
    SHOWLOADING(state,isLoading){
        state.isLoading = isLoading;
    },
    SET_LIST_TASKS(state,data){
        state.listTasks = data;
    },
    SET_LIST_USERS(state,data){
        state.listUsers = data;
    },
    SET_currentUser(state,user){
        state.currentUser = user
    }
}