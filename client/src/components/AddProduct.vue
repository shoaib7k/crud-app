
<template>
  <div class="submit-form"  >  
    <div class="bg-red-300 absolute inset-0 z-0"></div>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="name"
          name="name"
        />
      </div>
     <div class="form-group">  
       <div class="bg-red-300 absolute inset-0 z-0"></div>
      <label for="brand">Brand</label>
     <input type="text" class="form-control z-10" autocomplete="off" v-model="brand" @input="filterBrands" @focus="modal=true">
     <div v-if="filteredBrands && modal" >
      <ul  class="w-20 bg-black-200 text-gray" style="list-style-type:none">
        <li  v-bind:key="filteredBrand" v-for="filteredBrand in filteredBrands" @click="setBrand(filteredBrand)">{{ filteredBrand }}</li>
      </ul>
     </div>  
     
    </div> 
    <button @click="saveProduct" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>

</template>

<script>
import ProductDataService from "../services/ProductDataService";
//import { axios } from '@/plugins/axios'
import {HTTP} from '../http-common'

export default {
  data :function() {
    return {
     
      //  loadurl:'localhost:8080/api/brands',
        id: null,
        name: "",
        brand: '',
        //brands: ['Adidas', 'Nike','Alaska','Texas'],
        filteredBrands: [],
        clientBrands: [],
        modal: false,
        crossDomain:true,
        info: null,
  
    
      submitted: false
    };
  },
  created() {
    HTTP.get(`/brands`)
    .then(response => {
      this.info = response.data,
      this.info.forEach((element) => {
          this.clientBrands.push(element.name);
      });
     // console.log(this.clientBrands);
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
   /*mounted () {
    axios
      .get('/brands/')
      .then(response => (this.info = response))
  },*/

  methods: {
    setBrand(brand){
      //this.name=name;
      this.brand=brand;
      console.log(this.brand);
      this.modal=false;
    },
    filterBrands(){
      this.filteredBrands= this.clientBrands.filter(brand =>{
        return brand.startsWith(this.brand);
      });
    },
    saveProduct() {
      var data = {
        name: this.name,
        brand: this.brand
      };
      console.log(data);

      ProductDataService.create(data)
        .then(response => {
          this.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    
    newProduct() {
      this.submitted = false;
      this.product = {};
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