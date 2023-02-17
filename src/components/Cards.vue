<template>
  <div class="bg-primary py-8 text-center">
    <h2 class="text-5xl font-bold text-base-100 p-8">Lorem Ipsum Dolor</h2>
    <div class="flex md:flex-row flex-wrap justify-center gap-10 py-8">
      <div v-for="(card, index) in cards" :key="index" class="card w-72 bg-gray-100 shadow-xl py-6">
        <figure><img :src="`src/assets/${card.img}.svg`" alt="Laptop" /></figure>
        <div class="card-body text-base-100">
          <h2 class="card-title">{{ card.title }}</h2>
          <p>{{ card.text }}</p>
          <!-- <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div> -->
        </div>
      </div>
    </div>
    <div class="card-actions justify-center">
      <button class="btn btn-secondary">Let's Chat</button>
    </div>
  </div>
</template>

<script>
const cards = [
  {title: "title 1", text: "lorem ipsum dolor sit amet", img: "social-sharing"},
  {title: "title 2", text: "lorem ipsum dolor sit amet", img: "projections"},
  {title: "title 3", text: "lorem ipsum dolor sit amet", img: "graphic5"}
]
export default {
  setup () {


    return {cards}
  }
}
</script>

<style lang="css" scoped>
.card img {
  max-width: 50%;
}
</style>