<template>
  <div class="container-fluid mt-4 page-head">
    <div class="d-flex justify-content-between mb-2">
      <div class="mx-2">Your Shopping Bags</div>
      <div>
        <!-- <router-link to="/search" class="me-2">
          <img
            src="@/assets/icons/search.svg"
            alt="search"
            height="20"
            width="20"
          />
        </router-link> -->

        <router-link to="/add" class="mx-3">
          <img src="@/assets/icons/add.svg" alt="add" height="25" width="25" />
        </router-link>
      </div>
    </div>

    <hr class="bg-primary" />

    <!-- list of bag links -->
    <BagList :bags="bags" @remove-bag="removeBag" />

    <router-link class="fab shadow bg-light" to="/add">
      <img
        src="@/assets/icons/add.svg"
        alt="add"
        height="25"
        width="25"
        class="mt-3"
      />
    </router-link>
  </div>
</template>

<script>
import idb from '@/api/idb.js';
import BagList from "../components/BagList";

export default {
  name: "BagsPage",
  components: { BagList },
  data(){
    return {
      bags: [],
    }
  },
  mounted() {
    idb.getBags()
      .then((response) => {
        this.bags = response;
      })
  },
  methods: {
    async removeBag(bagId) {
      this.bags = this.bags.filter(bag => bag.bag_id !== bagId)
      await idb.removeBag(bagId)
    },
  },
};
</script>

<style scoped>
</style>