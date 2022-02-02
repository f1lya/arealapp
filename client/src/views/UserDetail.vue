<template>
  <div class="wrapper">
    <p class="header">
      Подробная информация
    </p>
  <div class="card">
      <p v-for="(field, key) in user" :key="field">
        <span class="key">{{key}}:</span> {{field}}
      </p>
  </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex"

export default {
  computed: {
    ...mapGetters(['userDetails']),
    user() {
      return this.userDetails(this.$route.params.id)

    }
  },
}
</script>
<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  font-family: sans-serif;
  font-size: 28px;
  font-weight: 600;
}

.card {
  padding: 0 20px;
  border: 1px solid lightslategray;
  border-radius: 10px;
  font-size: 26px;
}

.key {
  font-weight: 600;
}

</style>