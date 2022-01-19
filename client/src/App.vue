<template>
  <div id="app">
    <div class="header">
      <p>Список пользователей</p>
      <button type="button" class="btn" @click="showModal"/>
    </div>
    <ModalWindow v-show="isModalVisible" @close="closeModal" @postUser="postUser">
      <template v-slot:header>
        Добавить нового пользователя
      </template>
    </ModalWindow>
    <UserTable :users="USERS"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import UserTable from "./components/UserTable";
import ModalWindow from "./components/ModalWindow";


export default {
  name: 'App',
  components: {
    UserTable,
    ModalWindow,
  },
  data() {
    return {
      isDesc: false,
      isModalVisible: false,
    }
  },
  //Получение доступа к списку пользователей внутри компонента
  computed: {
    ...mapGetters(['USERS']),
  },
  methods: {
    ...mapActions(['getUsers', 'addUser']),
    //Методы открытия и закрытия модального окна
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    postUser(userInfo) {
      this.addUser(userInfo)
      this.closeModal()
    }
  },

};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header p {
  font-family: sans-serif;
  font-size: 28px;
  font-weight: 600;
  margin-right: 10px;
}

.header button {
  height: 48px;
  width: 48px;
  border: none;
  background-color: #FFFFFF;
  background-image: url('assets/add.png');
}
</style>
