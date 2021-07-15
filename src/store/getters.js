import { STATUS_CONFIG } from '../config/const'
import state from './state';
export default {
    getFilterTask: (state) => {
        const listTask = state.listTasks;
        let todo = [], inProgress = [], toVerify = [], done = []
        for (let key in listTask) {
            let value = listTask[key]
            let data = {
                id: key,
                ...value
            }
            if (value.status === STATUS_CONFIG.TODO.value) todo.push(data);
            else if (value.status === STATUS_CONFIG.IN_PROGRESS.value) inProgress.push(data);
            else if (value.status === STATUS_CONFIG.TO_VERIFY.value) toVerify.push(data);
            else done.push(data);
        }
        return {
            todo, inProgress, toVerify, done
        }

    },
    getListUsers: (state) => {
        const listUsers = state.listUsers;
        let arrUserGetter = []
        for (let key in listUsers) {
            let value = listUsers[key]
            let data = {
                ...value
            }
            arrUserGetter.push(data)
        }
        return {
            arrUserGetter
        }

    },
    isLogin: (state) => {
        if (state.currentUser.email !== '' && state.currentUser.uid !== '') {
            return true;

        } else {
            return false

        }
    }

}