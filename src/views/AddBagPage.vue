<template>
  <div class="container-fluid my-4 page-head">
    <h4>Create bag and items to buy</h4>
    <form @submit.prevent="addBag" class="v-center mt-3">
      <input
        type="text"
        name="bag_name"
        id="bag_name"
        class="form-control mb-2"
        v-model="bag.bag_name"
        required
        placeholder="Name your shopping"
      />
      <textarea
        name="comment"
        id="comment"
        class="form-control mb-2"
        cols="70"
        rows="3"
        v-model="bag.comment"
        placeholder="Some notes..."
      ></textarea>

      <div class="mb-2 form-control">
        <span class="me-3">Select preferred currency:</span>
        <br>
        <input class="me-1" type="radio" id="cedi" value="₵" v-model="bag.currency" required />
        <label class="me-3" for="cedi">₵</label>

        <input class="me-1" type="radio" id="dollar" value="$" v-model="bag.currency" required />
        <label class="me-3" for="dollar">$</label>
        
        <input class="me-1" type="radio" id="naira" value="₦" v-model="bag.currency" required />
        <label class="me-3" for="naira">₦</label>
      </div>

      <h5 class="mt-4">Add Item</h5>
      <AddItem @add-item="addItem" />
      <DisplayItems :items="bag.items" :currency="bag.currency" @remove-item="removeItem" />

      <div class="d-grid">
        <input type="submit"  value="Create Bag" class="btn btn-primary" />
      </div>
    </form>
  </div>
</template>

<script>
import idb from '@/api/idb.js';
import AddItem from "../components/AddItem";
import DisplayItems from "../components/DisplayItems";

export default {
  name: "AddBagPage",
  components: { AddItem, DisplayItems },
  data() {
    return {
      bag: {
        bag_id: null,
        bag_name: '',
        comment: '',
        currency: '₵',
        items: []
      }
    };
  },
  methods: {
    addItem(newItem) {
      this.bag.items.push(newItem);
    },
    async addBag() {
      this.bag.bag_id = new Date().toISOString()
      await idb.addBag(this.bag);
      this.$router.push('/bags')
    },
    removeItem(itemId) {
      this.bag.items = this.bag.items.filter((item) => item.item_id !== itemId);
    },
  },
};
</script>

<style>
</style>