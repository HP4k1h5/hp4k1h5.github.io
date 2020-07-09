<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link>
      <span style="font-size:20px;">|</span>
      <router-link to="/about">about</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 1%;
  background-color: #abc;
}

#nav {
  display: inline-flex;
  justify-content: space-between;
  background-color: #ddd;
}

#nav > * {
  padding: 2px;
}
</style>
