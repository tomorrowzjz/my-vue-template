<template>
  <div class="">
    <el-button @click="print">下载pdf</el-button>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
export default {
  name: '',
  created() {

  },
  data() {
    return {
      msg: 'hello',
    };
  },

  computed: {},

  mounted() {

  },
  methods: {
    print() {
      const doc = new jsPDF();

      doc.text('Hello world!', 1, 1);
      doc.save('two-by-four.pdf');
    },
  },
  watch: {},
  components: {},
};
</script>

<style scoped lang="scss">

</style>
