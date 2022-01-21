const actions = {
    async showModalAdd(context) {
        context.commit("showModalAdd")
    },
    async closeModalAdd(context) {
        context.commit("closeModalAdd")
    },
    async showModalUpdate(context) {
        context.commit("showModalUpdate")
    },
    async closeModalUpdate(context) {
        context.commit("closeModalUpdate")
    },
}

export default actions
