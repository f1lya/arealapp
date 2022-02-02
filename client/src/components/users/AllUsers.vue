<template>
  <div class="wrapper">
    <div class="table">
      <div class="headTable">
        <div class="headTable_info">
          <span class="id">ID</span>
          <span>Имя</span>
          <span>Фамилия</span>
          <span class="email">Email</span>
          <span>Пол</span>
          <span>IP адрес</span>
        </div>
        <div class="headTable_edit">
        </div>
      </div>
      <div class="bodyTable" v-for="user in users" :key="user.id">
        <router-link
            class="bodyTable_info"
          :to="{
          name: 'details',
          params: {id: user.id}}">
          <span class="id">{{ user.id }}</span>
          <span>{{ user.first_name }}</span>
          <span>{{ user.last_name }}</span>
          <span class="email">{{ user.email }}</span>
          <span>{{ user.gender }}</span>
          <span>{{ user.ip_address }}</span>
        </router-link>
        <div class="bodyTable_edit">
          <button
              type="button"
              class="btn update"
              @click="showModal(user)"/>
          <button
              type="button"
              class="btn delete"
              @click="deleteUser(user)"/>
        </div>
      </div>
    </div>

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

import ModalWindow from "../ModalWindow";
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

.table {
  min-width: 920px;
}

.headTable, .bodyTable {
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightslategray;
}

.headTable_info, .bodyTable_info {
  display: flex;
  flex: 1;
  text-decoration: none;
  color: #111;
}

.headTable_info {
  height: 32px;
  font-size: 24px;
  font-weight: 600;
}

.headTable_edit, .bodyTable_edit {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2 1 100px;
}

.id {
  flex: 1 1 50px;
}

.email {
  flex: 2 1 150px;
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
  background-image: url("../../assets/update.png");
}

.delete {
  background-image: url("../../assets/delete.png");
}
</style>