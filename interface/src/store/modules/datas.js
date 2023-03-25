import axios from '../../api/axios.js'

// state data
const state = {
    mes: "",
    res:"",
};

// mutate state
const mutations = {
    setData(state, mes) {
        state.data = mes;
    },
    setRes(state, res) {
        state.res = res;
    },
};


// action -> define app data logic
const actions = {
   
    send({ commit }) {
        axios.post('/Calculate', mes)
            .then(res => {
                console.log(res.data)
                commit('setRes', res.data)
                
            })
    },
    recieved(){
        axios.post('/sendRecieved')
        .then(res=>{
        alert('recieved')
        }
        )
    }
};

// getters return requested data
const getters = {
    // get all assignment
    data(state) {
        return state.mes
    },
    // get assignment list -> assignment menu
};

export default {
    state,
    mutations,
    actions,
    getters,
};