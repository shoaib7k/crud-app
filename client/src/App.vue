<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Brooklyn</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/add-product" class="nav-link">Add Product</a>
        </li>
        <li class="nav-item">
          <a href="/add-brand" class="nav-link">Add Brand</a>
        </li>
        
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>