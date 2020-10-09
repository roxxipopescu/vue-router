<template>
  <div class="pid">
    <div class="categs">
      <router-link :to="{ name: 'Categories', params: { categId: 12 } }">
        Go the 12th category
      </router-link>
      <p class="click" @click="gotoRoute">
        Go to the 1st category via programatic routing
      </p>
    </div>
    <p>Is user authenticated: {{ isAuthenticated }}</p>
    <div class="profileID">The profile id is {{ $route.params.id }}</div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false,
      randomData: "random data",
    };
  },
  methods: {
    gotoRoute() {
      this.$router.push({
        name: "Categories",
        params: { categId: 1 },
        query: { plan: "private" },
      });
    },
    checkAuth() {
      setTimeout(() => {
        this.isAuthenticated = true;
      }, 1000);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // access to component's instance using `vm` . this is done because this navigation guard is called before the component is created.
      vm.checkAuth();
      next();
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.randomData);
    next();
  },
};
</script>

<style>
.pid {
  border: 1px solid gray;
  padding: 30px;
  background-color: lemonchiffon;
}
.click {
  border: 1px solid rgb(49, 6, 6);
  padding: 7px;
  border-radius: 3px;
  background-color: rgba(240, 190, 190, 0.911);
}
</style>