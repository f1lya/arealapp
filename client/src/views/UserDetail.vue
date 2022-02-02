<template>
  <div class="wrapper">
  <div class="card">
      <div v-for="(field, key) in user" :key="field">
        <span class="key">{{key}}:</span> {{field}}
      </div>
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
  justify-content: center;
  align-items: center;
}

.card {
  margin-top: 40px;
  padding: 20px;
  border: 1px solid lightslategray;
  border-radius: 10px;
  font-size: 26px;
}

.key {
  font-weight: 600;
}

</style>