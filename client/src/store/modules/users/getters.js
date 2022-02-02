const getters = {
    allUsers(state) {
        return state.users
    },
    userDetails: state => id => {
        return state.users.find(user => user.id == id)
    }
}
export default getters