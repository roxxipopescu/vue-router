<template>
  <div class="hello">
    <div class="inventory">
      <div>TVs left in Store: {{ totalTvCount }}</div>
      <div v-if="happyStaff">The staff seems happy today</div>
      <div class="buttons">
        <button :disabled="!totalTvCount" @click="buyTv(1)">Buy TV</button>
        <button :disabled="totalTvCount < 2" @click="buyTwoTvs">
          Buy Two TVs
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "StoreData",

  computed: {
    ...mapState(["totalTvCount"]),

    ...mapGetters(["happyStaff", "availableTvs"]),
  },

  created() {
    this.getListOfAvailableTvs();
  },

  methods: {
    ...mapActions({
      buyTv: "removeTv",
      getListOfAvailableTvs: "getTvList",
    }),

    buyTwoTvs() {
      //this.removeTv(2);
      this.$store.dispatch("removeTv", 2);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons {
  margin-top: 10px;
}
button {
  margin-right: 5px;
  background-color: cornflowerblue;
  height: 40px;
  border-radius: 5px;
  border: 0;
  padding: 10px;
  color: white;
  cursor: pointer;
}
button:disabled {
  background-color: rgb(190, 190, 190);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.inventory {
  margin: auto;
  padding: 10px;
  background-color: rgb(173, 204, 209);
  width: 30%;
}
</style>
