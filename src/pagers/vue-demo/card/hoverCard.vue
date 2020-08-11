<template>
  <div class="page">
    <card :data-image="card1">
        <h1 slot="header">card</h1>
        <p slot="content">test card</p>
    </card>
    <card :data-image="card2">
        <h1 slot="header">card</h1>
        <p slot="content">test card</p>
    </card>
    <card :data-image="card2">
        <h1 slot="header">card</h1>
        <p slot="content">test card</p>
    </card>
    <card :data-image="card1">
        <h1 slot="header">card</h1>
        <p slot="content">test card</p>
    </card>
  </div>
</template>

<script>
import card from "./card"
import card1 from '@/assets/card1.jpg'
import card2 from '@/assets/card2.jpg'
export default {
  data() {
    return {
        card1,
        card2
    }
  },
  components: {
      card
  }
}
</script>

<style scoped lang="scss">
    .page{
        display: flex;
    }

</style>
