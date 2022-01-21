<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Header
        </slot>
        <button type="button" class="btn-close" @click="close">
          x
        </button>
      </header>
      <section class="modal-body">
        <AddUser
            @postUser="postUser"
            :user="user"
        />
      </section>
    </div>
  </div>
</template>

<script>
import AddUser from "./UserForm";

export default {
  props: ['user'],
  name: 'modal',
  components: {
    AddUser,
  },
  methods: {
    close() {
      this.$emit('close')
    },
    postUser(userInfo) {
      this.$emit('postUser', userInfo)
    },
    updateUser(userInfo) {
      this.$emit('updateUser', userInfo)
    }
  },
};
</script>

<style>
* {
  font-family: sans-serif;
  font-size: 16px;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

.modal-header {
  display: flex;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

</style>