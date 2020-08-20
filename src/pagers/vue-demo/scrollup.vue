<template>
    <div class="page">
        <img id="myImg" :src="img" alt="Paris" width="400" height="300" @mousemove="mousemove" @mouseover="mouseover" @mouseout="mouseout">
    </div>
</template>

<script>
    import img from '@/assets/img-big.jpg'
    export default {
        components: {

        },
        data() {
            return {
                img
            }
        },
        methods: {
            mousemove(e) {
                // console.log(e)
            },
            mouseover(e) {
                console.log(e, 2)
            },
            mouseout(e) {
                console.log(e, 3)
            }
        }
    }
</script>

<style scoped>
#myImg {
  width: 400px;
  height: 200px;
  object-fit: cover;
  object-position: 0% 0%;
}
#myImg:hover {
  animation: mymove 5s 1;
}

@keyframes mymove {
  0% {
    object-position: 0% 0%;
  }
  20% {
    object-position: 0% 20%;
  }
  40% {
    object-position: 0% 40%;
  }
  60% {
    object-position: 0% 60%;
  }
  80% {
    object-position: 0% 80%;
  }
  100% {
    object-position: 0% 100%;
  }
}
</style>

