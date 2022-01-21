const actions = {
    async getUsers(context) {
        const res = await fetch(
            'http://localhost:3000/api/users');
        const users = await res.json();
        context.commit('getUsers', users)
    },

    async addUser(context, userInfo) {
        const res = await fetch('http://localhost:3000/api/users/',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userInfo)
            })
        const newUser = await res.json()
        context.commit("addUser", newUser);
    },

    async editUser(context, userInfo) {
        const url = 'http://localhost:3000/api/users/' + userInfo.id
        await fetch(url, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        context.commit("editUser", userInfo)
    },

    async deleteUser(context, userInfo) {
        const url = 'http://localhost:3000/api/users/' + userInfo.id
        await fetch(url, {
            method: 'delete'
        })
        context.commit("deleteUser", userInfo)
    }

}

export default actions