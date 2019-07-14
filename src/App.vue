<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link"
              :to="{name: 'ShowBlog'}"
               exact>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              :to="{name: 'CreateBlog',}"
               exact>
              Add Blog
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

      <main>
        <router-view/>
      </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch('getPosts');
  },
};
</script>

<style>

main{
  background:#aaa;
  margin: 0 auto;
  padding: 40px;
  min-height: 300px;
  width:80%;
  box-sizing: border-box;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
}
header {
  position: relative;
  background-color: rgb(131, 120, 120);
  width: 100%;
  margin: 0 auto;
  text-align: center;

}
ul {
  padding: 3px;
  display: flex;
  justify-content: center
}
.nav-item {
  display: inline-block;
  padding: 15px 20px;
  font-size: 15px;
  color: #00FFFF;
}

.nav-link{
  text-decoration: none;
  color: inherit;
}

.router-link-active{
  background: #00FFFF;
  width: 20px;
  border-radius: 6px;
  padding: 5px;
  color: white;
}
</style>
