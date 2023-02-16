<template>
  <div class="flex md:flex-row flex-wrap justify-center gap-10 py-8">
    <div class="card w-72 bg-secondary shadow-xl py-6">
      <figure><img src="src/assets/social-sharing.svg" alt="Laptop" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    <!-- card 2 -->
    <div class="card w-72 bg-base-100 bg-secondary shadow-xl py-6">
      <figure><img src="src/assets/projections.svg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    <!-- card 3 -->
    <div class="card w-72 bg-base-100 bg-secondary shadow-xl py-6">
      <figure><img src="src/assets/graphic5.svg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {


    return {}
  }
}
</script>

<style lang="css" scoped>
.card img {
  max-width: 50%;
}
</style>