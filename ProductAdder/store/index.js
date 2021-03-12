import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const url = "http://localhost:3001/";

export default new Vuex.Store({
  state: { items: [], categories: [], allCategories: [] },
  mutations: {
    updateItems(state, items) {
      console.log("Vuex Store Mutation updateItems called ", items);
      state.items = items;
      console.log("state.items ", state.items);
    },
    updateCategories(state, categories) {
      console.log("Vuex Store Mutation updateCategories called ", categories);
      state.categories = categories;
      console.log("state.categories ", state.categories);
    },
    updateAllCategories(state, allCategories) {
      console.log(
        "Vuex Store Mutation updateAllCategories called ",
        allCategories
      );
      state.allCategories = allCategories;
      console.log("state.allCategories ", state.allCategories);
    },
  },
  actions: {
    addItems() {
      console.log("Vuex Store Action addItems function called");
      console.log(this.state.items);
      for (let i = 0; i < this.state.items.length; i++) {
        let stateItems = this.state.items[i];
        console.log("state items ", stateItems);
        axios
          .post(url + "stocks/", {
            size: stateItems.size,
            quantity: parseInt(stateItems.amount),
          })
          .then(function(response) {
            console.log("post stock response ", response.data);
            axios
              .post(url + "items/", {
                category_id: parseInt(stateItems.categoryId),
                item_name: stateItems.itemName,
                stock_id: parseInt(response.data),
                recently_added: JSON.parse(stateItems.recentlyAdded),
                reduced_price: JSON.parse(stateItems.reducedPrice),
                item_description: stateItems.itemDescription,
                price: parseFloat(stateItems.price),
                slug: stateItems.itemSlug,
                image: stateItems.image,
              })
              .then((response) => {
                console.log("Response for addItems function ", response);
              });
          });
      }
    },
    addCategories() {
      console.log("Vuex Store Action addCategories function called");
      let categories = this.state.categories;
      console.log("state categories ", categories);
      for (let i = 0; i < categories.length; i++) {
        let categoriesI = categories[i];
        axios
          .post(url + "categories/", {
            category_name: categoriesI.categoryName,
            category_description: categoriesI.categoryDescription,
            category_slug: categoriesI.categorySlug,
            category_image: categoriesI.categoryImage,
            image: categoriesI.image,
          })
          .then((response) => {
            console.log(
              "Response for addCategories function called with response ",
              response
            );
          });
      }
    },
    getAllCategories({ commit }) {
      console.log("Vuex Store Action getAllCategories function called ");
      axios.get(url + "categories/").then((response) => {
        commit("updateAllCategories", response.data);
      });
    },
  },
  modules: {},
});
