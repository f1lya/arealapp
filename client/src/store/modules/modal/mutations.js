const mutations = {
    showModalAdd(state) {
        state.isModalVisibleAdd = true
    },
    closeModalAdd(state) {
        state.isModalVisibleAdd = false
    },
    showModalUpdate(state) {
        state.isModalVisibleUpdate = true
    },
    closeModalUpdate(state) {
        state.isModalVisibleUpdate = false
    },
}

export default mutations