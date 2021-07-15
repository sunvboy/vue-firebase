import {taskRef,auth,usersRef} from "../config/firebase"
import { v4 as uuidv4 } from 'uuid';

export  default{
    showLoading({commit},isLoading = false){
        commit('SHOWLOADING',isLoading);
    },
    onListTask({commit}){
        let flag = false;
        commit('SHOWLOADING',true);

        taskRef.on('value',function(snapshot){
            if(flag === false){
                flag = true;
                commit('SHOWLOADING',false);
            }
            commit('SET_LIST_TASKS',snapshot.toJSON())

        })
    },
    onListUsers({commit}){
        let flag = false;
        commit('SHOWLOADING',true);
        usersRef.on('value',function(snapshot){
            if(flag === false){
                flag = true;
                commit('SHOWLOADING',false);
            }
            commit('SET_LIST_USERS',snapshot.toJSON())

        })
    },async detailTask({commit},id){
        commit('SHOWLOADING',true);
        try{
            var result = await taskRef.child(id).once('value')
            commit('SHOWLOADING',false);
            return {
                ok: true,
                error: null,
                task: result.val()
            }
        }catch(e){
            commit('SHOWLOADING',false);

            return {
                ok: false,
                error: e.message,
            }

        }
    }
    ,async createTask({commit},data){
        commit('SHOWLOADING',true);
        try{
            await taskRef.child(uuidv4()).set(data)
            
            commit('SHOWLOADING',false);
            return {
                ok: true,
                error: null
            }
        }catch(e){
            commit('SHOWLOADING',false);

            return {
                ok: false,
                error: e.message,
            }

        }
    },

    async register({commit},data){
        commit('SHOWLOADING',true);
        try{
            var result = await auth.createUserWithEmailAndPassword(data.email,data.password)
            await usersRef.child(result.user.uid).set({email: data.email})
            let objUser = {
                email: data.email,
                uid: result.user.uid,
            }
            commit('SET_currentUser',objUser)
            commit('SHOWLOADING',false);
            return {
                ok: true,
                error: null
            }
        }catch(e){
            commit('SHOWLOADING',false);
            return {
                ok: false,
                error: e.message,
            }

        }
    },

    async login({commit},data){
        commit('SHOWLOADING',true);
        try{
            var result = await auth.signInWithEmailAndPassword(data.email,data.password)
            let objUser = {
                email: data.email,
                uid: result.user.uid
            }
            commit('SET_currentUser',objUser)
            commit('SHOWLOADING',false);
            return {
                ok: true,
                error: null
            }
        }catch(e){
            commit('SHOWLOADING',false);
            return {
                ok: false,
                error: e.message,
            }

        }
    }
}