<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/addCategories">Add Categories</router-link> |
      <router-link to="/addItems">Add Items</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  letter-spacing: -1px;
  transition: opacity 0.8s;
  font-family: "Open Sans", sans-serif;
}
h2 {
  font-family: "Times New Roman", sans-serif;
}
button {
  border: 1px solid #333;
  background-color: #333;
  padding: 10px 30px;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  color: #eaeaea;
  margin-top: 10px;
  float: right;
}
button:hover {
  color: #fff;
  outline: 0;
  opacity: 0.7;
}
#bulk-add-items-form input {
  width: 20%;
}
textarea {
  vertical-align: bottom;
  height: 41px;
}
.item-to-add {
  display: block;
  border: 1px solid #333;
  margin-bottom: 5px;
}
input:not([id="category-image"]),
select,
textarea {
  border: 1px solid #808080;
  padding: 12px;
  width: 50%;
}
input[id="itemImage"] {
  border: 1px solid white;
  padding: 0px;
}
.col-05 {
  width: 4%;
}
.col-1 {
  width: 8.33%;
}
.col-1-5 {
  width: 11.5%;
}
.col-2 {
  width: 16.66%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 30%;
}
.col-5 {
  width: 41.66%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58.33%;
}
.col-8 {
  width: 66.66%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 83.33%;
}
.col-11 {
  width: 91.66%;
}
.col-12 {
  width: 100%;
}
[class*="col"] {
  float: left;
  border: 0.1px solid white;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>
