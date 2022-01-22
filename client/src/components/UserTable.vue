<template>
  <div class="wrapper">
    <table class="users">
      <tr id="header">
        <th id="first_name">Имя</th>
        <th id="last_name">Фамилия</th>
        <th id="email">Email</th>
        <th id="gender">Пол</th>
        <th id="ip_address">IP адрес</th>
        <th colspan="2">Изменить</th>
      </tr>
      <tr v-for="user in users" :key="user.first_name">
        <th>{{ user.first_name }}</th>
        <th>{{ user.last_name }}</th>
        <th>{{ user.email }}</th>
        <th>{{ user.gender }}</th>
        <th>{{ user.ip_address }}</th>
        <th>
          <button
              type="button"
              class="btn update"
              @click="showModal(user)"/>
        </th>
        <th>
          <button
              type="button"
              class="btn delete"
              @click="deleteUser(user)"/>
        </th>
      </tr>
    </table>
    <ModalWindow
        v-show="isModalVisibleUpdate"
        @close="closeModalUpdate"
        @postUser="postUser"
        :user="user"
    >
      <template v-slot:header>
        Изменить пользователя
      </template>
    </ModalWindow>
  </div>
</template>

<script>

import ModalWindow from "./ModalWindow";
import {mapActions, mapGetters} from "vuex";

export default {
  props: ['users'],
  name: 'UserTable',
  components: {ModalWindow},
  data() {
    return {
      user: null,
    }
  },
  computed: {
    ...mapGetters(['allUsers', 'isModalVisibleUpdate']),

  },
  methods: {
    ...mapActions(['getUsers', 'editUser', 'deleteUser', 'showModalUpdate', 'closeModalUpdate']),
    showModal(user) {
      this.showModalUpdate()
      this.user = user;
    },
    postUser(userInfo) {
      this.editUser(userInfo)
      this.closeModalUpdate()
    },
  },
  async mounted() {
    await this.getUsers()
  },
}
</script>

<style scoped>
.wrapper {
  text-align: center;
}


table {
  font-family: Sans-Serif, serif;
  font-size: 14px;
  text-align: left;
  border-collapse: collapse;
  border: 2px solid black;

}

#header {
  font-size: 18px;
  background-color: cornflowerblue;
}

#header th {
  padding: 10px;
}

th {
  padding: 5px 5px;
  border: 2px solid black;
}

img {
  height: 36px;
}

.btn {
  width: 36px;
  height: 36px;
  background-size: 34px 34px;
  border: none;
  background-color: #FFFFFF;
}

.update {
  background-image: url("../assets/update.png");
}

.delete {
  background-image: url("../assets/delete.png");
}
</style>