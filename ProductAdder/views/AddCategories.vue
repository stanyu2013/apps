<template>
  <main class="add-categories-container">
    <div class="row">
      <div class="col-2"></div>
      <section id="add-categories" class="col-8">
        <h2>
          Add Categories
          <button v-on:click="addRow()" id="add-row">Add Row</button>
        </h2>
        <form id="bulk-add-categories-form" v-on:submit="addCategories()">
          <div
            v-for="(category, counter) in categories"
            v-bind:key="counter"
            style="margin-bottom: 5px; border: 1px solid #333;"
          >
            <input
              type="text"
              v-model="category.categoryName"
              placeholder="Category Name"
            />
            <textarea
              v-model="category.categoryDescription"
              placeholder="Category Description"
            />
            <input
              type="text"
              v-model="category.categorySlug"
              placeholder="Category Slug"
            />
            <!-- <input
              type="text"
              v-model="category.categoryImage"
              placeholder="Category Image"
            /> -->
            <input type="text" v-model="category.image" placeholder="Image" />
            <span @click="removeRow">&times;&nbsp;Remove Category</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  </main>
</template>
<script>
export default {
  name: "AddCategories",
  data() {
    return {
      categories: [
        {
          categoryName: "",
          categoryDescription: "",
          categorySlug: "",
          categoryImage: "",
          image: "",
        },
      ],
    };
  },
  methods: {
    addCategories: function() {
      console.log("Add Categories called with categories ", this.categories);
      this.$store.commit("updateCategories", this.categories);
      console.log("Categories ");
      this.$store.dispatch("addCategories");
    },
    addRow: function() {
      console.log("addRow function called ");
      // document.getElementById("bulk-add-items-form").innerHTML +=
      // '<div class="item-to-add"><span><input type="text" id="categoryId" name="categoryId" placeholder="Category Id"></input></span><span><input type="text" id="itemName" name="itemName" placeholder="Item Name"></input><span><textarea type="text" id="itemDescription" name="itemDescription" placeholder="Item Description" ></textarea></span><span><input type="text" id="itemSlug" name="itemSlug" placeholder="Item Slug"></input></span><span><input type="file" id="itemImage" name="itemImage" placeholder="Item Image"></input></span><span><input type="text" id="size" name="size" placeholder="Size"></input></span><span><input type="text" id="recentlyAdded" name="recentlyAdded" placeholder="Recently Added"></input></span><span><input type="text" id="reducedPrice" name="reducedPrice" placeholder="Reduced Price"></input></span><span><input type="text" id="amount" name="amount" placeholder="Amount"></input></span><span><input type="text" id="price" name="price" placeholder="Price"></input></span><span><input type="text" id="image" name="image" placeholder="Image"></input></span></div>';
      this.categories.push({
        categoryName: "",
        categoryDescription: "",
        categorySlug: "",
        categoryImage: "",
        image: "",
      });
    },
    removeRow: function(counter) {
      console.log("removeRow function called with counter", counter);
      this.categories.splice(counter, 1);
    },
  },
};
</script>
<style></style>
