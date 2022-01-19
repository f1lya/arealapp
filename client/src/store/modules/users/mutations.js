const mutations = {
    getUsers(state, users) {
        state.users = users
    },
    addUser(state, user) {
        state.users.push(user)
    },
    editUser(state, user) {
        const userIndex = state.users.findIndex(oldUser => oldUser._id === user._id)
        state.users[userIndex] = user
    },
    deleteUser(state, user) {
        const userIndex = state.users.findIndex(oldUser => oldUser._id === user._id)
        state.users.splice(userIndex, 1)
    },
}

export default mutations
