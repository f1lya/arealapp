<template>
  <div id="header">
    <div id="nav">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/about">About</router-link>
    </div>
  </div>
</template>
<style scoped>
#header {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;
}

.link {
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: #111;
  padding: 0 5px;
}

</style>