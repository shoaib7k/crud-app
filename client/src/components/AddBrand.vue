<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="brand.name"
          name="name"
        />
      </div>


      <button @click="saveBrand" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newBrand">Add</button>
    </div>
  </div>
</template>

<script>
import BrandDataService from "../services/BrandDataService";

export default {
  name: "add-brand",
  data() {
    return {
      brand: {
        id: null,
        name: "",
      },
      submitted: false
    };
  },
  methods: {
    saveBrand() {
      var data = {
        name: this.brand.name
      };

      BrandDataService.create(data)
        .then(response => {
          this.brand.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    
    newBrand() {
      this.submitted = false;
      this.brand = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>