<template>
  <form @submit.prevent="postUser">
    <p>
      <label for="first_name">Имя:</label>
      <input v-model="userInfo.first_name" id="first_name" type="text" placeholder="Vadim">
    </p>
    <p>
      <label for="last_name">Фамилия: </label>
      <input v-model="userInfo.last_name" id="last_name" type="text" placeholder="Perfilev">
    </p>
    <p>
      <label for="email">Email: </label>
      <input v-model="userInfo.email" id="email" type="text" placeholder="example@gmail.com">
    </p>
    <p>
      <label for="gender">Пол: </label>
      <input v-model="userInfo.gender" id="gender" type="text" placeholder="Male">
    </p>
    <p>
      <label for="ip_address">IP адрес: </label>
      <input v-model="userInfo.ip_address" id="ip_address" type="text" placeholder="127.0.0.1">
    </p>
    <input type="submit" id="btn_submit" value="Сохранить">
  </form>
</template>

<script>
export default {
  name: 'AddUser',
  props: ['user'],
  data() {
    return {
      userInfo: {
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        ip_address: ''
      }
    }
  },
  watch: {
    user() {
      this.userInfo = {...this.user}
    },
  },
  methods: {
    postUser() {
      let userInfo = this.userInfo
      this.userInfo = {}
      this.$emit('postUser', userInfo)
    }
  }
}
</script>

<style scoped>
* {
  font-family: sans-serif;
  font-size: 16px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px 0;
  width: 100%;
}

input {
  height: 22px;
  width: 96%;
  margin: 0 1%;
  padding: 1%;
  border: 1px solid black;
  border-radius: 5px;
}

label {
  margin: 1%;
}

#btn_submit {
  margin-top: 15px;
  height: 30px;
  width: 120px;
  background-color: #43a047;
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
}
</style>