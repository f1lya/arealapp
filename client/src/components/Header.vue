<template>
  <div id="header">
    <div id="nav">
      <router-link class="link" to="/">Home</router-link>
    </div>
  </div>
</template>
<style scoped>
#header {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #43a047;
  box-shadow: 0 4px 8px 0 rgba(12, 43, 4, 0.4);
}

.link {
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  padding: 0 5px;
}

</style>