<template>
  <main class="add-items-container">
    <div class="row">
      <div class="col-2"></div>
      <section id="add-items" class="col-8">
        <h2>
          Add Items
          <button v-on:click="addRow()" id="add-row">Add Row</button>
        </h2>
        <form id="bulk-add-items-form" v-on:submit="addItems()">
          <div
            v-for="(item, counter) in items"
            v-bind:key="counter"
            style="margin-bottom: 5px; border: 1px solid #333;"
          >
            <!-- <input
              type="number"
              v-model="item.categoryId"
              placeholder="Category Id"
            /> -->
            <select v-model="item.categoryId" placeholder="">
              <option
                v-for="category in allCategories"
                v-bind:key="category.category_name"
                v-bind:value="category.id"
              >
                {{ category.category_name }}
              </option>
            </select>
            <input
              type="text"
              v-model="item.itemName"
              placeholder="Item Name"
            />
            <input
              type="text"
              v-model="item.itemDescription"
              placeholder="Item Description"
            />
            <input type="text" v-model="item.size" placeholder="Size" />
            <input
              type="text"
              v-model="item.recentlyAdded"
              placeholder="Recently Added"
            />
            <input
              type="text"
              v-model="item.reducedPrice"
              placeholder="Reduced Price"
            />
            <input type="number" v-model="item.price" placeholder="Price" />
            <input type="number" v-model="item.amount" placeholder="Amount" />
            <input type="text" v-model="item.image" placeholder="Image" />
            <input
              type="text"
              v-model="item.itemSlug"
              placeholder="Item Slug"
            />
            <span @click="removeRow">&times;&nbsp;Remove Item</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "AddItems",
  mounted() {
    this.$store.dispatch("getAllCategories");
  },
  computed: {
    ...mapState(["allCategories"]),
  },
  data() {
    return {
      items: [
        {
          categoryId: "",
          itemName: "",
          itemDescription: "",
          itemSlug: "",
          // itemImage: "",
          size: "",
          recentlyAdded: "",
          reducedPrice: "",
          amount: "",
          price: "",
          image: "",
        },
      ],
    };
  },
  methods: {
    addItems: function() {
      console.log("Add Items called with items ", this.items);
      this.$store.commit("updateItems", this.items);
      console.log("Items ");
      this.$store.dispatch("addItems");
    },
    addRow: function() {
      console.log("addRow function called ");
      // document.getElementById("bulk-add-items-form").innerHTML +=
      // '<div class="item-to-add"><span><input type="text" id="categoryId" name="categoryId" placeholder="Category Id"></input></span><span><input type="text" id="itemName" name="itemName" placeholder="Item Name"></input><span><textarea type="text" id="itemDescription" name="itemDescription" placeholder="Item Description" ></textarea></span><span><input type="text" id="itemSlug" name="itemSlug" placeholder="Item Slug"></input></span><span><input type="file" id="itemImage" name="itemImage" placeholder="Item Image"></input></span><span><input type="text" id="size" name="size" placeholder="Size"></input></span><span><input type="text" id="recentlyAdded" name="recentlyAdded" placeholder="Recently Added"></input></span><span><input type="text" id="reducedPrice" name="reducedPrice" placeholder="Reduced Price"></input></span><span><input type="text" id="amount" name="amount" placeholder="Amount"></input></span><span><input type="text" id="price" name="price" placeholder="Price"></input></span><span><input type="text" id="image" name="image" placeholder="Image"></input></span></div>';
      this.items.push({
        categoryId: "",
        itemName: "",
        itemDescription: "",
        itemSlug: "",
        // itemImage: "",
        size: "",
        recentlyAdded: "",
        reducedPrice: "",
        amount: "",
        price: "",
        image: "",
      });
    },
    removeRow: function(counter) {
      console.log("removeRow function called with counter", counter);
      this.items.splice(counter, 1);
    },
  },
};
</script>
<style></style>
