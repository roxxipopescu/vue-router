<template>
  <div class="profile">
    <div class="firstCol">
      <h1>Available profiles</h1>
      <div class="personalData">
        <ul class="data">
          <li v-for="data in availableTvs" :key="data.id">
            <router-link
              exact-active-class="isExactActive"
              active-class="isActive"
              :to="{ name: 'ProfileID', params: { id: data.id } }"
            >
              {{ data.name }} | {{ data.occupation }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="secondCol">We just navigated from {{ from }} to {{ to }}</div>
    <div class="thirdCol">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MyProfile",
  data() {
    return {
      to: "_",
      from: "_",
    };
  },
  computed: {
    ...mapGetters(["amountBought", "availableTvs"]),
  },

  watch: {
    $route(to, from) {
      this.to = to.name;
      this.from = from.name;
    },
  },

  created() {
    this.getListOfAvailableTvs();
  },

  methods: {
    ...mapActions({
      getListOfAvailableTvs: "getTvList",
    }),
  },
};
</script>

<style lang="css" scoped>
.isActive {
  background-color: rgba(216, 211, 211, 0.719);
}
.isExactActive {
  color: rgb(63, 14, 33);
}
.profile {
  text-align: left;
  padding: 10px;
}
.profilePic {
  height: 100px;
}
.firstCol {
  display: inline-block;
  width: 20%;
}
li a {
  text-decoration: none;
  color: rgb(176, 201, 144);
  font-size: 19px;
}
.secondCol {
  display: inline-block;
  width: 30%;
  padding-left: 20px;
}
.thirdCol {
  display: inline-block;
  width: 20%;
  padding-left: 20px;
}
</style>
